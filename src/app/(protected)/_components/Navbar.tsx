"use client";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import { ERoutes } from "@/types/routes/routeTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
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
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl md:w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {NAVBAR_MENU_ITEMS.map((item) => (
          <Button
            key={item.pathName}
            asChild
            variant={pathName === item.pathName ? "default" : "outline"}
          >
            <Link href={item.pathName}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
