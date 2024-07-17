"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
import styles from "./pokemonCard.module.css";
interface IPokemonCardProps {
  data: TPokemonResults;
}

export const PokemonCard = ({ data }: IPokemonCardProps) => {
  const { name } = data;

  return (
    <Card className="flex flex-col items-center w-30 h-30 tablet:w-60 tablet:h-60 gap-3 p-5 justify-between ">
      <p className={`text-lg ${styles.pokemonCardTitle}`}>{name}</p>
      <Image
        className="mb-10"
        alt={name}
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        width={200}
        height={200}
        style={{ width: "100px", height: "100px" }}
      />
    </Card>
  );
};
