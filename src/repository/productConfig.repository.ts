import type { ProductConfigData } from "../types";

type AddProductConfigInput = {
  params: {
    // id: string;
    productId: string;
    colorId: string;
    materialId: string;
    sizeId: string;
    price: string;
    discount: string;
  };
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
