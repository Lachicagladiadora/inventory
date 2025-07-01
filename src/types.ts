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
