export type TPokemonResults = {
  artist: string;
  attacks: TPokemonAttacks[];
  cardmarket: TCardMarket;
  evolvesTo: string[];
  flavorText: string;
  hp: string;
  id: string;
  images: {
    large: string;
    small: string;
  };
  legalities: {
    unlimited: string;
    expanded: string;
  };
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  retreatCost: string[];
  set: {
    id: string;
    images: {
      logo: string;
      symbol: string;
    };
    name: string;
    total: number;
  };
  types: string[];
  weaknesses: { type: string; value: string }[];
  subtypes: string[];
  supertype: string;
  tcgplayer: TTCGGPlayer;
};

export type TTCGGPlayer = {
  prices: {
    "1stEditionHolofoil": {
      directLow: number;
      high: number;
      low: number;
      market: number;
      mid: number;
    };
    unlimitedHolofoil: {
      directLow: number;
      high: number;
      low: number;
      market: number;
      mid: number;
    };
  };
  updatedAt: string;
  url: string;
};

export type TCardMarket = {
  prices: {
    averageSellPrice: number;
    avg1: number;
    avg7: number;
    avg30: number;
    germanProLow: number;
    lowPrice: number;
    lowPriceExPlus: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    suggestedPrice: number;
    trendPrice: number;
  };
  updated: string;
  updatedAt: string;
  url: string;
  convertedRetreatCost: number;
};

export type TPokemonAttacks = {
  cost: string[];
  damage: string;
  name: string;
  text: string;
};
