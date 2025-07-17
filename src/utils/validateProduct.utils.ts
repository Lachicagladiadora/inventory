import { BRANDS, GENRE } from "../constants";
import type { ProductSchema } from "../types";
import {
  IS_DATE,
  IS_DESCRIPTION,
  IS_IMAGE_PREVIEW,
  IS_TITLE,
  IS_UUID,
} from "./regex.utils";

export const verifyBrand = () => {};
export const verifyGenre = () => {};

export const validateProduct = (value: ProductSchema) => {
  const id = value.id;
  const title = value.title;
  const description = value.description;
  const categoryId = value.categoryId;
  const brandId = value.brandId;
  const genre = value.genre;
  const imagePreview = value.imagePreview;

  if (!IS_UUID.test(id)) throw Error("'id' invalid");
  if (!IS_TITLE.test(title)) throw Error("Your have an error in the 'title'");
  if (!IS_DESCRIPTION.test(description))
    throw Error("Your 'description' perhaps is very short or pretty long");
  if (!IS_UUID.test(categoryId)) throw Error("Your 'categoryId' is incorrect");
  if (!BRANDS.some((c) => c.id === brandId)) throw Error("'brand' invalid");
  if (!GENRE.some((c) => c === genre.toLocaleLowerCase()))
    throw Error("'genre' incorrect");
  if (!IS_IMAGE_PREVIEW.test(imagePreview))
    throw Error("Your have an error in the 'imagePreview'");

  return {
    id,
    title,
    description,
    categoryId,
    brandId,
    genre,
    imagePreview,
    createAt: value.createAt,
    updatedAt: value.updatedAt,
    createdBy: value.createdBy,
    updatedBy: value.updatedBy,
  };
};
