import { BRANDS, GENRE } from "../constants";
import type { ProductSchema } from "../types";
import {
  IS_DATE,
  IS_DESCRIPTION,
  IS_IMAGE_PREVIEW,
  IS_TITLE,
  IS_UUID,
  RE_POSITIVE_NUMBER,
} from "./regex.utils";

export const verifyBrand = () => {};
export const verifyGenre = () => {};

export const validateProductConfig = (value: {
  id: string;
  productId: string;
  colorId: string;
  materialId: string;
  sizeId: string;
  price: string;
  discount: string;
}) => {
  const id = value.id;
  const productId = value.colorId;
  const colorId = value.colorId;
  const materialId = value.materialId;
  const sizeId = value.sizeId;
  const price = value.price;
  const discount = value.discount;

  if (!IS_UUID.test(id)) throw Error("'id' invalid");
  if (!IS_UUID.test(productId))
    throw Error("Your 'product' selected isn't correct");
  if (!IS_UUID.test(colorId))
    throw Error("Your 'color' selected isn't correct");
  if (!IS_UUID.test(materialId))
    throw Error("Your 'material' selected isn't correct");
  if (!IS_UUID.test(sizeId)) throw Error("Your 'size' selected isn't correct");
  if (!RE_POSITIVE_NUMBER.test(price)) throw Error("The price is not a number");
  if (!RE_POSITIVE_NUMBER.test(discount))
    throw Error("Your have an error in the 'imagePreview'");

  return {
    id,
    productId,
    colorId,
    materialId,
    sizeId,
    price,
    discount,
  };
};
