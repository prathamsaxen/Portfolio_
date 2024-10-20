import React from 'react';
import styles from './TechCard.module.css';
function TechCard(props) {
    return (
        <div className={`${styles.TechCard} techcard`}>
            <img src={props.logo} alt='Error in loading' />
            <div className={styles.info}>
                <p>{props.title}</p>
                <p>{props.tag}</p>
            </div>
        </div>
    );
}
export default TechCard;
