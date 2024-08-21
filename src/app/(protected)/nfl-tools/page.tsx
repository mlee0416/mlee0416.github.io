"use client";
import { getNFLTeamRoster } from "@/data/nfl/nfl-team";
import { ERoutes } from "@/types/routes/routeTypes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const cardItems = [
  {
    name: "Games",
    pathName: "",
    disabled: true,
  },
  {
    name: "Players",
    pathName: "",
    disabled: true,
  },
  {
    name: "Teams",
    pathName: ERoutes.NFL_TEAMS,
    disabled: true,
  },
  {
    name: "Bets",
    pathName: "",
    disabled: true,
  },
];
const NFLTools = () => {
  const {
    data: nflTeamRoster,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["team"],
    queryFn: () =>
      getNFLTeamRoster({
        teamID: 6,
        teamAbv: "CHI",
        getStats: true,
        fantasyPoints: true,
      }),
  });
  console.log("nflTeamRoster", nflTeamRoster);
  return (
    <div>
      NFLTools{" "}
      <p>
        This app is made to help provider information that can win you in your
        fantasy league. Powered by RAPID API, https://rapidapi.com/ we have
        access to NFL data that can help you make informed decisions in your
        personal fantasy league.
      </p>
      {cardItems.map((item) => (
        <div key={item.name}>
          <Link href={item.pathName}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NFLTools;
