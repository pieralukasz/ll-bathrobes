import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ll-bathrobes_${name}`);

const createdAt = timestamp("created_at", { withTimezone: true })
  .$onUpdate(() => new Date())
  .notNull();

const updatedAt = timestamp("updated_at", { withTimezone: true }).$onUpdate(
  () => new Date(),
);

export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt,
    updatedAt,
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const categories = createTable("category", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).unique(),
  createdAt,
  updatedAt,
});

export const products = createTable("product", {
  ean: integer("ean").primaryKey().unique(),
  name: varchar("name", { length: 256 }),
  color: varchar("color", { length: 50 }),
  size: varchar("size", { length: 50 }),
  quantity: integer("quantity"),
  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),
  createdAt,
  updatedAt,
});
