import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const AboutMe = () => {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        alt="img"
        fill
        // height={500}
        // width={500}
      />
    </div>
  );
};

export default AboutMe;
