import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../Components/Header/Header";
export default function page() {
  return (
    <div className={styles.about}>
      {/* <div className={styles.gradient}></div> */}
      {/* <div className={styles.logo}>℘</div>
      <div className={styles.aboutWrapper}>
        <div className={styles.Wrapper}>
          <h1>A little bit about me</h1>
          <p>Who I am and what i do</p>
        </div>
      </div> */}
      <Header
        title={"A little bit about me"}
        subtitle={"Who I am and What I do"}
      />

      <div className={styles.aboutContent}>
        <div className={styles.leftAboutContent}>
          <div className={styles.contentDisplay}>
            <p>Who I am</p>
            <p>
              I’m <span>Pratham Saxena</span> a multi-disciplinary front-end
              engineer based in Aligarh, India 🇮🇳.
            </p>
          </div>
          <div className={styles.contentDisplay}>
            <p>What I Do</p>
            <p>
              {/* With two years of invaluable experience in my role at Harmony
              Technology –– a tech company based here in Rabat, I have honed my
              skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing
              me to craft seamless and interactive user experiences. During my
              time at Harmony Technology, I had the privilege of collaborating
              on projects for esteemed clients such as the Ministry of Health,
              Ministry of Education, and Ministry of Justice. It was an
              incredibly rewarding experience to develop applications that
              directly impact the lives of Moroccan citizens. */}
              As a frontend developer, it is incumbent upon me to translate
              design visions into functional code, utilizing my proficiency in
              tools such as React JS, Next JS, HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className={styles.contentDisplay}>
            <p>What I Did</p>
            <p>
              {/* Before delving into the realm of front end engineering, I spent
              five years as a graphic designer. This background has equipped me
              with a keen eye for aesthetics and a deep understanding of
              user-centered design principles. It enables me to seamlessly blend
              functionality and visual appeal in every project I undertake. */}
              I am a frontend developer with comprehensive expertise spanning
              the entire development life cycle. Additionally, during my tenure
              as an Engineering Intern, I've garnered valuable experience
              collaborating with esteemed organizations in India, including
              Printila, GeeksforGeeks, Resolute AI, and Codefeast. Within these
              roles, I've undertaken numerous projects across a spectrum of
              client-side technologies such as HTML, CSS, JavaScript, React JS,
              Next JS, and Redux JS. Noteworthy projects include the development
              of a single sign-on application, an edtech platform, and an
              e-commerce site for Printila. Moreover, I've spearheaded various
              smaller-scale projects like the creation and deployment of a CSV
              to JSON Converter on GeeksforGeeks' domain.
            </p>
          </div>
        </div>
        <div className={styles.rightAboutContent}>
          <img src="/img_about.svg" alt="Error in loading frame" />
        </div>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.leftContactContent}>
          <p>
            Feel free to reach out via{" "}
            <Link href="mailto:er.prathamsaxena@gmail.com">e-mail</Link>, or
            follow me on{" "}
            <Link
              href="https://www.instagram.com/prathamsaxen/"
              target="_blank"
            >
              Instagram
            </Link>{" "}
            . Want to see where I’ve worked? Check out my{" "}
            <Link href="/" target="_blank">
              Resume
            </Link>
            , or Connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/prathamsaxena"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
        <div className={styles.rightContactContent}>
          <Link href="/contact">
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
      <div className={styles.signatureDiv}>
        <img src="/signature.png" alt="Error in loading sign" />
      </div>
    </div>
  );
}
