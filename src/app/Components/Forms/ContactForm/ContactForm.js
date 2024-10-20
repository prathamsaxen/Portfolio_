import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm(props) {
    return (
        <div className={styles.contactForm} style={{ marginTop: props.marginTOP }}>
            <img src='/contact/MAC.svg' alt='Error in Loading' />
            <div className={styles.mainForm}>
                <div className={styles.inputLabels}>
                    <div className={styles.labels}>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter your email address here...'
                            onChange={(e) =>
                                props.setUserDetails({
                                    ...props.userDetails,
                                    email: e.target.value
                                })
                            }
                            value={props.userDetails.email}
                            disabled={props.disabled}
                        />
                    </div>
                    <div className={styles.labels}>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter your name here...'
                            onChange={(e) =>
                                props.setUserDetails({
                                    ...props.userDetails,
                                    name: e.target.value
                                })
                            }
                            value={props.userDetails.name}
                            disabled={props.disabled}
                        />
                    </div>
                    <div className={styles.labels}>
                        <label htmlFor='subject'>Subject</label>
                        <input
                            type='text'
                            name='subject'
                            id='subject'
                            placeholder='Enter your subject here...'
                            onChange={(e) =>
                                props.setUserDetails({
                                    ...props.userDetails,
                                    subject: e.target.value
                                })
                            }
                            value={props.userDetails.subject}
                            disabled={props.disabled}
                        />
                    </div>
                </div>
                <div className={styles.textArea}>
                    <textarea
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='Write your message here...'
                        onChange={(e) =>
                            props.setUserDetails({
                                ...props.userDetails,
                                msg: e.target.value
                            })
                        }
                        value={props.userDetails.msg}
                        disabled={props.disabled}
                    ></textarea>
                </div>
            </div>
            <div className={styles.formFooter}>
                <button onClick={props.handleSubmit} disabled={props.disabled}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default ContactForm;
