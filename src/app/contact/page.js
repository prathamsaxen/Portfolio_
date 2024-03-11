"use client";
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "../Components/Header/Header";
import MediaIcons from "../Components/MediaIcons/MediaIcons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ContactForm from "../Components/Forms/ContactForm/ContactForm";
import ErrorForm from "../Components/Forms/ErrorForm/ErrorForm";
export default function page() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [displayForm, setDisplayForm] = useState(0);
  const [status, setStatus] = useState(false);
  const [disable,setDisable]=useState(false);
  const handleSubmit = async () => {
    setDisable(true);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      userDetails.email.trim()
    );
    if (!isValidEmail) {
      toast.error("Enter Correct Email!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.name.trim() === "") {
      toast.error("Name is required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.subject.trim().length < 5) {
      toast.error("Subject must contain at least 5 Characters", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (userDetails.msg.trim().length < 10) {
      toast.error("Message must contain at least 10 Characters", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      try {
        const { status } = await axios.post(
          `${process.env.API}api/create-enquiry`,
          {
            name: userDetails.name,
            email: userDetails.email,
            subject: userDetails.subject,
            msg: userDetails.msg,
          }
        );

        if (status === 200) {
          setDisplayForm(1);
          setStatus(true);
          setUserDetails({
            name: "",
            email: "",
            subject: "",
            msg: "",
          });
        }
      } catch (e) {
        setDisplayForm(1);
        setStatus(false);
        console.log(e);
      }
    }
    setDisable(false);
  };

  return (
    <div className={styles.contact}>
      <Header title="Get in touch" subtitle="Lets build something awesome" />
      {displayForm === 0 ? (
        <ContactForm
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          handleSubmit={handleSubmit}
          marginTOP={"60px"}
          disabled={disable}
        />
      ) : (
        <ErrorForm marginTOP={"60px"} status={status} />
      )}
      <MediaIcons marginTop={"60px"} />
    </div>
  );
}
