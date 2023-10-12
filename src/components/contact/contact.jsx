import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact_outer_container} id="contact_me">
      <div className={styles.contact_container}>
        <div className={styles.reach_out}>
          <div className={styles.say_hello}>
            <h1 style={{ color: "#1E2022" }}>SAY HELLO</h1>
          </div>
          <div>Feel Free to Reach out</div>
          <div className={styles.temp_header}>
            <img src="./email.svg" alt="" />
          </div>
          <div>sarang1221@gmail.com</div>
          <div className={styles.temp_header}>
            <img src="./phone.svg" alt="" />
          </div>
          <div>+91 7588303199</div>
        </div>
        <div className={styles.contact_input}>
          <input
            className={styles.contact_name}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className={styles.contact_email}
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className={styles.contact_message}
            type="text"
            placeholder="Enter Message"
          />
          <div className={styles.submit_button}>Submit</div>
        </div>
      </div>
      <div className={styles.footer_links}>
        <div>
          <img
            src="./github_light.svg"
            alt=""
            onClick={() => {
              window.open("https://github.com/sarangKaliyath");
            }}
          />
          <div>github/sarangKaliyath</div>
        </div>
        <div>
          <img
            src="./linkedin.svg"
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/sarang-kaliyath-84034a122/"
              );
            }}
          />
          <div>linkedIn/sarang-kaliyath</div>
        </div>
        <div>
          <img
            src="./twitter.svg"
            alt=""
            onClick={() => {
              window.open("https://twitter.com/KaliyathSarang");
            }}
          />
          <div>twitter/KaliyathSarang</div>
        </div>
      </div>
    </div>
  );
};
