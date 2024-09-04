"use client";
import UserButton from "@/components/auth/UserButton";
import { ERoutes } from "@/types/routes/routeTypes";
import React from "react";
import SideNav from "./SideNav";
import { Navbar } from "./Navbar";

interface INavigationProps {
  navbarList: {
    name: string;
    pathName: ERoutes;
  }[];
  displayUserButton?: boolean;
}
export const Navigation = ({
  navbarList,
  displayUserButton = false,
}: INavigationProps) => {
  return (
    <>
      {/* tablet and desktop */}
      <nav className="bg-secondary flex justify-between items-center p-4  shadow-sm w-full ">
        <SideNav items={navbarList} />
        <Navbar items={navbarList} />
        {displayUserButton && <UserButton />}
      </nav>
    </>
  );
};
