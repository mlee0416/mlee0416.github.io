"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { PokemonCard } from "../../../../../components/pokemon/PokemonCard";
import { getPokedexListByPage } from "@/data/pokemon/pokedex-list";
import Pagination from "@/components/pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const PokemonList = () => {
  const [pokemonSearch, setPokemonSearch] = useState<string>("");
  const offset = useSearchParams().get("offset");
  const limit = useSearchParams().get("limit");
  const { data: pokedex, isLoading } = useQuery({
    queryKey: ["get-pokemon-list"],
    queryFn: () => getPokedexListByPage(limit, offset),
  });
  console.log("pokedex,", pokedex);
  if (isLoading) {
    return <BeatLoader />;
  }
  return (
    <div className=" space-y-8">
      <Input />
      <div>
        <ul className=" gap-8  flex flex-wrap items-center justify-center">
          {pokedex?.results?.map((pokemon: TPokemonResults) => (
            <li key={pokemon.name}>
              <Link
                href={`/apiDemo/pokemon/pokemon?name=${pokemon.name}&id=${
                  pokemon.url.split("pokemon/")[1]
                }`}
              >
                <PokemonCard data={pokemon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        next={pokedex?.next?.split("/")[5] || null}
        previous={pokedex?.previous?.split("/")[5] || null}
        count={pokedex.count}
        numberOfPages={pokedex.count / 24}
      />
    </div>
  );
};
export default PokemonList;
