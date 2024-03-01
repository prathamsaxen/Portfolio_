import React from 'react';
import styles from "./WorkCard.module.css";
function WorkCard() {
  return (
    <div className={styles.card}>
      <div className={styles.leftCard}>
      <img src="/Subbi.svg" alt="" />
      <h2>Subbi –– The free subscriptions manager</h2>
      <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
      <a href="">Download App</a>
      </div>
      <div className={styles.rightCard}>
        <img src="/mobile.svg" alt="" />
      </div>
      
    </div>
  )
}

export default WorkCard
