import { db, Product, User } from "astro:db";
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
    brand: "talaria",
    genre: "unisex",
    imagePreview:
      "https://sirioti.com/cdn/shop/articles/god-hermes-symbols.jpg?v=1716747382",
    createAt: new Date().toString(),
    updatedAt: new Date().toString(),
    createdBy: "admin",
    updatedBy: "admin",
  });
}
