"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { getPokemonCardById } from "@/data/pokemon/pokemon-trading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import CardDetails from "./CardDetails";
import { TPokemonResults } from "@/types/pokemon/PokemonListTypes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ICardReponse {
  data: TPokemonResults;
}
const PokemonTCG = ({ params }: { params: { pokemonId: string } }) => {
  const router = useRouter();
  const {
    data: pokemonCard,
    isPending,
    isLoading,
  } = useQuery<ICardReponse>({
    queryKey: [params.pokemonId],
    queryFn: () => getPokemonCardById(params?.pokemonId),
  });
  if (pokemonCard) {
    const { data } = pokemonCard;
    return (
      <div>
        <div className="pb-8">
          <Button variant="link" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 place-items-center justify-items-center h-full">
          <Image
            src={data.images.large}
            alt={data.id}
            height={500}
            width={500}
          />
          <CardDetails details={pokemonCard.data} />
        </div>
      </div>
    );
  }
};

export default PokemonTCG;
