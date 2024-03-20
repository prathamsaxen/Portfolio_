import React from "react";
import styles from "./ProfileCard.module.css";
import { useRouter } from "next/navigation";

function ProfileCard(props) {
  const router=useRouter();
  return (
    <div className={`${styles.Card}  ${props.className}`} onClick={()=>router.push(props.data.link)}>
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
