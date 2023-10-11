"use client";
import React from "react";
import styles from "./projects.module.css";
// import { gotoLink } from "./Onclick_function.js";
import { data } from "./data";
import { GoToLink } from "../common/goToLink";

export const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.project_head}>
        <h1 className={styles.header}>Projects</h1>
      </div>
      <div>
        <div className={styles.project_container}>
          {data.map(
            (
              { title, repo, website, project_thumbnail, txt1, tech },
              index
            ) => {
              return (
                <div className={styles.project_box} key={index}>
                  <div>
                    <h2>{title}</h2>
                    <div>
                      <GoToLink link={repo}>
                        <img
                          className={styles.iconsImage}
                          src="/github.svg"
                          alt=""
                        />
                      </GoToLink>
                      <GoToLink link={website}>
                        <img
                          className={styles.iconsImage}
                          src="/link.svg"
                          alt=""
                        />
                      </GoToLink>
                    </div>
                  </div>
                  <h4>
                    <div>{txt1}</div>
                  </h4>
                  <div className={styles.project_image}>
                    <img
                      className={
                        title?.includes("E-commerce") ? styles.blur : ""
                      }
                      src={project_thumbnail}
                      alt=""
                    />
                  </div>
                  <h4>{tech}</h4>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
