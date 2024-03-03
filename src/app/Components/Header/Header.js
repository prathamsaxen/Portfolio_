import React from "react";
import styles from "./Header.module.css";
function Header(props) {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>℘</div>
      <div className={styles.HeaderWrapper}>
        <div className={styles.Wrapper}>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
