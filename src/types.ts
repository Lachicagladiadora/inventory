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

export type ProductSchema = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  brand: string;
  genre: string;
  imagePreview: string;
  createAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};
