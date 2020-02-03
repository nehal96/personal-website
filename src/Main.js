import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nehal Udyavar.</h1>
        <p className={styles.info}>
          I'm a Full-stack Web Developer, although I mostly focus on front-end
          and mobile development with React and React Native. I love design, so
          I spend way too much time picking colours and fonts.
        </p>
      </div>
    </div>
  );
};

export default Main;
