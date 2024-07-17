export const getPokedexListByPage = async (
  limit: string | null,
  offset: string | null
) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const pokedex = await response.json();
  return pokedex;
};

export const getPokedexByUrl = async (url: string) => {
  const response = await fetch(url);
  const pokedex = await response.json();
  return pokedex;
};

export const getPokemonById = async (id: string | null) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokedex = await response.json();
  return pokedex;
};
