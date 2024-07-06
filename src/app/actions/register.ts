"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "../../lib/db";
import { getUserByEmail } from "@/data/user";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, firstName, lastName } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  const fullName = `${firstName} ${lastName}`;
  if (existingUser) {
    return { error: "Email Already in use" };
  }
  await db.user.create({
    data: {
      name: fullName,
      firstName,
      lastName,
      password: hashedPassword,
      email,
    },
  });

  // TODO: Send verification token email
  return { success: "User created!" };
};
