import { db } from "@/lib/db";

export const getVerifcationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerifcationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
    console.log("db.verifcation token", verificationToken);
    return verificationToken;
  } catch {
    return null;
  }
};