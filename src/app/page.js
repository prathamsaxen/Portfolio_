"use client"
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animation from "./Animation/animation.json";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.mainHome}>
        <div className={styles.infoFrame}>
          <div className={styles.leftInfoFrame}>
          <h1><span>I'm</span> Pratham Saxena</h1>
          <p>
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>
          <div className={styles.buttonStacks}>
            <button>See my resume</button>
            <button>Get in touch</button>
          </div>
          </div>
          <div className={styles.rightInfoFrame}>
          <Lottie animationData={animation} loop={true} className={styles.anim}/>
          </div>
        </div>
      </div>
    </div>
  );
}
