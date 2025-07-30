import type { APIRoute } from "astro";
import { db, ProductStock } from "astro:db";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const user = locals.user;
    if (!user) throw Error("You need access for this content");
    const body = await request.json();
    if (!body) throw Error("Exist an error in the product-config information");
    const data = {
      ...body,
      id: crypto.randomUUID(),
      createAt: new Date().toString(),
      updatedAt: new Date().toString(),
      createdBy: "admin",
      updatedBy: "admin",
    };

    await db.insert(ProductStock).values(data);
    return new Response(
      JSON.stringify({
        message: `New product-stock created`,
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
