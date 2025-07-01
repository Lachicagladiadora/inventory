import type { APIRoute } from "astro";
import { db, User } from "astro:db";
import { IS_EMAIL } from "../../utils/regex.utils";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    if (!IS_EMAIL.test(body.email)) throw Error("Email invalid");
    if (body.password.length !== 8)
      throw Error("The password must have 8 characters");
    await db.insert(User).values(body);
    return new Response(
      JSON.stringify({
        message: `User ${body.email} created`,
      }),
      { status: 200 }
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
