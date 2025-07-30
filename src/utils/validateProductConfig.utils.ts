import { IS_UUID, RE_POSITIVE_NUMBER } from "./regex.utils";

export const verifyBrand = () => {};
export const verifyGenre = () => {};

export const validateProductConfig = (
  value: {
    productId: string;
    colorId: string;
    materialId: string;
    sizeId: string;
    price: string;
    discount: string;
  }[]
) => {
  const data = value.map((c) => {
    if (!IS_UUID.test(c.productId))
      throw Error("Your 'product' selected isn't correct");
    if (!IS_UUID.test(c.colorId))
      throw Error("Your 'color' selected isn't correct");
    if (!IS_UUID.test(c.materialId))
      throw Error("Your 'material' selected isn't correct");
    if (!IS_UUID.test(c.sizeId))
      throw Error("Your 'size' selected isn't correct");
    if (!RE_POSITIVE_NUMBER.test(c.price))
      throw Error("The price is not a number");
    if (!RE_POSITIVE_NUMBER.test(c.discount))
      throw Error("Your have an error in the 'imagePreview'");

    return {
      productId: c.productId,
      colorId: c.colorId,
      materialId: c.materialId,
      sizeId: c.sizeId,
      price: c.price,
      discount: c.discount,
    };
  });
  return data;
};
