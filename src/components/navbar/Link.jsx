import React from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";

export const Navlink = ({ children, to }) => {
  return (
    <Link
      to={to}
      activeClass={styles.active}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {children}
    </Link>
  );
};
