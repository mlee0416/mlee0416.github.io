"use client";
import BackButton from "@/components/ui/button/back-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getNFLTeamList } from "@/data/nfl/nfl-team";
import { INFLResponse, INFLTeamList } from "@/types/nfl/NFLTeamTypes";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const NFLTeams = () => {
  const { data: nflTeamList } = useQuery({
    queryKey: ["teamList"],
    queryFn: () =>
      getNFLTeamList({
        teamStatsSeason: 2024,
      }),
  });
  console.log("nflTeamList", nflTeamList);
  return (
    <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-5 gap-4">
      <div className="pb-8">
        <BackButton />
      </div>
      NFLTeams
      {nflTeamList?.body?.map((team) => (
        <Card key={team.teamName} className="card hvr-grow">
          <CardHeader>{team.teamName}</CardHeader>
          <CardContent>
            <Image
              src={team.nflComLogo1}
              alt={team.teamID}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NFLTeams;
