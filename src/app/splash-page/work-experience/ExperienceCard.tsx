import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import experience from "./experience";
interface IExperienceCard {
  cardNumber: number;
}
const ExperienceCard = ({ cardNumber = 0 }: IExperienceCard) => {
  const work = experience[cardNumber];
  const description = work.description;
  if (experience) {
    return (
      <Card className="desktop:w-[750px] w-full">
        <CardHeader className="font-bold">{work.jobTitle}</CardHeader>
        <div className="pl-6 pb-6 pr-6">
          <h2 className="pb-4">{work.company}</h2>
          <h2 className="pb-4 text-sm">{work.timeline}</h2>
          <ul className="display">
            {description.map((point) => (
              <li className="list-disc ml-4" key={point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    );
  }
  return <div>hi</div>;
};

export default ExperienceCard;
