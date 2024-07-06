"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "./CardWrapper";
import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../forms/FormError";
import FormSuccess from "../forms/FormSuccess";
import { login } from "@/app/actions/login";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ERoutes } from "@/types/routes/routeTypes";
const LoginForm = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const form = useForm<z.infer<typeof LoginSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const handleTogglePasswordType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        // TODO: Add when adding 2FA
        // setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcom Back"
      backButtonHref={ERoutes.REGISTER}
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="joe.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex flex-row space-x-4">
                      <Input
                        {...field}
                        type={passwordType}
                        disabled={isPending}
                      />
                      <Button
                        onClick={handleTogglePasswordType}
                        variant="outline"
                        type="button"
                      >
                        {passwordType === "text" ? (
                          <IoIosEye />
                        ) : (
                          <IoIosEyeOff />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
