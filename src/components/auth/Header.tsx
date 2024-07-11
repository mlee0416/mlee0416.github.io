import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface IHeaderProps {
  label: string;
}

export const Header = ({ label }: IHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-2xl text-center", font.className)}>
        Sign in to Michael Lee&apos;s Portfolio
      </h1>
      <p className="text">{label}</p>
    </div>
  );
};
