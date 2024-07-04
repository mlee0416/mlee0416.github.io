"use client";
import { useRouter } from "next/navigation";
import { EMode } from "./types/EMode";

interface ILoginButtonProps {
  children: React.ReactNode;
  mode?: EMode;
  asChild?: boolean;
}
export const LoginButton = ({ children, mode, asChild }: ILoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
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
