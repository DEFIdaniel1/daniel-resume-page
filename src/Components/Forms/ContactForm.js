import React, { useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";

import TransitionPage from "../UI/TransitionPage";
import "./Contact.scss";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [msgSent, setMsgSent] = useState(false);
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setMsgSent(true);

    emailjs
      .sendForm("gmail", "webform_1", formRef.current, "uy1fkVn8vvxIRDd9M")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <TransitionPage title="Send me a note!" />
      {!msgSent && (
        <Container className="form-contact text-center">
          <form onSubmit={submitHandler} ref={formRef}>
            <h2>Questions? Looking for a resume?</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Your lovely message!"
              ></textarea>
            </div>
            <Button type="submit">
              <i class="fa-solid fa-paper-plane"></i>  Send
            </Button>
          </form>
          <script src="https://smtpjs.com/v3/smtp.js"></script>
        </Container>
      )}
      {msgSent && (
        <Container className="form-contact text-center">
          <h3>Thank you!</h3>
          <h6>
            <i class="fa-solid fa-paper-plane"></i>
          </h6>
          <p>I will reply to you as soon as I can!</p>
        </Container>
      )}
    </>
  );
};

export default ContactForm;
