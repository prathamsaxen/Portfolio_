import React from "react";
import styles from "./PreLoaderMain.module.css";
const PreLoaderMain = () => {
  return (
    <div className={styles.animation}>
      <div class={styles.typewriter}>
        <div class={styles.slide}>
          <i></i>
        </div>
        <div class={styles.paper}></div>
        <div class={styles.keyboard}></div>
      </div>
    </div>
  );
};

export default PreLoaderMain;
