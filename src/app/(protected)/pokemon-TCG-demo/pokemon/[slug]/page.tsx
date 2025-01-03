"use client";

import React, { useEffect } from "react";
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
import snorlax from "@/../public/static/snorlax.gif";
import Pagination from "@/components/pagination/Pagination";
import { CiSearch } from "react-icons/ci";
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
      q: searchParams?.q?.substring(0, searchParams?.q.length - 1) || "",
      page: searchParams?.page || "",
      pageSize: "20" || "",
    },
  });

  const onSubmit = (values: z.infer<typeof PokemonSearchSchema>) => {
    router.push(`cards?q=${values.q}*&page=1&pageSize=20`);
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
                    icon={<CiSearch />}
                    {...field}
                    type="text"
                    disabled={isPending}
                    placeholder="Search for a card"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-4">
            <PokemonList pokemonList={pokemonList} />
            <Pagination
              totalCount={pokemonList?.totalCount}
              page={pokemonList?.page}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Pokemon;
