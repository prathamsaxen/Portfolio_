"use client"
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import MediaIcons from "../Components/MediaIcons/MediaIcons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function page() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const handleSubmit = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email.trim());
    if (!isValidEmail) {
      toast.error('Enter Correct Email!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.name.trim() === '') {
      toast.error('Name is required!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.subject.trim().length < 20) {
      toast.error('Subject must contain at least 20 Characters', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.msg.trim().length < 40) {
      toast.error('Message must contain at least 40 Characters', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      try {
        const {status} = await axios.post(`${process.env.API}api/create-enquiry`, {
          name: userDetails.name,
          email: userDetails.email,
          subject: userDetails.subject,
          msg: userDetails.msg,
        });

        if (status === 200) {
          toast.success('Contact Sent Successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setUserDetails({
            name: "",
            email: "",
            subject: "",
            msg: "",
          })
        }
      } catch (e) {
        toast.error('Internal Server Error', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(e);
      }
    }
  }

  return (
    <div className={styles.contact}>
      <Header title="Get in touch" subtitle="Lets build something awesome" />
      <div className={styles.contactForm}>
        <div className={styles.FormHeader}>
          <img src="/controls.svg" alt="Error in Loading..." />
          <h1>Text Message</h1>
        </div>
        <div className={styles.mainForm}>
          <div className={styles.inputLabels}>
            <div className={styles.labels}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address here..."
                onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
                value={userDetails.email}
                />
            </div>
            <div className={styles.labels}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name here..."
                onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})}
                value={userDetails.name}
                />
            </div>
            <div className={styles.labels}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject here..."
                onChange={(e)=>setUserDetails({...userDetails,subject:e.target.value})}
                value={userDetails.subject}
                />
            </div>
          </div>
          <div className={styles.textArea}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message here..."
              onChange={(e)=>setUserDetails({...userDetails,msg:e.target.value})}
              value={userDetails.msg}
            ></textarea>
          </div>
        </div>
        <div className={styles.formFooter}>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
      <MediaIcons marginTop={"60px"} />
    </div>
  );
}
