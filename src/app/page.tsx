import { Navigation } from "@/components/ui/navbar/Navigation";
import { ERoutes } from "@/types/routes/routeTypes";
import Image from "next/image";
import coding from "@/../public/coding.jpg";
import coding_boy from "@/../public/coding_boy.gif";
import pokemon_search from "@/../public/pokemon.png";
import pokemon_fly_card from "@/../public/pokemon_fly_card.png";
import pokemon_charizard_card from "@/../public/charizard_card.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const App = () => {
  const NAVBAR_MENU_ITEMS = [
    {
      name: "Pokemon TCG Demo",
      pathName: ERoutes.API_DEMO,
    },
  ];

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
      <div className="grid">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-60 px-10 items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <Card className="max-w-xl">
            <CardContent>
              <h1 className="text-lg font-semibold">
                This portfolio is to showcase the use of different technologies.
                Below are a list of languanges and libraries used to power this
                application.
              </h1>
              <ul>
                {STACK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Image src={coding} alt="gastly" width={500} height={500} />
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-40 px-10  items-center bg-white">
          <Image src={coding_boy} alt="gastly" width={500} height={500} />
          <Card className="max-w-xl">
            <CardContent>
              <h1 className="text-lg font-semibold">
                Some other tools include:
              </h1>
              <ul>
                {TOOLS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 py-40 px-10  items-center bg-gradient-to-r from-fuchsia-600 to-pink-600">
          <Card className="max-w-xl">
            <CardContent>
              <h1 className="text-lg font-semibold">
                Inside the app, you&apos;ll see a basic pokemon card application
                that allows users to search for pokemon cards and gather
                information about the selected card.
              </h1>
            </CardContent>
          </Card>
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
    </main>
  );
};

export default App;
