import React from 'react';
import styles from "./ProfileCard.module.css";

function ProfileCard() {
  return (
    <div className={styles.Card}>
      <div className={styles.textSection}>
        <h2>About Me</h2>
        <p>Who I am and what I do</p>
      </div>
      <div className={styles.imageSection}>
        <img src="/me.svg" alt="" srcset="" />
      </div>
    </div>
  )
}

export default ProfileCard
