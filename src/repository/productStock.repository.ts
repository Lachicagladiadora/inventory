// import { validateProduct } from "../utils/validateProduct.utils";

import type { ProductStockForm } from "../types";

export const addProductStock = async (
  params: ProductStockForm
): Promise<{ message: string }> => {
  // const data = validateProduct(params);

  const response = await fetch("http://localhost:4321/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (response.status !== 200) {
    throw Error("Data invalid");
  }
  return await response.json();
};
