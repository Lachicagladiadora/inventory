import { jwtVerify, SignJWT } from "jose";
import { SECRET } from "./constants";
import { getOneHourAfterNow } from "./utils/date.utils";
import { encoder } from "astro/runtime/server/render/common.js";

export const onRequest = async (context, next) => {
  const access = context.cookies.get("accessCookies");
  const refresh = context.cookies.get("refreshCookies");
  if (!access) return next();
  if (!refresh) return next();
  const userDataAccess = jwtVerify(access.value, encoder.encode(SECRET));
  const userDataRefresh = jwtVerify(refresh.value, encoder.encode(SECRET));
  if (!userDataAccess) {
    const accessToken = await new SignJWT({ userId: userDataRefresh.userId })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h") // puede ser '1h', '2d', '30m', etc.
      .sign(encoder.encode(SECRET));

    context.cookies.set("accessCookies", accessToken, {
      expires: getOneHourAfterNow(),
    });
    context.locals.user = userDataAccess.userId;
    return next();
  }
  context.locals.user = userDataAccess.userId;
  return next();
};
