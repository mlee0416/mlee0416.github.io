import { TCardMarket, TTCGGPlayer } from "@/types/pokemon/PokemonListTypes";
import Link from "next/link";
import React from "react";

interface IPricesProps {
  tcgPlayer: TTCGGPlayer;
  cardMarket: TCardMarket;
}
const Prices = ({ tcgPlayer, cardMarket }: IPricesProps) => {
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-bold">Prices</h1>
      <div>
        <a
          href={tcgPlayer.url}
          target="_blank"
          className="font-semibold text-indigo-600"
        >
          Buy Now From TCGplayer
        </a>
        <p className="text-xs">Last Updated {tcgPlayer.updatedAt}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <p className="text-sm">1ST EDITION HOLOFOIL MARKET</p>
          <p className="text-orange-700 font-semibold">
            ${tcgPlayer.prices["1stEditionHolofoil"]?.market}
          </p>
        </div>
        <div>
          <p className="text-sm">1ST EDITION HOLOFOIL LOW</p>
          <p className="text-emerald-700 font-semibold">
            ${tcgPlayer.prices["1stEditionHolofoil"]?.low}
          </p>
        </div>
        <div>
          <p className="text-sm">1ST EDITION HOLOFOIL MID</p>
          <p className="text-blue-700 font-semibold">
            ${tcgPlayer.prices["1stEditionHolofoil"]?.mid}
          </p>
        </div>
        <div>
          <p className="text-sm">1ST EDITION HOLOFOIL HIGH</p>
          <p className="text-red-700 font-semibold">
            ${tcgPlayer.prices["1stEditionHolofoil"]?.high}
          </p>
        </div>
      </div>
      <div>
        <a
          href={cardMarket.url}
          target="_blank"
          className="font-semibold text-indigo-600"
        >
          Buy Now From CardMarket
        </a>
        <p className="text-xs">Last Updated {cardMarket?.updatedAt}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <p className="text-sm">PRICE TREND</p>
          <p className="text-orange-700 font-semibold">
            ${cardMarket.prices?.trendPrice}
          </p>
        </div>
        <div>
          <p className="text-sm">1 DAY AVERAGE</p>
          <p className="text-orange-700 font-semibold">
            ${cardMarket.prices?.avg1}
          </p>
        </div>
        <div>
          <p className="text-sm">7 DAY AVERAGE</p>
          <p className="text-orange-700 font-semibold">
            ${cardMarket.prices?.avg7}
          </p>
        </div>
        <div>
          <p className="text-sm">30 DAY AVERAGE</p>
          <p className="text-orange-700 font-semibold">
            ${cardMarket.prices.avg30}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
