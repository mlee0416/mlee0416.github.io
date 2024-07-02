import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Links />
    </div>
  );
};

export default Navbar;
