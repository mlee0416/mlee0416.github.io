import { TPokemonAttacks } from "@/types/pokemon/PokemonListTypes";
import React from "react";

interface IAttacksProps {
  attacks: TPokemonAttacks[];
}

const AttackDetails = ({ attacks }: IAttacksProps) => {
  return (
    <div className="grid gap-3">
      Attacks
      <div className="grid gap-3">
        {attacks.map((attack) => (
          <div
            className="grid grid-cols-12 items-center gap-3"
            key={attack.name}
          >
            <div className="col-span-10">
              <p className="text-lg font-semibold">{attack.name}</p>
              <p>{attack.text}</p>
            </div>
            <p className="col-span-2 text-semi-bold text-3xl">
              {attack.damage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttackDetails;
