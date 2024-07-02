import React from "react";
import styles from "./pokemon.module.css";
import { TPokemonResults } from "./page";
import Image from "next/image";

interface IPokemonCardProps {
  data: TPokemonResults;
}
const PokemonCard = ({ data }: IPokemonCardProps) => {
  const { name } = data;
  return (
    <div className={styles.pokemonCardContainer}>
      PokemonCard {name}
      <Image
        alt={name}
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        height={100}
        width={100}
      />
    </div>
  );
};

export default PokemonCard;
