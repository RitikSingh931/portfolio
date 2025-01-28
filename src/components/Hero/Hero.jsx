import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Myself Ritik</h1>
        <p className={styles.description}>
          I'm a 3rd year B.Tech student from IIT GUWAHATI pursuing degree in chemical engineering.
          I love problem solving and full stack development.
        </p>
        <a href="ritiksingh93413@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"assets/hero/heroImage.jpg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};