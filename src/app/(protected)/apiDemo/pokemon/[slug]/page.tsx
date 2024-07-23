"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getPokemonListBySearch } from "@/data/pokemon/pokemon-trading";
import { PokemonSearchSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PokemonList from "../PokemonList";
import snorlax from "@/../public/snorlax.gif";
import Pagination from "@/components/pagination/Pagination";

const Pokemon = ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const router = useRouter();

  const {
    data: pokemonList,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: [searchParams.q],
    queryFn: () => getPokemonListBySearch(searchParams?.q, searchParams?.page),
  });

  const form = useForm<z.infer<typeof PokemonSearchSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(PokemonSearchSchema),
    defaultValues: {
      q: "" || undefined,
      page: searchParams?.page || undefined,
      pageSize: "24" || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof PokemonSearchSchema>) => {
    router.push(`cards?q=${values.q}*&page=1&pageSize=24`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center flex-col gap-6">
          <FormField
            control={form.control}
            name="q"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-center gap-6">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    disabled={isPending}
                    placeholder="example: Pikachu"
                    defaultValue={searchParams.q || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <Image
              className="mt-10 rounded-full"
              src={snorlax}
              alt="snorlax"
              width={200}
              height={100}
            />
          ) : (
            <div className="grid gap-4">
              <PokemonList pokemonList={pokemonList} />
              <Pagination
                totalCount={pokemonList?.totalCount}
                page={pokemonList?.page}
              />
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default Pokemon;
