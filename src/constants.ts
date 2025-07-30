import type { Color, FormUser, Genre, Location, Material, Size } from "./types";

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

export const GENRE: Genre[] = ["female", "male", "unisex"];

export const COLORS: Color[] = [
  {
    id: "d1f77a60-7e94-40f5-bef4-180ec3dabe17",
    rgb: "#000000",
    label: "Black",
  },
  {
    id: "aa92c1f3-c0ed-41fc-baeb-323478ac0ac6",
    rgb: "#673521",
    label: "Brown",
  },
  {
    id: "7c674361-0ed0-4901-a336-5095e7f19327",
    rgb: "#ffffff",
    label: "White",
  },
];
export const MATERIALS: Material[] = [
  {
    id: "c3427c8d-5b65-48b8-96df-002365bedce0",
    imageSVG: "https://static.thenounproject.com/png/168303-200.png",
    label: "Leather",
  },
  {
    id: "b1ebd01e-bf48-422c-b48e-644ba4bc3f1a",
    imageSVG: "https://static.thenounproject.com/png/748910-200.png",
    label: "Tarp",
  },
  {
    id: "dd860c8e-c5e1-4a2d-a152-3a473911515e",
    imageSVG: "https://img.icons8.com/stamp/512w/leather.png",
    label: "Patent leather",
  },
];
export const SIZES: Size[] = [
  { id: "442cff0d-bb66-4fca-956a-5dbdc651c9f8", label: "25" },
  { id: "0b10e812-e0dc-4b10-94e6-289f11a17b48", label: "35" },
  { id: "3b7e80a2-c21b-4c70-9910-cf6dc7366cc8", label: "45" },
];

export const LOCATIONS: Location[] = [
  { id: "91fa1595-463d-49d0-9f42-a622d33d7363", label: "Main local" },
  { id: "221c11ad-9629-452b-9cbb-0e91248a416d", label: "Second local" },
];
