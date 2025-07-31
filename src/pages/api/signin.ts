import { type APIRoute } from "astro";
import { db, eq, User } from "astro:db";

import { IS_EMAIL } from "../../utils/regex.utils";
import { SECRET } from "../../constants";
import { getOneHourAfterNow } from "../../utils/date.utils";
import { encoder } from "astro/runtime/server/render/common.js";
import { SignJWT } from "jose";

export const prerender = false;

export const POST: APIRoute = async ({ cookies, request }) => {
  try {
    const body = await request.json();
    if (!body) throw Error("Don't send data");
    if (!IS_EMAIL.test(body.email)) throw Error("Email invalid");
    if (body.password.length !== 8) throw Error("Password invalid");
    const users = await db
      .select()
      .from(User)
      .where(eq(User.email, body.email))
      .limit(1);
    const user = users[0];
    if (!user) throw Error("User not found");
    const accessToken = await new SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h") // puede ser '1h', '2d', '30m', etc.
      .sign(encoder.encode(SECRET));

    const refreshToken = await new SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d") // puede ser '1h', '2d', '30m', etc.
      .sign(encoder.encode(SECRET));

    cookies.set("accessCookies", accessToken, {
      expires: getOneHourAfterNow(),
    });
    cookies.set("refreshCookies", refreshToken, {
      expires: getOneHourAfterNow(),
    });

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Congratulations! Access allowed",
        body: { email: body.email },
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
