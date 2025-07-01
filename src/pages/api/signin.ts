import { type APIRoute } from "astro";
import { db, eq, User } from "astro:db";
import jwt from "jsonwebtoken";

import { IS_EMAIL } from "../../utils/regex.utils";
import { SECRET } from "../../constants";
import { getOneHourAfterNow } from "../../utils/date.utils";

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
    const accessToken = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: "7d",
    });

    cookies.set("accessCookies", accessToken, {
      expires: getOneHourAfterNow(),
    });
    cookies.set("refreshCookies", refreshToken, {
      expires: getOneHourAfterNow(),
    });

    // locals.user = user.id
    return new Response(
      JSON.stringify({
        status: 200,
        message: "Congratulations! Access allowed",
        body: { email: body.email },
      })
    );
  } catch (error) {
    console.error({ error });
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
