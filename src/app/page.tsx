import Image from "next/image";
import coding2_img from "../../public/static/coding2_img.jpg";
import coding_boy from "../../public/static/coding_boy.gif";
import search_pokemon from "../../public/static/search_pokemon.png";
import pokemon_card from "../../public/static/pokemon_card.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "./splash-page/Footer";
import { SplashPageNavigationMenu } from "@/components/navigation-menu/SplashPageNavigationMenu";
import login from "../../public/static/login_img.png";
import { ERoutes } from "../types/routes/routeTypes";

const App = () => {
  const STACK = [
    "NextJS",
    "TypeScript",
    "Tailwind",
    "HTML",
    "CSS",
    "shadcn/ui",
    "ReactQuery",
  ];
  const TOOLS = ["Vercel", "Resend", "Neon/Postgres", "Prisma"];

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
            <p className="text-3xl" id="about">
              React | TypeScript | HTML | CSS
            </p>
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
            <p>This application is powered by:</p>
            <p>NextJS | TypeScript | Tailwind | Prisma | Postgres</p>
          </div>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-16 px-10  items-center justify-items-center bg-white">
          <Link href={ERoutes.LOGIN}>
            <Image
              src={login}
              alt="auth"
              width={200}
              height={300}
              className="rounded-lg"
            />
          </Link>
          <div className="flex flex-wrap space-y-6">
            <h1 className="text-5xl font-semibold ">Login Authentication</h1>
            <p>
              This project allows users to log into the application using a
              valid email and github. It allows 2 factor authentication as well
              as email verification after signing up. Once you are inside the
              app, you can change settings, password, and role. Some other
              technologies used are Prisma, Postgres, and Resend.
            </p>
          </div>
        </div>
        <div id="projects"></div>
        <div
          className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-16 px-10  items-center justify-items-center bg-gradient-to-r from-cyan-500 to-blue-500"
          id="pokemon"
        >
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">
              Pokemon Trading Card Database
            </h1>
            <p>
              Using ReactQuery to access TCG's database, you&apos;ll see a
              pokemon trading card application that allows users to search for
              pokemon cards and gather information about the selected card.
            </p>
          </div>
          <Link href={ERoutes.LOGIN}>
            <div className="grid grid-rows-2 items-center gap-4 ">
              <Image
                src={search_pokemon}
                alt="gastly"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <Image
                src={pokemon_card}
                alt="gastly"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
