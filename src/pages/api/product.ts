import type { APIRoute } from "astro";
import { db, Product } from "astro:db";
import { validateProduct } from "../../utils/validateProduct.utils";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body) throw Error("Exist an error in the product information");
    //validar que sea lo que quiero
    const data = {
      ...body,
      createAt: new Date().toString(),
      updatedAt: new Date().toString(),
      createdBy: "admin",
      updatedBy: "admin",
    };
    const product = validateProduct(data);
    console.log({ product, data });
    if (!product) throw Error("Review the product data, you have an error");
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
