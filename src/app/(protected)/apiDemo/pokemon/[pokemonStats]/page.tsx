"use client";

import PokemonMoves from "@/components/pokemon/PokemonMoves";
import { getPokemonById } from "@/data/pokemon/pokedex-list";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BeatLoader } from "react-spinners";

const Pokemon = () => {
  const pokemonName = useSearchParams().get("name");
  const pokemonId = useSearchParams().get("id");
  console.log("pokemonId", pokemonId);
  const { data: pokemon, isLoading } = useQuery({
    queryKey: ["get-pokemon-list"],
    queryFn: () => getPokemonById(pokemonId),
  });
  console.log("pokemon", pokemon);

  if (isLoading) {
    return <BeatLoader />;
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <Image
        className="mb-10 rounded-lg"
        alt={pokemonName || "pokemon"}
        src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
        width={300}
        height={300}
      />
      <div>
        <PokemonMoves moves={pokemon?.moves} />
      </div>
    </div>
  );
};

export default Pokemon;
