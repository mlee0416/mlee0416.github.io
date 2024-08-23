import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface ITeamCardProps {
  name: string;
  logo: string;
  id: string;
  wins: string;
  loss: string;
  tie: string;
}
const TeamCard = ({ name, logo, id, wins, loss, tie }: ITeamCardProps) => {
  return (
    <Link href={`/nfl-tools/nfl-teams/${id}`}>
      <Card key={name}>
        <CardHeader className="flex  flex-col  w-full justify-center items-center">
          {name}
        </CardHeader>
        <CardContent className="flex flex-col w-full justify-center items-center">
          <Image src={logo} alt={id} width={200} height={200} />
          <div>
            {wins}-{loss}-{tie}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TeamCard;
