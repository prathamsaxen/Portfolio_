"use client"
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import mobileNavLinks from "@/app/configurations/mobileNavLinks";
import socialMediaLinks from "@/app/configurations/socialMediaLinks";
import route from "@/app/configurations/route";

export default function Navbar() {
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
