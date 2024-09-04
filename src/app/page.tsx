import Image from "next/image";
import coding2_img from "../../public/static/coding2_img.jpg";
import coding_boy from "../../public/static/coding_boy.gif";
import pokemon_search from "../../public/static/pokemon.png";
import pokemon_fly_card from "../../public/static/pokemon_fly_card.png";
import pokemon_charizard_card from "../../public/static/charizard_card.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "./splash-page/Footer";

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
      <div className="flex flex-row top-0 h-20 bg-white items-center justify-between px-10">
        <p className="font-semibold text-xl">Michael Lee&apos;s Portfolio</p>
        <Link href="/auth/login">
          <Button>Sign In</Button>
        </Link>
      </div>
      <div className="grid justify-center">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10 py-60 px-10 items-center laptop:justify-items-end bg-gradient-to-r from-cyan-500 to-blue-500 ">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">
              This portfolio is to showcase the use of different technologies.
              Below are a list of languanges and libraries used to power this
              application.
            </h1>
            <ul className="flex space-x-3 flex-wrap ">
              {STACK.map((item) => (
                <li key={item} className="text-lg font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={coding2_img}
            alt="code"
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-40 px-10  items-center laptop:justify-between bg-white">
          <Image src={coding_boy} alt="gastly" width={500} height={500} />
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">
              Some other tools include...
            </h1>
            <ul className="flex space-x-3 flex-wrap ">
              {TOOLS.map((item) => (
                <li key={item} className="text-lg font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10 py-60 px-10 items-center laptop:justify-items-end bg-gradient-to-r from-fuchsia-600 to-pink-600">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">
              Inside the app, you&apos;ll see a pokemon trading card application
              that allows users to search for pokemon cards and gather
              information about the selected card.
            </h1>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src={pokemon_search}
                alt="gastly"
                width={500}
                height={500}
              />
              <Image
                src={pokemon_charizard_card}
                alt="gastly"
                width={500}
                height={500}
              />
            </div>
            <Image
              src={pokemon_fly_card}
              alt="gastly"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
