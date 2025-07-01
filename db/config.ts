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
export default defineDb({
  tables: { User },
});
