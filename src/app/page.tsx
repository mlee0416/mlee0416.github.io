"use client";
import Image from "next/image";
import coding2_img from "../../public/static/coding2_img.jpg";
import coding_boy from "../../public/static/coding_boy.gif";
import search_pokemon from "../../public/static/search_pokemon.png";
import pm_1 from "../../public/static/pm1.png";
import login from "../../public/static/login.png";
import nfl_logo from "../../public/static/nfl-logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "./splash-page/Footer";
import { SplashPageNavigationMenu } from "@/components/navigation-menu/SplashPageNavigationMenu";
import { ERoutes } from "../types/routes/routeTypes";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const App = () => {
  const PROJECT_CARD = [
    {
      name: "Project Management Dashboard",
      description:
        "This app allows users to create their own kanban board in order to organize their project.",
      stack:
        "Next.js, TypeScript, Tailwind, AWS EC2, AWS RDS, AWS Amplify, PostgresSQL, Prisma",
      image: pm_1,
      link: "https://main.d3ni3bkuab48xl.amplifyapp.com/home",
      shouldPassHref: true,
    },
    {
      name: "Login",
      description:
        "This project allows users to log into the application using a valid email and github. It allows 2 factor authentication as well as email verification after signing up. Once you are inside the app, you can change settings, password, and role.",
      image: login,
      stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
      link: "pokemon-TCG-demo/pokemon/cards?q=&page=1&pageSize=20",
      shouldPassHref: false,
    },
    {
      name: "Pokemon",
      description:
        "Using ReactQuery to access TCG's database, you'll see a pokemon trading card application that allows users to search for pokemon cards and gather information about the selected card.",
      image: search_pokemon,
      stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
      link: "/pokemon-TCG-demo/pokemon/cards?q=&page=1&pageSize=20",
      shouldPassHref: false,
    },
    {
      name: "NFL",
      description:
        "Small NFL app with latest statistics to help get updates during a football game.",
      image: nfl_logo,
      stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
      link: "/nfl-tools",
      shouldPassHref: false,
    },
  ];

  return (
    <main>
      <div className="flex flex-row top-0 h-20 bg-slate-100 items-center justify-between px-10 sticky z-50 ">
        <SplashPageNavigationMenu />
        <Link href={ERoutes.LOGIN}>
          <Button>Sign In</Button>
        </Link>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center py-20 px-10  bg-white ">
          <Image src={coding_boy} alt="coding_boy" width={500} height={500} />
          <div className="text-center space-y-2">
            <p className="text-6xl">Hi, I&apos;m Michael</p>
            <p className="text-3xl">Senior Front-End Engineer</p>
          </div>
        </div>
        <div className="grid gap-10 p-10 items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-5xl font-semibold text-center">About Me</h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 items-center tablet:justify-items-end space-y-6 py-16 gap-10">
            <div className="space-y-6">
              <p>
                As a Senior Software Engineer, I have over 5 years of experience
                designing, developing, and deploying high-quality software
                solutions. I specialize in front-end development using modern
                technologies such as TypeScript, JavaScript, React, HTML and
                CSS, with a strong focus on building scalable, maintainable
                applications. My expertise includes working on complex,
                mission-critical systems, collaborating with cross-functional
                teams, and driving projects from conception to deployment. I am
                passionate about solving technical challenges, improving user
                experiences, and continuously learning new technologies to stay
                ahead in an ever-evolving field.
              </p>
            </div>
            <div
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-5 rounded-lg"
              id="projects"
            >
              <Image
                src={coding2_img}
                alt="code"
                width={800}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div
          className="grid gap-10 py-16 px-10  items-center justify-items-center bg-white"
          id="login"
        >
          <h1 className="text-5xl font-semibold text-center">Projects</h1>
          <div className="text-center">
            <p>
              These projects highlight different aspects of my coding journey
              from utilizing new front-end technologies like Tailwind, NextJS,
              and ReactJS along with back-end services such as AWS.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-8 justify-around flex-wrap">
          {PROJECT_CARD.map((card) => (
            <Link
              key={card.name}
              href={card.link}
              passHref={card.shouldPassHref}
            >
              <Card
                className="w-[350px] h-[550px] flex justify-center"
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
                  <CardDescription className="overflow-auto h-[130px]">
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
      </div>
      <Footer />
    </main>
  );
};

export default App;
