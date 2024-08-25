"use client";
import TeamCard from "@/components/nfl/TeamCard";
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
  const nfc = nflTeamList?.body?.filter((team) => team.conferenceAbv === "NFC");
  const afc = nflTeamList?.body?.filter((team) => team.conferenceAbv === "AFC");
  return (
    <div className="grid gap-6">
      <div className="pb-8">
        <BackButton />
      </div>
      <div>
        <h1 className=" text-3xl pb-6">NFC</h1>
        <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 gap-4">
          {nfc?.map((team) => (
            <TeamCard
              key={team.teamID}
              name={team.teamName}
              logo={team.nflComLogo1}
              id={team.teamID}
              wins={team.wins}
              loss={team.loss}
              tie={team.tie}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className=" text-3xl pb-6">AFC</h1>
        <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 gap-4">
          {afc?.map((team) => (
            <TeamCard
              key={team.teamID}
              name={team.teamName}
              logo={team.nflComLogo1}
              id={team.teamID}
              wins={team.wins}
              loss={team.loss}
              tie={team.tie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFLTeams;
