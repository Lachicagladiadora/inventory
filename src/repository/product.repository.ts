import { validateProduct } from "../utils/validateProduct.utils";

export const addProduct = async (params: {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  brandId: string;
  genre: string;
  imagePreview: string;
}): Promise<{ message: string }> => {
  const data = validateProduct(params);

  const response = await fetch("http://localhost:4321/api/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.status !== 200) {
    throw Error("Email or password invalid");
  }
  return await response.json();
};
