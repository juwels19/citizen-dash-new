import { db } from "@/db";
import { InsertUser, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createUser(values: InsertUser) {
  await db.insert(users).values({ ...values });
}

export async function getUserByAuthId(authId: string) {
  return await db.query.users.findFirst({
    where: eq(users.authId, authId),
  });
}
