"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import LogoutButton from "./LogoutButton";
import { ExitIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { MdOutlineManageAccounts } from "react-icons/md";
import Link from "next/link";
import { ERoutes } from "@/types/routes/routeTypes";

interface IUserAvatarProps {
  image: string | null | undefined;
}
const UserAvatar = ({ image }: IUserAvatarProps) => (
  <Avatar>
    <AvatarImage src={image || ""} />
    <AvatarFallback className="bg-slate-800">
      <FaUser className="text-white" />
    </AvatarFallback>
  </Avatar>
);

const UserButton = () => {
  const user = useCurrentUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar image={user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-3 space-y-2 w-60">
          <div className="flex flex-row space-x-4 items-center p-2">
            <UserAvatar image={user?.image} />
            <p className="font-semibold">{user?.name}</p>
          </div>
          <Separator className="w-full border-slate-300 border " />
          <Link href={ERoutes.ACCOUNT}>
            <DropdownMenuItem className="cursor-pointer mt-2">
              <div className="flex flex-row items-center">
                <MdOutlineManageAccounts className="mr-2" />
                <p>Account</p>
              </div>
            </DropdownMenuItem>
          </Link>
          <Separator className="w-full border-slate-300 border " />
          <LogoutButton>
            <DropdownMenuItem className="mt-2 cursor-pointer">
              <ExitIcon className="mr-2" />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
