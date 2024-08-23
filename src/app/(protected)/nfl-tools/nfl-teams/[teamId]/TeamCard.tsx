import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface ITeamCardProps {
  name: string;
  points: string;
  result: string;
}
const TeamCard = ({ name, points, result }: ITeamCardProps) => {
  return (
    <Card className="w-20 h-20">
      <CardContent className="flex flex-col items-center justify-center gap-3">
        <div>{name}</div>
        <div>{points || "-"}</div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
