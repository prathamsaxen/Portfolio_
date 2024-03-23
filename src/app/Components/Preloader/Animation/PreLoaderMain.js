import React from "react";
import styles from "./PreLoaderMain.module.css";
const PreLoaderMain = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PreLoaderMain;
