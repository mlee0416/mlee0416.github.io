"use client";

import * as React from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SideNav from "../ui/navbar/SideNav";
import SplashPageSideNavMenu from "./SplashPageSideNavMenu";

export interface IComponents {
  title: string;
  to: string;
  description: string;
}
const components: IComponents[] = [
  {
    title: "Login Authentication",
    to: "login",
    description:
      "Utilizing next-auth, prisma, postgres, resend, and more to create a seamless user login experience",
  },
  {
    title: "Pokemon Trading Card Database",
    to: "pokemon",
    description:
      "Uses TCG apis to get pokemon card data and allow users to purchase cards from their website.",
  },
];
const sideNav = [
  {
    name: "About",
    pathName: "about",
  },
  {
    name: "Projects",
    pathName: "projects",
    components: components,
  },
  {
    name: "Contact",
    pathName: "contact",
  },
];

export function SplashPageNavigationMenu() {
  return (
    <div>
      <SplashPageSideNavMenu items={sideNav} />
      <NavigationMenu className="hidden tablet:block">
        <NavigationMenuList>
          <NavigationMenuItem className="cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={navigationMenuTriggerStyle()}
            >
              About Me
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    to={component.to}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <ListItem title={component.title}>
                      {component.description}
                    </ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
