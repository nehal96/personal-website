import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.listItem}>HOME</li>
          <li className={styles.listItem}>PROJECTS</li>
          <li className={styles.listItem}>ARTICLES</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
