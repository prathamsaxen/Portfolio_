import React from "react";
import styles from "./ErrorForm.module.css";
function ErrorForm(props) {
  return (
    <div className={styles.container} style={{ marginTop: props.marginTOP }}>
      {props.status ? (
        <>
          <img src="/contact/Sent.svg" alt="Error in Loading" />
          <h3>Message Sent!</h3>
          <p>
            Thanks for taking the time to write me, I’ll reply to you as soon as
            possible.
          </p>
        </>
      ) : (
        <>
          <img src="/contact/Error.svg" alt="Error in Loading" />
          <h3>Cannot send message :(</h3>
          <p>
            An error occurred while sending your message, please try again
            later.
          </p>
        </>
      )}
    </div>
  );
}

export default ErrorForm;
