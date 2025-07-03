import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    role: column.text(),
    password: column.text(),
  },
});

const Product = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text({ unique: true }),
    description: column.text(),
    categoryId: column.text(),
    brand: column.text(),
    genre: column.text(),
    imagePreview: column.text(),
    createAt: column.text(),
    updatedAt: column.text(),
    createdBy: column.text(),
    updatedBy: column.text(),
  },
});

export default defineDb({
  tables: { User, Product },
});
