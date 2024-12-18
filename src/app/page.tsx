"use client";
import Image from "next/image";
import coding2_img from "../../public/static/coding2_img.jpg";
import coding_boy from "../../public/static/coding_boy.gif";
import logo from "../../public/static/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "./splash-page/Footer";
import { SplashPageNavigationMenu } from "@/components/navigation-menu/SplashPageNavigationMenu";
import { ERoutes } from "../types/routes/routeTypes";
import { LinearGradient } from "react-text-gradients";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionContainer from "@/components/landing-page/SectionContainer";
import Title from "@/components/landing-page/Title";
import WorkExperience from "./splash-page/work-experience/WorkExperience";
import ContentContainer from "@/components/landing-page/ContentContainer";
import { PROJECT_CARD } from "./splash-page/projects/project-card";

const App = () => {
  return (
    <main className="bg-slate-100">
      <div className="flex flex-row top-0 h-20 bg-black items-center justify-between px-10 sticky z-50 ">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={60} />
          <p className="text-white font-semibold">Michael Lee</p>
          <SplashPageNavigationMenu />
        </div>
        <Link href={ERoutes.LOGIN} className="hidden tablet:block">
          <Button className="border border-white hover:bg-white hover:text-black">
            Sign In
          </Button>
        </Link>
      </div>
      <div>
        <div className="h-screen">
          <ContentContainer>
            <Image
              src={coding_boy}
              alt="coding_boy"
              height={300}
              width={300}
              className="rounded-full"
            />
            <div className="text-center space-y-2 grid pt-4">
              <LinearGradient
                gradient={["to left", "#17acff ,#ff68f0"]}
                className="font-extrabold text-6xl"
              >
                Michael Lee
              </LinearGradient>
              <LinearGradient
                gradient={["to left", "#17acff ,#ff68f0"]}
                className="font-extrabold text-3xl"
              >
                Senior Front-End Software Engineer
              </LinearGradient>
            </div>
            <div id="about" />
          </ContentContainer>
        </div>
        <SectionContainer>
          <Title title="About Me" id="test" />
          <ContentContainer>
            <Image
              src={coding2_img}
              alt="code"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <p className="text-xl">
              As a Senior Software Engineer, I have over 5 years of experience
              designing, developing, and deploying high-quality software
              solutions. I specialize in front-end development using modern
              technologies such as TypeScript, JavaScript, React, HTML and CSS,
              with a strong focus on building scalable, maintainable
              applications. My expertise includes working on complex,
              mission-critical systems, collaborating with cross-functional
              teams, and driving projects from conception to deployment. I am
              passionate about solving technical challenges, improving user
              experiences, and continuously learning new technologies to stay
              ahead in an ever-evolving field.
            </p>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          <ContentContainer>
            <Title title="Work Experience" id="work-experience" />
            <WorkExperience />
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          <Title title="Projects" id="projects" />
          <p className="text-center">
            These projects highlight different aspects of my coding journey from
            utilizing new front-end technologies like Tailwind, NextJS, and
            ReactJS along with back-end services such as AWS.{" "}
          </p>
          <div className="flex gap-8 justify-around flex-wrap">
            {PROJECT_CARD.map((card) => (
              <Link
                key={card.name}
                href={card.disabled ? "" : card.link}
                scroll={!card.disabled}
                passHref={card.shouldPassHref}
                className={`${card.disabled ? "pointer-events-none" : ""} `}
              >
                <Card
                  className={` w-[300px] h-[550px] flex justify-center ${
                    card.disabled ? "opacity-40" : ""
                  } hover:border-solid hover:border-blue-600 hover:scale-105 hover:ease-in duration-300`}
                  key={card.name}
                >
                  <CardHeader>
                    <div className="flex justify-center items-center">
                      <Image
                        src={card.image}
                        alt={card.name}
                        height={300}
                        className="rounded-lg object-contain h-[250px] w-[250px]"
                      />
                    </div>
                    <CardTitle className="pt-4 pb-4">{card.name}</CardTitle>
                    <CardDescription className="overflow-auto h-[170px]">
                      {card.description}
                    </CardDescription>
                    {card.stack && (
                      <CardDescription className="font-bold">
                        Stack: {card.stack}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </SectionContainer>
      </div>
      <Footer />
    </main>
  );
};

export default App;
