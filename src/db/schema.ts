import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id"),
  authId: text("auth_id").primaryKey(),
  name: text("name"),
  email: text("email"),
  isAdmin: boolean("is_admin"),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});

export type User = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;
