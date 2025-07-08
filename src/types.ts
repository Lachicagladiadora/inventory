export type FormUser = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  role: "seller" | "admin";
  email: string;
  password: string;
};

export type FormProduct = {
  // id: string;
  title: string;
  description: string;
  categoryId: string;
  brand: string;
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
