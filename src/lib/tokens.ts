import { getVerifcationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";
// Generate tokens

export const generateVerificationToken = async (email: string) => {
  //use uuid to generate token
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getVerifcationTokenByEmail(email);
  // Checks to see if token existing by email in db. If not, then delete token and 
  // generate a new one.
  if (exisitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exisitingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data:{
        email, 
        token, 
        expires
    }
  })

  return verificationToken
};
