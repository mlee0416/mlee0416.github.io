"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "./CardWrapper";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../forms/FormError";
import FormSuccess from "../forms/FormSuccess";
import { register } from "@/app/actions/register";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/routes";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const route = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    },
  });
  const { formState } = form;
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          setTimeout(() => {
            // routes to login page
            route.push(AUTH_ROUTES[0]);
          }, 1000);
        }
      });
    });
  };

  const FORM_DATA = [
    {
      name: "firstName",
      placeholder: "John",
      title: "First Name",
      type: "text",
    },
    {
      name: "lastName",
      placeholder: "Doe",
      title: "Last Name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "john.doe@example.com",
      title: "Email",
      type: "email",
    },
    {
      name: "password",
      placeholder: "",
      title: "Password",
      type: "text",
    },
  ];
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {FORM_DATA.map((data) => (
              <FormField
                key={data.name}
                control={form.control}
                name={
                  data.name as "firstName" | "lastName" | "email" | "password"
                }
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{data.title}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={data.placeholder}
                        type={data.type}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full"
            disabled={isPending || !formState.isValid}
          >
            Register an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
