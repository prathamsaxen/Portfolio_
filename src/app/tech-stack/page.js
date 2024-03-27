'use client'
import React, { useLayoutEffect } from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import TechCard from "../Components/Card/TechCard/TechCard";
import TechStack from "../configurations/TechStack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function page() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.techList}`,
          scroller: "body",
          start: "top 85%",
          end: "bottom 40%",
          // scrub: true, 
        },
      })
      .fromTo(
        ".techcard",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.4,
        }
      );

  }, []);
  return (
    <div className={styles.tech}>
      <Header
        title="Tech Stack"
        subtitle="The dev tools, apps, devices, and games I use and play."
      />
      <div className={styles.techList}>
        {TechStack.map((item, index) => {
          return (
            <TechCard logo={item.logo} title={item.title} tag={item.tag} key={index} />
          );
        })}
      </div>
    </div>
  );
}
