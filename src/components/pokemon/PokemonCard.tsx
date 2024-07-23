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
  const { images, id } = data;

  return (
    <Image
      className="card hvr-grow w-auto"
      alt={id}
      src={images.large}
      width={200}
      height={200}
    />
  );
};
