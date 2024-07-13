"use client";
import UserButton from "@/components/auth/UserButton";
// import { Button } from "@/components/ui/button";
import { ERoutes } from "@/types/routes/routeTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SideNav from "./SideNav";
import { Navbar } from "./Navbar";

export const Navigation = () => {
  const pathName = usePathname();

  const NAVBAR_MENU_ITEMS = [
    {
      name: "Server",
      pathName: ERoutes.SERVER,
    },
    {
      name: "Client",
      pathName: ERoutes.CLIENT,
    },
    {
      name: "Admin",
      pathName: ERoutes.ADMIN,
    },
    {
      name: "Settings",
      pathName: ERoutes.SETTINGS,
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
