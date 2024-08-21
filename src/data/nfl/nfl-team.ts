import { queryStringBuilder } from "@/functions/queryStringBuilder";
import { HEADERS } from "./constants/constants";
import { INFLResponse, INFLTeamList } from "../../types/nfl/NFLTeamTypes";

export interface INFLTeamRosterProps {
  teamID?: number;
  teamAbv?: string;
  archiveDate?: string;
  getStats?: boolean;
  fantasyPoints?: boolean;
}

export interface INFLTeamListProps {
  sortBy?: "standings" | "teamID";
  rosters?: boolean;
  schedules?: boolean;
  topPerformers?: boolean;
  teamStats?: boolean;
  teamStatsSeason?: number;
}
export const getNFLTeamRoster = async (rosterParams: INFLTeamRosterProps) => {
  console.log("test", queryStringBuilder(rosterParams).toString());
  const baseUrl = process.env.NEXT_PUBLIC_RAPID_API_HOST;
  const url = `${baseUrl}/getNFLTeamRoster?${queryStringBuilder(
    rosterParams
  ).toString()}`;

  const options = {
    method: "GET",
    headers: HEADERS,
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getNFLTeamList = async (
  teamParams: INFLTeamListProps
): Promise<INFLResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_RAPID_API_HOST;
  const url = `${baseUrl}/getNFLTeams?${queryStringBuilder(
    teamParams
  ).toString()}`;

  const options = {
    method: "GET",
    headers: HEADERS,
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
