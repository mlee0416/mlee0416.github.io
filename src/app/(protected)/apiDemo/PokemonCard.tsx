"use client";
import React from "react";
import Image from "next/image";
import { TPokemonResults } from "./page";
import { Card } from "@/components/ui/card";

interface IPokemonCardProps {
  data: TPokemonResults;
}

export const PokemonCard = ({ data }: IPokemonCardProps) => {
  const { name } = data;

  return (
    <Card className="flex flex-col items-center w-60 h-60 gap-3 p-5 justify-between">
      <p className="text-lg ">{name}</p>
      <Image
        className="mb-10"
        alt={name}
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        width={200}
        height={200}
        style={{ width: "100px", maxHeight: "100px" }}
      />
    </Card>
  );
};
