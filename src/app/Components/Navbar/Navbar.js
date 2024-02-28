"use Client"
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  const route = [
    {
      text: "℘",
      route: "/",
    },
    {
      text: "About",
      route: "/about",
    },
    {
      text: "Projects",
      route: "/projects",
    },
    {
      text: "Technical",
      route: "/tech-stack",
    },
    {
      text: "Education",
      route: "/education",
    },
    {
      text: "Contact",
      route: "/contact",
    },
  ];
  const socialMediaLinks = [
    {
      image: "/LinkedIn.svg",
      path: "https://www.linkedin.com/in/prathamsaxena",
    },
    {
      image: "/X.svg",
      path: "https://twitter.com/pratham__saxena",
    },
    {
      image: "/Github.svg",
      path: "https://github.com/prathamsaxen",
    },
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNavbar}>
        <ul>
          {route.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.route}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.rightNavbar}>
        <ul>
          {socialMediaLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path} target="_blank">
                  <img src={item.image} alt={`Error in Image - ${index + 1}`} />
                </a>
              </li>
            );
          })}
          <li>
            <img src={"/Line 9.svg"} alt={`Error in Image - ${4}`} />
          </li>
          <li>
            <img src={"/Sun.svg"} alt={`Error in Image - ${5}`} />
          </li>
        </ul>
      </div>
    </div>
  );
}