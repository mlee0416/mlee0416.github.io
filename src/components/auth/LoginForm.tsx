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
import { login } from "@/actions/login";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ERoutes } from "@/types/routes/routeTypes";
import Link from "next/link";
const LoginForm = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

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
      code: "",
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
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
          if (data?.success) {
            form.reset();
            setError(data?.success);
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create a secure login to see the different technologies used to create this website."
      backButtonHref={ERoutes.REGISTER}
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <div className="pb-4 space-y-2">
        <p className="text-sm">
          *If you do not want to log in with an email address, you are welcome
          to log in using the test address.
        </p>
        <p className="text-sm font-semibold">email: test@test.com</p>
        <p className="text-sm font-semibold">password: password</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="123456"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.smith@example.com"
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
              </>
            )}
          </div>
          <Button variant="link" className="font-normal px-0" size="sm" asChild>
            <Link href={ERoutes.RESET_PASSWORD}>{"Reset password?"}</Link>
          </Button>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
