import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response("Hi DB", { status: 200 });
};
