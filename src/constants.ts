import type { FormUser } from "./types";

export const EMPTY_USER: FormUser = {
  email: "",
  password: "",
};

export const SECRET = "12345678";

export const CATEGORIES = [
  {
    id: "e091d5bf-ea1f-491a-a4a5-4f527739847b",
    label: "outdoor",
  },
  {
    id: "76a1d615-1b55-4332-afe7-ec5c635ff7ea",
    label: "sport",
  },
];

export const BRANDS = [
  {
    id: "40eeb242-89c7-4491-a6ed-59385aa38f8a",
    label: "talaria",
  },
  {
    id: "16ff8130-0a40-4127-9e62-448b3e9a6b35",
    label: "haven",
  },
];

export const GENRE = ["female", "male", "unisex"];
