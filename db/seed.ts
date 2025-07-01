import { db, User } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(User).values({
    id: "6e4642d0-d656-49b3-93ba-dcc341ff70b2",
    email: "first@th.com",
    role: "admin",
    password: "12345678",
  });
}
