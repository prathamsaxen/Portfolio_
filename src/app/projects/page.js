import React from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import pastProjects from "../configurations/projects";
import WorkCard from "../Components/Card/WorkCard";
export default function page() {
  return (
    <div className={styles.project}>
      <Header
        title={"Projects"}
        subtitle={"Projects and ideas I’ve worked on"}
      />
      <div className={styles.projectList}>
        {pastProjects.map((item, index) => {
          return <WorkCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}
