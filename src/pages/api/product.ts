import type { APIRoute } from "astro";
import { db, Product } from "astro:db";
import { validateProduct } from "../../utils/validateProduct.utils";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const user = locals.user;
    if (!user) throw Error("You need access for this content");
    const body = await request.json();
    if (!body) throw Error("Exist an error in the product information");
    const data = {
      ...body,
      createAt: new Date().toString(),
      updatedAt: new Date().toString(),
      createdBy: "admin",
      updatedBy: "admin",
    };
    const product = validateProduct(data);
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
