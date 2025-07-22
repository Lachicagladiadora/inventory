import { validateProductConfig } from "../utils/validateProductConfig.utils";

type AddProductConfigInput = {
  params: {
    productId: string;
    colorId: string;
    materialId: string;
    sizeId: string;
    price: string;
    discount: string;
  }[];
};

export const addProductConfig = async ({
  params,
}: AddProductConfigInput): Promise<{ message: string }> => {
  const newList = validateProductConfig(params);

  const data = newList.map((c) => ({
    ...c,
    // id: crypto.randomUUID(),
  }));
  const response = await fetch("http://localhost:4321/api/product-config", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  });
  if (response.status !== 200) {
    throw Error("Data invalid");
  }
  return await response.json();
};
