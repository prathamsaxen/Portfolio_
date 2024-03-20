"use client"
import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import MainPreLoader from "./Components/MainPreLoader/MainPreLoader";
import Footer from "./Components/Footer/Footer";
import { useState,useEffect } from "react";
function Config({ children }) {
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },2000);
    },[])
  return (
    <div>
      <>
        {loader ? (
          <MainPreLoader />
        ) : (
          <>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default Config;
