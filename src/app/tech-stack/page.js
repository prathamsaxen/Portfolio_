import React from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import TechCard from "../Components/Card/TechCard/TechCard";
import TechStack from "../configurations/TechStack";
export default function page() {
  return (
    <div className={styles.tech}>
      <Header
        title="Tech Stack"
        subtitle="The dev tools, apps, devices, and games I use and play."
      />
      <div className={styles.techList}>
        {TechStack.map((item, index) => {
          return (
            <TechCard logo={item.logo} title={item.title} tag={item.tag} key={index}/>
          );
        })}
      </div>
    </div>
  );
}
