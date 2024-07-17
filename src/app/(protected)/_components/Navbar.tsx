"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface INavbarProps {
  items: {
    name: string;
    pathName: string;
  }[];
}

export const Navbar = ({ items }: INavbarProps) => {
  return (
    <div className="gap-x-2 hidden tablet:block ">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          {items.map((item) => (
            <Link href={item.pathName} legacyBehavior passHref key={item.name}>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:bg-gradient-to-r from-cyan-800 hover:text-white`}
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
