import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  firstName: string;
  lastName: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
