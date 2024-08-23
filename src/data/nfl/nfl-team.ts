import { queryStringBuilder } from "@/functions/queryStringBuilder";
import { HEADERS } from "./constants/constants";
import {
  INFLResponse,
  INFLTeamList,
  INFLTeamScheduleResponse,
} from "../../types/nfl/NFLTeamTypes";

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

export interface INFLTeamScheduleProps {
  teamID: string;
  teamAbv?: string;
  season?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_RAPID_API_HOST;
export const getNFLTeamRoster = async (rosterParams: INFLTeamRosterProps) => {
  const url = `${BASE_URL}/getNFLTeamRoster?${queryStringBuilder(
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
  const url = `${BASE_URL}/getNFLTeams?${queryStringBuilder(
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

export const getNFLTeamSchedule = async (
  teamParams: INFLTeamScheduleProps
): Promise<INFLTeamScheduleResponse> => {
  const url = `${BASE_URL}/getNFLTeamSchedule?${queryStringBuilder(
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
