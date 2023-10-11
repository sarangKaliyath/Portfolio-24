import React from "react";
import styles from "./skillIcon.module.css";
import { data } from "./data";

export const SkillsIcon = () => {
  return data.map(({ img, title }, index) => {
    return (
      <div className={styles.skills_container} key={index}>
        <img src={img} alt="" />
        <h5>{title}</h5>
      </div>
    );
  });
};
