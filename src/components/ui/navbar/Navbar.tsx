"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { TbPokeball } from "react-icons/tb";
import { ERoutes } from "@/types/routes/routeTypes";

interface INavbarProps {
  items: {
    name: string;
    pathName: string;
    newPage?: boolean;
  }[];
}

export const Navbar = ({ items }: INavbarProps) => {
  return (
    <div className="gap-x-2 hidden tablet:block ">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          <Link href={ERoutes.PUBLIC_ROOT}>
            <TbPokeball size={35} />
          </Link>
          {items.map((item) => (
            <Link href={item.pathName} legacyBehavior passHref key={item.name}>
              <NavigationMenuLink
                target={item.newPage ? "_blank" : undefined}
                className={`${navigationMenuTriggerStyle()} hover:bg-gradient-to-t from-slate-100 to-emerald-400 hover:text-white`}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
