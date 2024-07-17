"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BeatLoader } from "react-spinners";
import { TPokemonResults } from "../page";
import { PokemonCard } from "../PokemonCard";
import { getPokedexListByPage } from "@/data/pokemon/pokedex-list";
import Pagination from "@/components/pagination/Pagination";
import { useSearchParams } from "next/navigation";

const PokemonList = () => {
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
      <div>
        <ul className=" gap-8  flex flex-wrap items-center ">
          {pokedex.results.map((pokemon: TPokemonResults) => (
            <li key={pokemon.name}>
              <PokemonCard data={pokemon} />
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
