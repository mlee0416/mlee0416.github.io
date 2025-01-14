"use client";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
import { ERoutes } from "@/types/routes/routeTypes";
import Link from "next/link";
import React from "react";

interface IPokemonListProps {
  pokemonList: {
    count: number;
    page: number;
    pageSize: number;
    totalCount: number;
    data: TPokemonResults[];
  };
}
const PokemonList = ({ pokemonList }: IPokemonListProps) => {
  return (
    <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-5 gap-4 h-auto">
      {pokemonList?.data?.map((pokemonCard) => (
        <Link
          key={pokemonCard.id}
          href={`${ERoutes.POKEMON_CARD}/${pokemonCard.id}`}
        >
          <PokemonCard data={pokemonCard} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
