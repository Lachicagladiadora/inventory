import { IS_UUID, RE_POSITIVE_NUMBER } from "./regex.utils";

export const verifyBrand = () => {};
export const verifyGenre = () => {};

export const validateProductConfig = (
  value: {
    // id: string;
    productId: string;
    colorId: string;
    materialId: string;
    sizeId: string;
    price: string;
    discount: string;
  }[]
) => {
  const data = value.map((c) => {
    // const id = c.id;
    const productId = c.colorId;
    const colorId = c.colorId;
    const materialId = c.materialId;
    const sizeId = c.sizeId;
    const price = c.price;
    const discount = c.discount;

    // if (!IS_UUID.test(id)) throw Error("'id' invalid");
    if (!IS_UUID.test(productId))
      throw Error("Your 'product' selected isn't correct");
    if (!IS_UUID.test(colorId))
      throw Error("Your 'color' selected isn't correct");
    if (!IS_UUID.test(materialId))
      throw Error("Your 'material' selected isn't correct");
    if (!IS_UUID.test(sizeId))
      throw Error("Your 'size' selected isn't correct");
    if (!RE_POSITIVE_NUMBER.test(price))
      throw Error("The price is not a number");
    if (!RE_POSITIVE_NUMBER.test(discount))
      throw Error("Your have an error in the 'imagePreview'");

    return {
      // id,
      productId,
      colorId,
      materialId,
      sizeId,
      price,
      discount,
    };
  });
  return data;
};
