import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>reach out to me!</p>
      </div>
      <ul className={styles.links}>
       
        <li className={styles.link}>
          <img
            src={("assets/contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ritik-singh931/">linkedin.com/Ritik-kumar</a>
        </li>
        <li className={styles.link}>
          <img src={("assets/contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/RitikSingh931">github.com/RitikSingh931</a>
        </li>
        <li className={styles.link}>
          <img src={("assets/contact/emailIcon.png")} alt="Email icon" />
          <a href="https://mail.google.com/ritiksingh93413@gmail.com">ritiksingh93413@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
};