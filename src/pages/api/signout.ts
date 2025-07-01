import { type APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  try {
    cookies.delete("accessCookies");
    cookies.delete("refreshCookies");
    return new Response(
      JSON.stringify({
        status: 200,
        message: "Congratulations! You closed session",
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
