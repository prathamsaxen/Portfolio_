import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '../Components/Header/Header';
export default function page() {
    return (
        <div className={styles.about}>
            <Header title={'A little bit about me'} subtitle={'Who I am and What I do'} />

            <div className={styles.aboutContent}>
                <div className={styles.leftAboutContent}>
                    <div className={styles.contentDisplay}>
                        <p>Who I am</p>
                        <p>
                            I’m <span>Pratham Saxena</span> a multi-disciplinary front-end engineer based in Aligarh, India 🇮🇳.
                        </p>
                    </div>
                    <div className={styles.contentDisplay}>
                        <p>What I Do</p>
                        <p>As a frontend developer, my responsibility is to transform design concepts into operational code. I leverage my expertise in React JS, Next JS, HTML, CSS, and JavaScript to achieve this goal effectively. It's essential for me to ensure that the visual elements align seamlessly with the functionality. Through utilizing these tools proficiently, I bridge the gap between design and functionality in web development projects. My role involves executing design visions into functional and user-friendly interfaces.</p>
                    </div>
                    <div className={styles.contentDisplay}>
                        <p>What I Did</p>
                        <p>I am a frontend developer with comprehensive expertise spanning the entire development life cycle. Additionally, during my tenure as an Engineering Intern, I've garnered valuable experience collaborating with esteemed organizations in India, including Printila, GeeksforGeeks, Resolute AI, and Codefeast. Within these roles, I've undertaken numerous projects across a spectrum of client-side technologies such as HTML, CSS, JavaScript, React JS, Next JS, and Redux JS. Noteworthy projects include the development of a single sign-on application, an edtech platform, and an e-commerce site for Printila. Moreover, I've spearheaded various smaller-scale projects like the creation and deployment of a CSV to JSON Converter on GeeksforGeeks' domain.</p>
                    </div>
                </div>
                <div className={styles.rightAboutContent}>
                    <img src='/img_about.svg' alt='Error in loading frame' />
                </div>
            </div>
            <div className={styles.contactContent}>
                <div className={styles.leftContactContent}>
                    <p>
                        Feel free to reach out via <Link href='mailto:er.prathamsaxena@gmail.com'>e-mail</Link>, or follow me on{' '}
                        <Link href='https://www.instagram.com/prathamsaxen/' target='_blank'>
                            Instagram
                        </Link>{' '}
                        . Want to see where I’ve worked? Check out my{' '}
                        <Link href='/' target='_blank'>
                            Resume
                        </Link>
                        , or Connect with me on{' '}
                        <Link href='https://www.linkedin.com/in/prathamsaxena' target='_blank'>
                            LinkedIn
                        </Link>
                        .
                    </p>
                </div>
                <div className={styles.rightContactContent}>
                    <Link href='/contact'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4.93367 12L3.08987 5.73239C2.60867 4.09667 4.14094 2.58539 5.75514 3.10362C10.2067 4.53274 14.4553 6.53713 18.3948 9.06662C19.5259 9.79292 21 10.4417 21 12C21 13.5583 19.5259 14.2071 18.3948 14.9334C14.4553 17.4629 10.2067 19.4673 5.75514 20.8964C4.14094 21.4146 2.60867 19.9033 3.08987 18.2676L4.93367 12ZM4.93367 12H9.83493' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                        </svg>
                        Get in touch
                    </Link>
                </div>
            </div>
            <div className={styles.signatureDiv}>
                <img src='/signature.png' alt='Error in loading sign' />
            </div>
        </div>
    );
}
