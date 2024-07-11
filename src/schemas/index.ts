import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(1, { message: "Valid password is required" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(1, { message: "Valid first name is required" }),
  lastName: z.string().min(1, { message: "Valid last name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const ResetPassowrdSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
});

export const NewPassowrdSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    { message: "New password is required!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Password is required!", path: ["newPassword"] }
  );
