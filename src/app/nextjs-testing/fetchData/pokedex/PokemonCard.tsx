import React from "react";
import styles from "./pokemon.module.css";
import Image from "next/image";

interface IPokemonCardProps {
  name: string;
}
const PokemonCard = ({ name }: IPokemonCardProps) => {
  return (
    <div className={styles.pokemonCardContainer}>
      {name}
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
