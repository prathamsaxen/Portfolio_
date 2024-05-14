'use client'
import React, { useLayoutEffect } from "react";
import styles from "./WorkCard.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function WorkCard(props) {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: `.card:first-child`,
    //       scroller: "body",
    //       start: "top 60%",
    //       end: "bottom 40%",
    //       // scrub: true, 
    //     },
    //   })
    //   .fromTo(
    //     `.card:first-child`,
    //     {
    //       x: -200,
    //       opacity: 0,
    //     },
    //     {
    //       x: 0,
    //       opacity: 1,
    //       duration: 0.8,
    //     }
    //   );

    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: `.card:last-child`,
    //       scroller: "body",
    //       start: "top 60%",
    //       end: "bottom 40%",
    //       // scrub: true, 
    //     },
    //   })
    //   .fromTo(
    //     `.card:last-child`,
    //     {
    //       x: 200,
    //       opacity: 0,
    //     },
    //     {
    //       x: 0,
    //       opacity: 1,
    //       duration: 0.8,
    //     }
    //   );

  }, []);
  return (
    <div className={`${styles.card} ${props.className} card`}>
      <div className={styles.leftCard}>
        <img src={props.data.logo} alt="Error in loading" />
        <h2>{props.data.heading}</h2>
        <p>{props.data.description}</p>
        <a href={props.data.link}>
          Visit Site {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1696 5C17.273 6.55556 19.1622 8.37278 20.7905 10.4057C20.9302 10.5801 21 10.79 21 11M15.1696 17C17.273 15.4444 19.1622 13.6272 20.7905 11.5943C20.9302 11.4199 21 11.21 21 11M21 11L3 11"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className={styles.rightCard}>
        <img src={props.data.demoImage} alt="Error in Loading" />
      </div>
    </div>
  );
}

export default WorkCard;
