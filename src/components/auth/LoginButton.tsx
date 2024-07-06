"use client";
import { useRouter } from "next/navigation";
import { EMode } from "./types/EMode";
import { ERoutes } from "@/types/routes/routeTypes";

interface ILoginButtonProps {
  children: React.ReactNode;
  mode?: EMode;
  asChild?: boolean;
}
export const LoginButton = ({ children, mode, asChild }: ILoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(ERoutes.LOGIN);
  };

  if (mode === EMode.MODAL) {
    return <span>TODO: Implement Modal</span>;
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
