import type { APIRoute } from "astro";
import { db, ProductConfig } from "astro:db";
import type { ProductConfigSchema } from "../../types";
import { validateProductConfig } from "../../utils/validateProductConfig.utils";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const user = locals.user;
    if (!user) throw Error("You need access for this content");
    const body = await request.json();
    if (!body) throw Error("Exist an error in the product-config information");
    const validBody = validateProductConfig(body);

    const data: ProductConfigSchema[] = validBody.map((c) => ({
      ...c,
      id: crypto.randomUUID(),
      createAt: new Date().toString(),
      updatedAt: new Date().toString(),
      createdBy: "admin",
      updatedBy: "admin",
    }));
    // productId is not same
    console.log({ data });
    await db.insert(ProductConfig).values(data);
    return new Response(
      JSON.stringify({
        message: `New product-config created`,
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

export const GET: APIRoute = async (context): Promise<Response> => {
  try {
    const user = context.locals.user;
    if (!user) throw Error("You need access for this content");
    const productsConfigs = await db.select().from(ProductConfig);
    console.log({ productsConfigs });
    return new Response(JSON.stringify(productsConfigs), { status: 200 });
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
