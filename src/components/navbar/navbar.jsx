"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Navlink } from "./Link";

export const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <div>
        <Navlink to="home">Home</Navlink>
      </div>
      <div>
        <Navlink to="about">About</Navlink>
      </div>
      <div>
        <Navlink to="projects">Projects</Navlink>
      </div>
      <div>
        <Navlink to="contact_me">Contact Me</Navlink>
      </div>
    </div>
  );
};
