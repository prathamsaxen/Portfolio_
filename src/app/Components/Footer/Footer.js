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
            <Link href="/">Email</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Github</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Discord</Link>
            <Link href="/">Instagram</Link>
            
          </div>
        </div>
        </div>
      </footer>
      {/* </div> */}
    </div>
  )
}
