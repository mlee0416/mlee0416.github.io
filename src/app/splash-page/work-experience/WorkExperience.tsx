import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import { FaTooth } from "react-icons/fa6";
import { FaAd } from "react-icons/fa";
import { FcCapacitor } from "react-icons/fc";
import ExperienceCard from "./ExperienceCard";

interface ITimelineDot {
  children: React.ReactNode;
  iconNumber: number;
  variant?: "filled" | "outlined";
}
const WorkExperience = () => {
  const [displayCard, setDisplayCard] = useState(0);

  const iconClick = (cardNumber: number) => {
    setDisplayCard(cardNumber);
  };

  const LineDot = ({
    children,
    iconNumber,
    variant = "outlined",
  }: ITimelineDot) => {
    return (
      <TimelineDot
        variant={variant}
        color="primary"
        onClick={() => iconClick(iconNumber)}
        className={`cursor-pointer hover:scale-125 hover:ease-in duration-300 ${
          displayCard === iconNumber && "motion-safe:animate-bounce"
        }`}
      >
        {children}
      </TimelineDot>
    );
  };
  return (
    <div className="mt-20 flex flex-col desktop:flex-row gap-10 items-center">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            October 2022 - June 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <LineDot iconNumber={0} variant="filled">
              <FaTooth />
            </LineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              YAPI
            </Typography>
            <Typography>Senior Front-End Software Engineer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            May 2019 - October 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <LineDot iconNumber={1} variant="filled">
              <FaTooth />
            </LineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              YAPI
            </Typography>
            <Typography>Software Engineer I / Software Engineer II</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            July 2018 - May 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <LineDot iconNumber={2} variant="filled">
              <FaTooth />
            </LineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              YAPI
            </Typography>
            <Typography>Client-Facing IT Help Desk Specialist</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            April 2017 - January 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <LineDot iconNumber={3}>
              <FaAd color="red" />
            </LineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Nett Solutions
            </Typography>
            <Typography>Account Executive</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            March 2015 - April 2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <LineDot iconNumber={4}>
              <FcCapacitor />
            </LineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              United Chemi-Con Inc.
            </Typography>
            <Typography>Account Executive / Sales Executive</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="desktop:w-2/3 w-full">
        <ExperienceCard cardNumber={displayCard} />
      </div>
    </div>
  );
};

export default WorkExperience;
