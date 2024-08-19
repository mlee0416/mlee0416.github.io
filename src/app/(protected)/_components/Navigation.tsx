"use client";
import UserButton from "@/components/auth/UserButton";
import { ERoutes } from "@/types/routes/routeTypes";
import React from "react";
import SideNav from "./SideNav";
import { Navbar } from "./Navbar";

export const Navigation = () => {
  const NAVBAR_MENU_ITEMS = [
    {
      name: "Pokemon TCG Demo",
      pathName: ERoutes.API_DEMO,
    },
    {
      name: "Admin",
      pathName: ERoutes.ADMIN,
    },
    {
      name: "Settings",
      pathName: ERoutes.SETTINGS,
    },
    {
      name: "Download Resume",
      pathName: ERoutes.DOWNLOAD_RESUME,
      newPage: true,
    },
  ];
  return (
    <>
      {/* tablet and desktop */}
      <nav className="bg-secondary flex justify-between items-center p-4  shadow-sm w-full ">
        <SideNav items={NAVBAR_MENU_ITEMS} />
        <Navbar items={NAVBAR_MENU_ITEMS} />
        <UserButton />
      </nav>
    </>
  );
};
