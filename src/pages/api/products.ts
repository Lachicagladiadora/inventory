import type { APIRoute } from "astro";
import { db, Product } from "astro:db";

export const GET: APIRoute = async (): Promise<Response> => {
  try {
    const products = await db.select().from(Product);
    console.log({ products });
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log({ error });
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
