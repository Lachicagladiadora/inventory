import { db, Product, User, ProductConfig, ProductStock } from "astro:db";
// import { Product, User } from "./config";
// import { asDrizzleTable } from "@astrojs/db/runtime";

// https://astro.build/db/seed
export default async function seed() {
  // const UserSchema = asDrizzleTable("User", User);
  // const ProductSchema = asDrizzleTable("Product", Product);

  await db.insert(User).values({
    // id: "6e4642d0-d656-49b3-93ba-dcc341ff70b2",
    email: "first@th.com",
    role: "admin",
    password: "12345678",
  });

  await db.insert(Product).values({
    // id: "1",
    title: "Achilles' sandal",
    description: "for running",
    categoryId: "e091d5bf-ea1f-491a-a4a5-4f527739847b",
    brandId: "talaria",
    genre: "unisex",
    imagePreview:
      "https://sirioti.com/cdn/shop/articles/god-hermes-symbols.jpg?v=1716747382",
    createAt: new Date().toString(),
    updatedAt: new Date().toString(),
    createdBy: "admin",
    updatedBy: "admin",
  });

  await db.insert(ProductConfig).values({
    // id:"1"
    productId: "e091d5bf-ea1f-491a-a4a5-4f527739847",
    colorId: "aa92c1f3-c0ed-41fc-baeb-323478ac0ac6",
    materialId: "b1ebd01e-bf48-422c-b48e-644ba4bc3f1a",
    sizeId: "0b10e812-e0dc-4b10-94e6-289f11a17b48",
    price: "54.90",
    discount: "0.00",
    createAt: new Date().toString(),
    updatedAt: new Date().toString(),
    createdBy: "admin",
    updatedBy: "admin",
  });

  await db.insert(ProductStock).values({
    // id:"1"
    productId: "e091d5bf-ea1f-491a-a4a5-4f527739847",
    productConfigId: "e091d5bf-ea1f-491a-a4a5-4f527739847",
    location: "here",
    state: "new",
    createAt: new Date().toString(),
    updatedAt: new Date().toString(),
    createdBy: "admin",
    updatedBy: "admin",
  });
}
