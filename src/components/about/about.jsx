"use client";
import React from "react";
import styles from "./about.module.css";
import { SkillsIcon } from "../skillIcons/skillIcon";
import { GoToLink } from "../common/goToLink";

export const About = () => {
  return (
    <div id="about" className={styles.main_container}>
      <div className={styles.about_me_container}>
        <div className={styles.about_me_image}>
          <div>
            <img src="/user-01.jpg" alt="" />
          </div>
        </div>
        <div>
          <h2 className={styles.about_me}>About Me</h2>

          <h4>
            <div>
              <p>
                My name is Sarang Kaliyath. Started as an Electrical engineer
                but soon found the light in web development.
              </p>
              <p>
                It's barely been a minute since I have started learning to code,
                building simple real-world apps is something I duly cherish.
              </p>

              <p>
                To quote Steve Jobs “The only way to do great work is to love
                what you do. If you haven’t found it yet, keep looking. Don’t
                settle.”
              </p>
              <p>
                I am diligently looking for opportunities to work as a web
                developer.
              </p>
            </div>
          </h4>
        </div>
      </div>
      <div>
        <h2 className={styles.my_skills}>My Skills</h2>
        <div className={styles.skills_icon}>
          <SkillsIcon />
        </div>
      </div>
      <div>
        <div className={styles.cv_button}>
          <GoToLink
            link={
              "https://drive.google.com/file/d/1WZBJFVtnRJ8_TbO9tVoZzr3sCeXbczY7/view?usp=sharing"
            }
          >
            <button className={styles.button}>DOWNLOAD RESUME</button>
          </GoToLink>
        </div>
      </div>
    </div>
  );
};
