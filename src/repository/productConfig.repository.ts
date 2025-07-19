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
  const response = await fetch("http://localhost:4321/api/product-config", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...params,
      id: crypto.randomUUID(),
    }),
  });
  if (response.status !== 200) {
    throw Error("Data invalid");
  }
  return await response.json();
};
