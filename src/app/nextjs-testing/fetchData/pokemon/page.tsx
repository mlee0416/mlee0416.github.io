import React from "react";
import PokemonCard from "./PokemonCard";

interface IPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: TPokemonResults;
}

export type TPokemonResults = {
  name: string;
  url: string;
};
const Pokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const pokedex = await response.json();
  console.log("pokedex", pokedex);
  return (
    <div>
      {pokedex.count}
      <div>
        list of pokemon{" "}
        <ul>
          {pokedex.results.map((pokemon: TPokemonResults) => (
            <li key={pokemon.name}>
              <PokemonCard data={pokemon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
