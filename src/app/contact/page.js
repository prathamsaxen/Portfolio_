import React from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import MediaIcons from "../Components/MediaIcons/MediaIcons";
export default function page() {
  return (
    <div className={styles.contact}>
      <Header title="Get in touch" subtitle="Lets build something awesome"/>
      <div className={styles.contactForm}>
          <div className={styles.FormHeader}>
            <img src="/controls.svg" alt="Error in Loading..." />
            <h1>Text Message</h1>
          </div>
          <div className={styles.mainForm}>
            <div className={styles.inputLabels}>
              <div className={styles.labels}>
                  <label htmlFor="email">
                    Email
                  </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email address here..." />
              </div>
              <div className={styles.labels}>
                  <label htmlFor="name">
                    Name
                  </label>
                  <input type="text" name="name" id="name" placeholder="Enter your name here..." />
              </div>
              <div className={styles.labels}>
                  <label htmlFor="subject">
                    Subject
                  </label>
                  <input type="text" name="subject" id="subject" placeholder="Enter your subject here..." />
              </div>
            </div>
            <div className={styles.textArea}>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here..."></textarea>
            </div>
          </div>
          <div className={styles.formFooter}>
            <button>
              Send
            </button>
          </div>
      </div>
      <MediaIcons marginTop={"60px"}/>
    </div>
  );
}
