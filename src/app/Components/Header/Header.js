'use client';
import React from 'react';
import styles from './Header.module.css';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
function Header(props) {
    useLayoutEffect(() => {
        gsap.fromTo(
            `.heading`,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2
            }
        );
        gsap.fromTo(
            `.subHeading`,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                y: 0
            }
        );
    }, []);
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>℘</div>
            <div className={styles.HeaderWrapper}>
                <div className={styles.Wrapper}>
                    <h1 className={'heading'}>{props.title}</h1>
                    <p className={'subHeading'}>{props.subtitle}</p>
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
    );
}

export default Header;
