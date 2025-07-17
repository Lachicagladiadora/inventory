import type { ProductConfigData } from "../types";

type AddProductConfigInput = {
  params: {
    productId: string;
    productConfig: ProductConfigData;
  };
};

export const addProductConfig = async ({
  params,
}: AddProductConfigInput): Promise<{ message: string }> => {
  const response = await fetch("http://localhost:4321/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params.productConfig,
      productId: params.productId,
      id: crypto.randomUUID(),
    }),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return await response.json();
};
