'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import MainPreLoader from './Components/MainPreLoader/MainPreLoader';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import styles from './Config.module.css';
function Config({ children }) {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);
    return (
        <div>
            <>
                {loader ? (
                    <MainPreLoader />
                ) : (
                    <div className={styles.mainWrapper}>
                        <ToastContainer />
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                )}
            </>
        </div>
    );
}

export default Config;
