import Image from "next/image";
import React from "react";
import styles from "./nextjs-testing.module.css";
import Link from "next/link";

const routesList = [
  {
    name: "routing",
    route: "nextjs-testing/routing/1",
  },
  {
    name: "catch all",
    route: "/catchAll",
  },
  {
    name: "loading",
    route: "/loading",
  },
  {
    name: "error handling",
    route: "/errorHandling",
  },
  {
    name: "handling GET requests",
    route: "nextjs-testing/fetchData",
  },
];

const NextJSTesting = () => {
  return (
    <div className={styles.imgContainer}>
      {routesList.map((item) => (
        <Link href={item.route} key={item.route}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NextJSTesting;
