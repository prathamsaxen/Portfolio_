import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard(props) {
  return (
    <div className={styles.Card}>
      <div className={styles.textSection}>
        <h2>{props.data.title}</h2>
        <p>{props.data.paragraph}</p>
      </div>
      <div className={styles.imageSection}>
        <img src={props.data.image} alt="Error in loading" />
      </div>
    </div>
  );
}

export default ProfileCard;
