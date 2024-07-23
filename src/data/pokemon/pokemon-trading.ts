"use server";

export type TSearchParams = {
  name: string;
  page?: string;
  pageSize?: string;
};

export const getPokemonListBySearch = async (name: string, page: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_POKEMON_TRADING_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_POKEMON_TRADING_API_KEY;
  const url = `${baseUrl}/cards?q=${
    name && `name:${name}`
  }&page=${page}&pageSize=24`;

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": apiKey as string,
    },
  });
  const pokemonList = await response.json();
  return pokemonList;
};

export const getPokemonCardById = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_POKEMON_TRADING_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_POKEMON_TRADING_API_KEY;
  const url = `${baseUrl}/cards/${id}`;

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": apiKey as string,
    },
  });
  const pokemonCard = await response.json();
  return pokemonCard;
};
