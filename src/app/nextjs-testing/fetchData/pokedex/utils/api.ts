export interface IPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: TPokemonResults[];
}

export type TPokemonResults = {
  name: string;
  url: string;
};

export const getPokedex = async (params: string) => {
  const response = await fetch(params);
  const data = (await response.json()) as IPokemonResponse;
  return data;
};
