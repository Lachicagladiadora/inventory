import type { ProductSchema } from "../types";

export const getProducts = async (): Promise<ProductSchema[]> => {
  const response = await fetch("http://localhost:4321/api/products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return response.json();
};
