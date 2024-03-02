import React from 'react';
import styles from "./page.module.css";
export default function page() {
  return (
    <div className={styles.about}>
    <div className={styles.aboutWrapper}>
      <div className={styles.Wrapper}>
        <h1>A little bit about me</h1>
        <p>Who I am and what i do</p>
      </div>
    </div>
    </div>
  )
}
