import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import Prices from "../Prices";
import AttackDetails from "../AttackDetails";

interface ICardDetailsProps {
  details: TPokemonResults;
}
const CardDetails = ({ details }: ICardDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <h1 className="text-xl font-bold">
            {details.name} (No.{details.nationalPokedexNumbers})
          </h1>
          <p>
            {details.supertype} -{" "}
            {details.subtypes && details.subtypes.join(", ")}
          </p>
        </div>
      </CardHeader>
      <DividerHorizontalIcon className="w-full" />
      <CardContent>
        <Prices tcgPlayer={details.tcgplayer} cardMarket={details.cardmarket} />
        <AttackDetails attacks={details.attacks} />
      </CardContent>
    </Card>
  );
};

export default CardDetails;
