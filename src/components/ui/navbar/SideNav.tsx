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
import Link from "next/link";
import { ERoutes } from "@/types/routes/routeTypes";
import { TbPokeball } from "react-icons/tb";
interface ISideNavProps {
  items: {
    name: string;
    pathName: string;
    newPage?: boolean;
  }[];
}
const SideNav = ({ items }: ISideNavProps) => {
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
            <div className="flex flex-col space-y-4 pt-6 justify-center">
              <div className="grid justify-center">
                <Link href={ERoutes.PUBLIC_ROOT}>
                  <TbPokeball size={35} />
                </Link>
              </div>
              {items.map((item) => {
                if (item.newPage) {
                  return (
                    <a href={item.pathName} target="_blank" key={item.name}>
                      <SheetHeader
                        className="cursor-pointer h-12 hover:bg-gradient-to-tr from-slate-200 to-slate-400 hover:text-white rounded-lg items-center flex justify-center"
                        onClick={closeSideNav}
                      >
                        {item.name}
                      </SheetHeader>
                    </a>
                  );
                } else {
                  return (
                    <Link
                      className="w-full h-8"
                      href={item.pathName}
                      key={item.name}
                    >
                      <SheetHeader
                        className="cursor-pointer h-12 hover:bg-gradient-to-tr from-slate-200 to-slate-400 hover:text-white rounded-lg items-center flex justify-center"
                        onClick={closeSideNav}
                      >
                        {item.name}
                      </SheetHeader>
                    </Link>
                  );
                }
              })}
            </div>
          </SheetHeader>
          <SheetFooter>v{versionInfo.version}</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNav;
