import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(1, { message: "Valid password is required" }),
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
