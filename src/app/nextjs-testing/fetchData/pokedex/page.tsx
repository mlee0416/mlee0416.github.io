
import React from "react";
import PokemonCard from "./PokemonCard";
import Link from "next/link";
import styles from "./pokemon.module.css";
import Pagination from "./Pagination";
import { getPokedex } from "./utils/api";

export type TPokemonResults = {
  name: string;
  url: string;
};
const Pokedex = async () => {
  const pokedex = await getPokedex(
    "https://pokeapi.co/api/v2/pokemon?limit=35"
  );
  const { count, next, results, previous } = pokedex;
  console.log("pokedex", pokedex);
  return (
    <div>
      {count}
      <div>
        list of pokemon
        <ul className={styles.pokemonContainer}>
          {results.map((pokemon: TPokemonResults) => (
            <li key={pokemon.name}>
              <Link href={`${pokemon.name}`}>
                <PokemonCard name={pokemon.name} />
              </Link>
            </li>
          ))}
        </ul>
        <Pagination count={count} next={next} previous={previous} />
      </div>
    </div>
  );
};

export default Pokedex;
