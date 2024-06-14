"use client";

import { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";
import NavLink from "./navLink/NavLink";

export enum ELinkPath {
  HOMEPAGE = "/homepage",
  ABOUT_ME = "/aboutme",
  RESUME = "/resume",
  PROJECTS = "/projects",
  ADMIN = "/admin",
  LOGIN = "/login",
}

const LINKS = [
  {
    title: "Homepage",
    path: ELinkPath.HOMEPAGE,
  },
  {
    title: "About Me",
    path: ELinkPath.ABOUT_ME,
  },
  {
    title: "Resume",
    path: ELinkPath.RESUME,
  },
  {
    title: "Projects",
    path: ELinkPath.PROJECTS,
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink link={{ title: "Admin", path: ELinkPath.ADMIN }} />
            )}

            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: ELinkPath.LOGIN }} />
        )}
      </div>
      {/* displays on mobile */}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu_button"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {LINKS.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
