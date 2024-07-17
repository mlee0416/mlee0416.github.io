"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/authentication/user";
import { getVerifcationTokenByToken } from "@/data/authentication/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerifcationTokenByToken(token);
  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExired = new Date(existingToken.expires) < new Date();

  if (hasExired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  // TODO: Check that the DELETE deletes verification token properly
  await db.verificationToken.delete({ where: { id: existingToken.id } });

  return { success: "Email verified!" };
};
