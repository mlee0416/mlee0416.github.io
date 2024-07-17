"use client";
import React from "react";
import { Card } from "../ui/card";

interface IPokemonMovesProps {
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}
const PokemonMoves = ({ moves }: IPokemonMovesProps) => {
  return (
    <Card className="p-6">
      Moves
      <ul className="gap-3 h-72 w-56 overflow-auto">
        {moves?.map((move) => (
          <li
            key={move.move.name}
            className="p-3 hover:bg-gradient-to-r from-red-500"
          >
            {move.move.name}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PokemonMoves;
