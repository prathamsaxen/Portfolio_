"use client"
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import mobileNavLinks from "@/app/configurations/mobileNavLinks";
import socialMediaLinks from "@/app/configurations/socialMediaLinks";
import route from "@/app/configurations/route";
// import { useRouter } from "next/router";
export default function Navbar() {
  // const router=useRouter();
  // console.log(router.pathname);
  // const route = [
  //   {
  //     text: "℘",
  //     route: "/",
  //   },
  //   {
  //     text: "About",
  //     route: "/about",
  //   },
  //   {
  //     text: "Projects",
  //     route: "/projects",
  //   },
  //   {
  //     text: "Technical",
  //     route: "/tech-stack",
  //   },
  //   {
  //     text: "Education",
  //     route: "/education",
  //   },
  //   {
  //     text: "Contact",
  //     route: "/contact",
  //   },
  // ];
  // const mobileNavLinks=[
  //   {
  //     img:"/nav/Home.svg",
  //     path:"/"
  //   },
  //   {
  //     img:"/nav/User.svg",
  //     path:"/about"
  //   },
  //   {
  //     img:"/nav/Bag.svg",
  //     path:"/tech-stack"
  //   },
  //   {
  //     img:"/nav/Pen.svg",
  //     path:"/projects"
  //   },
  //   {
  //     img:"/nav/Message.svg",
  //     path:"/contact"
  //   },
  //   // {
  //   //   img:"/nav/Vector.svg",
  //   //   path:""
  //   // }
  // ]
  // const socialMediaLinks = [
  //   {
  //     image: "/LinkedIn.svg",
  //     path: "https://www.linkedin.com/in/prathamsaxena",
  //   },
  //   {
  //     image: "/youtube.svg",
  //     path: "https://www.youtube.com/@Pratham-Saxena",
  //   },
  //   {
  //     image: "/Github.svg",
  //     path: "https://github.com/prathamsaxen",
  //   },
  // ];
  return (
    <>
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
    <div className={styles.mobileNavbar}>
          <nav>
              {
                mobileNavLinks.map((item) => (
                  <li key={item.uniqueId}>
                    <Link href={item.path} >
                      {item.img}
                    </Link>
                  </li>
                ))
              }
          </nav>
    </div>
    </>
  );
}
