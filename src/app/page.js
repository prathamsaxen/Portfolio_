"use client";
import styles from "./page.module.css";
import WorkCard from "./Components/Card/WorkCard/WorkCard";
import ProfileCard from "./Components/Card/ProfileCard/ProfileCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pastProjects from "./configurations/projects";
import Link from "next/link";
import { useLayoutEffect } from "react";
import Github from "./Components/Github/Github";
export default function Home() {
  // const [loader,setLoader]=useState(true);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.fromTo(
      `.heading`,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      `.point`,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        y: 0,
      }
    );})
  const profileCards = [
    {
      title: "About Me",
      paragraph: "Who i am and what i do",
      image: "/me.svg",
      link: "/about",
    },
    {
      title: "Tech Stack",
      paragraph: "The dev tools, apps, devices, and games I use and play.",
      image: "/Tech Stack.svg",
      link: "/tech-stack",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.logo}>℘</div>
      <div className={styles.mainHome}>
        <div className={styles.infoFrame}>
          <div className={styles.leftInfoFrame}>
            <h1 className={"heading"}>
              <span>I'm</span> Pratham Saxena
            </h1>
            <p className={"point"}>
              A front-end engineer and UI/UX designer helping startups turn
              their visions into a digital reality. I specialize in designing
              and building modern mobile and web-based apps.
            </p>
            <div className={`${styles.buttonStacks} point`}>
              <Link href="">
                See my resume
              </Link>
              <Link href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>
      <Github />
      <div className={styles.selectedWork}>
        <h2 className="selectWork">Selected Work</h2>
        {pastProjects.map((item, index) => {
          return <WorkCard data={item} key={index} className="cardWork" />;
        })}
      </div>
      <div className={styles.knowMeFrame}>
        <h2 className="knowMe">Get to know me</h2>
        <div className={styles.knowCards}>
          {profileCards.map((item, index) => {
            return <ProfileCard data={item} key={index} className="card" />;
          })}
        </div>
      </div>
      <div className={styles.contactFrame}>
        <div className={styles.contentContactFrame}>
          <h2 className="workTogather">Let's work together</h2>
          <p className="workTogatherPara">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <Link href={"/contact"} className="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93367 12L3.08987 5.73239C2.60867 4.09667 4.14094 2.58539 5.75514 3.10362C10.2067 4.53274 14.4553 6.53713 18.3948 9.06662C19.5259 9.79292 21 10.4417 21 12C21 13.5583 19.5259 14.2071 18.3948 14.9334C14.4553 17.4629 10.2067 19.4673 5.75514 20.8964C4.14094 21.4146 2.60867 19.9033 3.08987 18.2676L4.93367 12ZM4.93367 12H9.83493"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Get in touch
        </Link>
      </div>
    </div>
  );
}
