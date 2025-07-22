export type FormUser = { email: string; password: string };

export type User = {
  id: string;
  role: "seller" | "admin";
  email: string;
  password: string;
};

export type Color = { id: string; label: string; rgb: string };
export type Material = { id: string; label: string; imageSVG: string };
export type Size = { id: string; label: string };

export type FormProduct = {
  // id: string;
  title: string;
  description: string;
  categoryId: string;
  brandId: string;
  genre: string;
  imagePreview: string;
  // createAt: string;
  // updatedAt: string;
  // createdBy: string;
  // updatedBy: string;
};

export type Genre = "female" | "male" | "unisex";

export type ProductSchema = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  brandId: string;
  genre: Genre;
  imagePreview: string;
  createAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};

export type CategoryData = {
  id: string;
  label: string;
};

export type ProductConfigSchema = {
  id: string;
  productId: string;
  colorId: string;
  materialId: string;
  sizeId: string;
  price: string;
  discount: string;
  createAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};

export type ProductConfigData = {
  id: string;
  colorId: string;
  materialId: string;
  sizeId: string;
  price: string;
  discount: string;
};

export type ProductLocation = { id: string; label: string }[];
export type ProductState = "good" | "bad" | "sold" | "lose";

export type ProductStockSchema = {
  id: string;
  productId: string;
  productConfigId: string;
  location: ProductLocation;
  state: ProductState;
  createAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};
