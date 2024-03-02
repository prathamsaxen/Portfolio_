import React from 'react'
import styles from "./Footer.module.css";
import Link from 'next/link';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
      <div className={styles.gradient}>
        
        <div className={styles.leftFooter}>
          <div className={styles.upper}>
          <h2>℘</h2>
          <p>Thanks for stopping by ッ</p>
          </div>
          <p>©️ 2024 Pratham Saxena. All Rights Reserved.</p>
        </div>
        <div className={styles.rightFooter}>
          <div className={styles.Links}>
            <p>Links</p>
            <Link href="/">About</Link>
            <Link href="/">Work</Link>
            <Link href="/">Tech Stack</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.Links}>
            <p>Elsewhere</p>
            <Link href="mailto:er.prathamsaxena@gmail.com">Email</Link>
            <Link href="https://www.linkedin.com/in/prathamsaxena/" target="_blank">LinkedIn</Link>
            <Link href="https://github.com/prathamsaxen" target="_blank">Github</Link>
            <Link href="https://www.youtube.com/@Pratham-Saxena" target="_blank">Youtube</Link>
            <Link href="https://twitter.com/pratham__saxena" target="_blank">Twitter</Link>
            <Link href="https://www.instagram.com/prathamsaxen/" target="_blank">Instagram</Link>
            
          </div>
        </div>
        </div>
      </footer>
      {/* </div> */}
    </div>
  )
}
