import type { APIRoute } from "astro";
import { db, Product } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body) throw Error("Exist an error in the product information");
    const product = {
      ...body,
      createAt: new Date().toString(),
      updatedAt: new Date().toString(),
      createdBy: "admin",
      updatedBy: "admin",
    };
    await db.insert(Product).values(product);
    return new Response(
      JSON.stringify({
        message: `User ${product.title} created`,
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
