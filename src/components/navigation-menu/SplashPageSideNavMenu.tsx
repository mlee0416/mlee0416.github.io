"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import versionInfo from "@/../package.json";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { IComponents } from "./SplashPageNavigationMenu";

interface ISideNavProps {
  items: {
    name: string;
    pathName: string;
    components?: IComponents[];
  }[];
}
const SplashPageSideNavMenu = ({ items }: ISideNavProps) => {
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  const closeSideNav = () => {
    setOpenSideNav(!openSideNav);
  };
  
  return (
    <div className="block tablet:hidden">
      <Sheet open={openSideNav} onOpenChange={closeSideNav}>
        <SheetTrigger>
          <RxHamburgerMenu />
        </SheetTrigger>
        <SheetContent side="left" className="flex justify-between flex-col">
          <SheetHeader>
            <div className="flex flex-col space-y-4 pt-6">
              {items.map((item) => {
                return (
                  <Link
                    className="w-full h-8"
                    to={item.pathName}
                    key={item.name}
                  >
                    <SheetHeader
                      className="cursor-pointer h-12 hover:bg-gradient-to-r from-cyan-800 hover:text-white rounded-lg items-center flex justify-center"
                      onClick={closeSideNav}
                    >
                      {item.name}
                    </SheetHeader>
                  </Link>
                );
              })}
            </div>
          </SheetHeader>
          <SheetFooter>v{versionInfo.version}</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SplashPageSideNavMenu;
