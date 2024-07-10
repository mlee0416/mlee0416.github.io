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
import { DividerHorizontalIcon, ExitIcon } from "@radix-ui/react-icons";
import { capitalizeFirstLetter } from "@/functions/capitalizeFirstLetter";
import { Separator } from "@radix-ui/react-dropdown-menu";

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
        <DropdownMenuContent className="p-3 space-y-2">
          <div className="flex flex-row space-x-2 items-center">
            <UserAvatar image={user?.image} />
            <div>
              <p>{user?.name}</p>
              <p>Role: {capitalizeFirstLetter(user?.role)}</p>
            </div>
          </div>
          <Separator className="w-full " />
          <LogoutButton>
            <DropdownMenuItem>
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
