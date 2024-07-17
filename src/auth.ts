import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "@/lib/db";
import { getUserById } from "./data/authentication/user";
import { ERoutes } from "./types/routes/routeTypes";
import { getTwoFactorConfirmationByUserId } from "./data/authentication/two-factor-confirmation";
import { getAccountByUserId } from "./data/authentication/account";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);
      // Prevents user to sign in if email is not verified
      if (!existingUser?.emailVerified) return false;
      // Check two factor authentication confirmation is set to true.
      // If not, then it will not allow the user to get into the app.
      if (existingUser?.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );
        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation fo next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      // We do not want to check other providers such as
      // Github or Google because they already have their own
      // authentication process. We are only checking on manual
      // users generated.
      return true;
    },
    async session({ token, session }) {
      // Add more information from db to token
      // You need to write each property to update
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }
        if (token.role) {
          session.user.role = token.role as "ADMIN" | "USER";
        }
        if (token.firstName) {
          session.user.firstName = token.firstName as string;
        }
        if (token.lastName) {
          session.user.lastName = token.lastName as string;
        }

        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.isOAuth = token.isOAuth as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      // called update from session each time a property changes
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      const existingAccount = await getAccountByUserId(existingUser.id);
      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      return token;
    },
  },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        where: { id: user.id },
        data: {
          firstName: user.name?.split(" ")[0],
          lastName: user.name?.split(" ")[1],
          emailVerified: new Date(),
        },
      });
    },
  },
  pages: {
    signIn: ERoutes.LOGIN,
    error: ERoutes.AUTH_ERROR,
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
