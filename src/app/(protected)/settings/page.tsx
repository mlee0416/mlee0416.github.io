"use client";

import React, { useState, useTransition } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormError from "@/components/forms/FormError";
import FormSuccess from "@/components/forms/FormSuccess";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { UserRole } from "@prisma/client";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const currentUser = useCurrentUser();
  const form = useForm<z.infer<typeof SettingsSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: currentUser?.name || undefined,
      email: currentUser?.email || undefined,
      isTwoFactorEnabled: currentUser?.isTwoFactorEnabled || undefined,
      password: undefined,
      newPassword: undefined,
      role: currentUser?.role || undefined,
    },
  });
  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            setSuccess(data.success);
            setError("");
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        })
        .finally(() => {
          //Not the best way to update the session, but seems like the
          //udpate session is currently unstable and does not update
          setTimeout(() => {
            location.reload();
          }, 1000);
        });
    });
  };

  const FORM_DATA = [
    {
      name: "name",
      placeholder: "John",
      title: "Name",
      type: "text",
      showField: true,
    },
    {
      name: "email",
      placeholder: "john.doe@example.com",
      title: "Email",
      type: "email",
      showField: currentUser?.isOAuth === false,
    },
    {
      name: "password",
      placeholder: "",
      title: "Password",
      type: "password",
      showField: currentUser?.isOAuth === false,
    },
    {
      name: "newPassword",
      placeholder: "",
      title: "New Password",
      type: "password",
      showField: currentUser?.isOAuth === false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {FORM_DATA.map((data) => {
                if (data.showField) {
                  return (
                    <FormField
                      key={data.name}
                      control={form.control}
                      name={data.name as "name"}
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
                  );
                }
              })}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      {...field}
                      disabled={isPending}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        <SelectItem value={UserRole.USER}>User</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {currentUser?.isOAuth === false && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>2FA Enabled</FormLabel>
                        <FormDescription>
                          Enable two factor authentication for your account
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="flex items-center justify-center "
              disabled={isPending}
            >
              Update settings
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
