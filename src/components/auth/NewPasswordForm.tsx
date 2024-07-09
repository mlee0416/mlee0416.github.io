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
import { NewPassowrdSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../forms/FormError";
import FormSuccess from "../forms/FormSuccess";
import { ERoutes } from "@/types/routes/routeTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { newPassword } from "@/app/actions/new-password";
const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const route = useRouter();

  const form = useForm<z.infer<typeof NewPassowrdSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(NewPassowrdSchema),
    defaultValues: {
      password: "",
    },
  });
  const { reset } = form;
  const onSubmit = (values: z.infer<typeof NewPassowrdSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
        .finally(() => {
          reset();
          route.push(ERoutes.LOGIN);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Enter a new password"
      backButtonHref={ERoutes.LOGIN}
      backButtonLabel="Back to login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
