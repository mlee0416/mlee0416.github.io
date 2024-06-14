"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import React from "react";
import { ELinkPath } from "../Links";

type TNavLinkProps = {
  link: {
    path: ELinkPath;
    title: string;
  };
};
const NavLink: React.FC<TNavLinkProps> = ({ link }: TNavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
