export const getPokedexListByPage = async (
  limit: string | null,
  offset: string | null
) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const pokedex = await response.json();
  console.log("pokedex", pokedex);
  return pokedex;
};

export const getPokedexByUrl = async (url: string) => {
  const response = await fetch(url);
  const pokedex = await response.json();
  console.log("pokedex", pokedex);
  return pokedex;
};
