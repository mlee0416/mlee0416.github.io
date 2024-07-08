"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "../../lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  // if registration fields do not satisfy schema, then error is returned
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, firstName, lastName } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  const fullName = `${firstName} ${lastName}`;

  // if there is an existing user by using getUserByEmail which checks the db
  // based on email then return error message bc email is already in db.
  if (existingUser) {
    return { error: "Email Already in use" };
  }

  // if all criteria are met, then create new user into db
  await db.user.create({
    data: {
      name: fullName,
      firstName,
      lastName,
      password: hashedPassword,
      email,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent!" };
};
