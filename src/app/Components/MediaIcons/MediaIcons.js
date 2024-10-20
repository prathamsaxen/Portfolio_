import React from 'react';
import styles from './MediaIcons.module.css';
import socialMediaIcons from '@/app/configurations/SocialMediaIcons';
import Link from 'next/link';
function MediaIcons(props) {
    return (
        <div className={styles.container} style={{ marginTop: props.marginTop }}>
            {socialMediaIcons.map((item, index) => {
                return (
                    <Link href={item.link} key={index} target='_blank' title={item.title}>
                        <img src={item.img} alt='Error in loading' />
                    </Link>
                );
            })}
        </div>
    );
}

export default MediaIcons;
