"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { scrollToElement } from "../common/helperFunctions";

export const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className={styles.NavbarContainer}>
      <div
        className={active === "home" ? styles.active : ""}
        onClick={() => {
          scrollToElement("home");
          setActive("home");
        }}
      >
        Home
      </div>
      <div
        className={active === "about" ? styles.active : ""}
        onClick={() => {
          scrollToElement("about");
          setActive("about");
        }}
      >
        About
      </div>
      <div
        className={active === "projects" ? styles.active : ""}
        onClick={() => {
          scrollToElement("projects");
          setActive("projects");
        }}
      >
        Projects
      </div>
      <div
        className={active === "contact_me" ? styles.active : ""}
        onClick={() => {
          scrollToElement("contact_me");
          setActive("contact_me");
        }}
      >
        Contact Me
      </div>
    </div>
  );
};
