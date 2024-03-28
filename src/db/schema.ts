import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const techScout = pgTable("users", {
  id: serial("id").notNull().primaryKey(),
  name: text("name"),
});
