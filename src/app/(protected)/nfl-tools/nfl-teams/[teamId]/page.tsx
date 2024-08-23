"use client";
import { Card } from "@/components/ui/card";
import { getNFLTeamSchedule } from "@/data/nfl/nfl-team";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TeamCard from "./TeamCard";
import { Triangle } from "react-loader-spinner";
const TeamInformation = ({ params }: { params: { teamId: string } }) => {
  const { data: teamSchedule, isLoading } = useQuery({
    queryKey: ["teamSchedule"],
    queryFn: () =>
      getNFLTeamSchedule({
        teamID: params.teamId,
        season: "2024",
      }),
  });

  console.log("nflTeamList ", teamSchedule);

  if (isLoading) {
    return (
      <div className="w-full h-full justify-center items-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div>
      <Card className="grid p-4 min-w-11">
        <div className="grid grid-flow-col w-full overflow-auto gap-4 ">
          {teamSchedule?.body.schedule.map((team) => (
            <div
              key={team.gameID}
              className={`border-2 border-solid border-black rounded-md  p-2 ${
                team.gameStatus === "Completed" && "opacity-20"
              }`}
            >
              <h1 className="text-center">{team.gameWeek}</h1>
              <h6 className="text-center text-xs">{team.gameTime}</h6>
              <div className="flex flex-row items-center justify-center gap-3  p-2 w-60 h-30">
                <TeamCard
                  name={team.home}
                  points={team.homePts}
                  result={team.homeResult}
                />
                VS
                <TeamCard
                  name={team.away}
                  points={team.awayPts}
                  result={team.awayResult}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TeamInformation;
