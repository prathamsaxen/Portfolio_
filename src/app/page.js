'use client';
import styles from "./page.module.css";
// import Lottie from "lottie-react";
// import animation from "./Animation/animation.json";
import WorkCard from "./Components/Card/WorkCard/WorkCard";
import ProfileCard from "./Components/Card/ProfileCard/ProfileCard";
// import Footer from "./Components/Footer/Footer";
import pastProjects from "./configurations/projects";
export default function Home() {
  // const pastProjects = [
  //   {
  //     logo: "/printila_logo.png",
  //     description: `Codefeast stands as an advanced project tailored for the edtech
  //     industry. Crafted using cutting-edge technologies like React JS and
  //     modular CSS, alongside other complementary stacks, this initiative is
  //     dedicated to providing a comprehensive platform. Within its framework,
  //     Codefeast offers a diverse array of features and courses, facilitating
  //     students in their journey to master coding and stay abreast of
  //     emerging technologies.`,
  //     heading: "Printila - E commerce platform",
  //     link: "https://test.seller.printila.in/",
  //     demoImage: "/printila_demo.png",
  //   },
  //   {
  //     logo: "/codefeastLogo.png",
  //     description: `Codefeast stands as an advanced project tailored for the edtech
  //     industry. Crafted using cutting-edge technologies like React JS and
  //     modular CSS, alongside other complementary stacks, this initiative is
  //     dedicated to providing a comprehensive platform. Within its framework,
  //     Codefeast offers a diverse array of features and courses, facilitating
  //     students in their journey to master coding and stay abreast of
  //     emerging technologies.`,
  //     heading: "Codefeast - Coding based edtech platform",
  //     link: "https://codefeast.in/",
  //     demoImage: "/codefeast.png",
  //   },
  //   // {
  //   //   logo: "/codefeastLogo.png",
  //   //   description: `Codefeast stands as an advanced project tailored for the edtech
  //   //   industry. Crafted using cutting-edge technologies like React JS and
  //   //   modular CSS, alongside other complementary stacks, this initiative is
  //   //   dedicated to providing a comprehensive platform. Within its framework,
  //   //   Codefeast offers a diverse array of features and courses, facilitating
  //   //   students in their journey to master coding and stay abreast of
  //   //   emerging technologies.`,
  //   //   heading:"Codefeast - Coding based edtech platform",
  //   //   link:"https://codefeast.in/",
  //   //   demoImage:"/codefeast.png"
  //   // },
  // ];
  const profileCards = [
    {
      title: "About Me",
      paragraph: "Who i am and what i do",
      image: "/me.svg",
      link: "/",
    },
    {
      title: "Tech Stack",
      paragraph: "The dev tools, apps, devices, and games I use and play.",
      image: "/Tech Stack.svg",
      link: "/",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.logo}>℘</div>
      <div className={styles.mainHome}>
        <div className={styles.infoFrame}>
          <div className={styles.leftInfoFrame}>
            <h1>
              <span>I'm</span> Pratham Saxena
            </h1>
            <p>
              A front-end engineer and UI/UX designer helping startups turn
              their visions into a digital reality. I specialize in designing
              and building modern mobile and web-based apps.
            </p>
            <div className={styles.buttonStacks}>
              <button>See my resume</button>
              <button>Get in touch</button>
            </div>
          </div>
          {/* <div className={styles.rightInfoFrame}>
            <Lottie
              animationData={animation}
              loop={true}
              className={styles.anim}
            />
          </div> */}
        </div>
      </div>
      <div className={styles.selectedWork}>
        <h2>Selected Work</h2>
        {pastProjects.map((item, index) => {
          return <WorkCard data={item} key={index} />;
        })}
      </div>
      <div className={styles.knowMeFrame}>
        <h2>Get to know me</h2>
        <div className={styles.knowCards}>
          {profileCards.map((item, index) => {
            return <ProfileCard data={item} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.contactFrame}>
        <div className={styles.contentContactFrame}>
          <h2>Let's work together</h2>
          <p>
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <button>
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
        </button>
      </div>
    </div>
  );
}
