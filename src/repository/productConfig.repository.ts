import type { ProductConfigData, ProductConfigSchema } from "../types";

type AddProductConfigInput = {
  params: Exclude<ProductConfigSchema, { id; createdAt }>;
};

export const addProductConfig = async ({
  params,
}: AddProductConfigInput): Promise<{ message: string }> => {
  const response = await fetch("http://localhost:4321/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      id: crypto.randomUUID(),
    }),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return await response.json();
};
