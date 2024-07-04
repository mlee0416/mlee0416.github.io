import React from "react";
import styles from "./fetch.module.css";
import Link from "next/link";
const getRequestList = [
  {
    title: "Pokemon",
    route: "fetchData/pokedex",
  },
];
const FetchDataExamples = () => {
  return (
    <div className={styles.container}>
      Fetch Data Examples
      <div>
        {getRequestList.map((example) => (
          <Link key={example.route} href={example.route}>
            {example.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FetchDataExamples;
