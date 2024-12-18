import search_pokemon from "../../../../public/static/search_pokemon.png";
import pm_1 from "../../../../public/static/pm1.png";
import login from "../../../../public/static/login.png";
import nfl_logo from "../../../../public/static/nfl-logo.png";

export const PROJECT_CARD = [
  {
    name: "Project Management Dashboard",
    description:
      "This app allows users to create their own kanban board in order to organize their project.",
    stack:
      "Next.js, TypeScript, Tailwind, AWS EC2, AWS RDS, AWS Amplify, PostgresSQL, Prisma",
    image: pm_1,
    link: "https://main.d3ni3bkuab48xl.amplifyapp.com/home",
    shouldPassHref: true,
    disabled: false,
  },
  {
    name: "Login",
    description:
      "This project allows users to log into the application using a valid email and github. It allows 2 factor authentication as well as email verification after signing up. Once you are inside the app, you can change settings, password, and role.",
    image: login,
    stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
    link: "/auth/login",
    shouldPassHref: false,
    disabled: false,
  },
  {
    name: "Pokemon",
    description:
      "Using ReactQuery to access TCG's database, you'll see a pokemon trading card application that allows users to search for pokemon cards and gather information about the selected card.",
    image: search_pokemon,
    stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
    link: "/pokemon-TCG-demo/pokemon/cards?q=&page=1&pageSize=20",
    shouldPassHref: false,
    disabled: false,
  },
  {
    name: "NFL",
    description:
      "Small NFL app with latest statistics to help get updates during a football game.",
    image: nfl_logo,
    stack: "Next.js, TypeScript, Tailwind, PostgresSQL, Prisma, Vercel",
    link: "/nfl-tools",
    shouldPassHref: false,
    disabled: true,
  },
];
