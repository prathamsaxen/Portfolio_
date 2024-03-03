import React from 'react';
import styles from "./page.module.css";
import Header from '../Components/Header/Header';
export default function page() {
  return (
    <div className={styles.project}>
      <Header title={"Projects"} subtitle={"Projects and ideas I’ve worked on"}/> 
    </div>
  )
}
