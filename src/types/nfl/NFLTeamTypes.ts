export interface INFLTeamList {
  byeWeeks: {
    2022: string[];
    2023: string[];
    2024: string[];
  };
  conference: string;
  conferenceAbv: string;
  currentStreak: {
    length: string;
    result: string;
  };
  division: string;
  espnLogo1: string;
  loss: string;
  nflComLogo1: string;
  pa: string;
  pf: string;
  teamAbv: string;
  teamCity: string;
  teamID: string;
  teamName: string;
  tie: string;
  wins: string;
}

export interface INFLResponse {
  body: INFLTeamList[];
  statusCode: number;
}
