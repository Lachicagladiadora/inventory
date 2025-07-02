import { db } from "astro:db";
import { Product, User } from "./config";
import { asDrizzleTable } from "@astrojs/db/runtime";

// https://astro.build/db/seed
export default async function seed() {
  const UserSchema = asDrizzleTable("User", User);
  const ProductSchema = asDrizzleTable("Product", Product);

  await db.insert(UserSchema).values({
    // id: "6e4642d0-d656-49b3-93ba-dcc341ff70b2",
    email: "first@th.com",
    role: "admin",
    password: "12345678",
  });

  await db.insert(ProductSchema).values({
    id: "1",
    title: "Achilles' sandal",
    description: "for running",
    categoryId: "outdoor",
    brand: "talaria",
    genre: "unisex",
    imagePreview:
      "https://images.pexels.com/photos/16562750/pexels-photo-16562750.jpeg?_gl=1*ip5qyb*_ga*Njk2NjQ4Nzg1LjE3NDkxNDIzMTg.*_ga_8JE65Q40S6*czE3NTE0MTAzNzIkbzIkZzEkdDE3NTE0MTA0ODIkajExJGwwJGgw",
    createAt: new Date().toString(),
    updatedAt: new Date().toString(),
    createdBy: "admin",
    updatedBy: "admin",
  });
}
