"use client";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
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
    <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-5 gap-4">
      {pokemonList?.data?.map((pokemonCard) => (
        <PokemonCard key={pokemonCard.id} data={pokemonCard} />
      ))}
    </div>
  );
};

export default PokemonList;
