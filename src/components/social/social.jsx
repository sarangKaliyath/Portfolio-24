"use client";
import React from "react";
import styles from "./social.module.css";
import Link from "next/link";
import { GoToLink } from "../common/goToLink";

export const Social = () => {
  return (
    <div>
      <div className={styles.data} id="home">
        <div>
          <h1 className={styles.home_title}>I'm Sarang Kaliyath.</h1>
        </div>
        <div>
          <h3 className={styles.home_text}>
            I'm a Full Stack Web Developer emphasizing on creating seamless user
            friendly applications.
          </h3>
          <div className={styles.links_container}>
            <div className={styles.links_image}>
              <GoToLink
                className={styles.links_image}
                link={"https://github.com/sarangKaliyath"}
              >
                <img src="/github_light.svg" alt="" />
              </GoToLink>
              <GoToLink
                className={styles.links_image}
                link={"https://twitter.com/KaliyathSarang"}
              >
                <img src="/twitter.svg" alt="" />
              </GoToLink>
              <GoToLink
                className={styles.links_image}
                link={"https://www.linkedin.com/in/sarang-kaliyath-84034a122/"}
              >
                <img src="/linkedin.svg" alt="" />
              </GoToLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
