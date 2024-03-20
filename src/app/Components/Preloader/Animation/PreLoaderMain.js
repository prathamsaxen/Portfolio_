import React from "react";
import styles from "./PreLoaderMain.module.css";
const PreLoaderMain = () => {
  return (
    <div className={styles.animation}>
      <div class={styles.content}>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
      </div>
    </div>
  );
};

export default PreLoaderMain;
