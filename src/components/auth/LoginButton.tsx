"use client";
import { useRouter } from "next/navigation";
import { EMode } from "./types/EMode";
import { ERoutes } from "@/types/routes/routeTypes";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import LoginForm from "./LoginForm";

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
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
