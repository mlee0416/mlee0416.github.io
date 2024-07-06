import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "@/lib/db";
import { getUserById } from "./data/user";
import { ERoutes } from "./types/routes/routeTypes";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      // Add more information from db to token
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
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.role = existingUser.role;
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
  pages: { signIn: ERoutes.LOGIN, error: ERoutes.AUTH_ERROR },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
