import React, { useState } from "react";
import axios from 'axios';



import {
  ContactFormWrapper,
  ContactFormContainer,
  ContactFormHeading,
  Alert
} from "./contact-form.styles";

import Btn from "../Btn/btn.component";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [mess, setMess] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();
    axios
        .post("//localhost/zadatak_blog/server/contact/php/contact.php", {
          name: userName,
          mail: userMail,
          message:userMessage
        })
        .then((response) => {


if(response.data.send){
alert('Message send')
    setMess('Message send');

    setUserName('');
    setUserMail('');
    setUserMessage('');
    document.getElementById("myFormContact").reset();
    
    
}else{
    setMess('Message not send')
}
        })
        .catch((error) => console.error(error));
  };

  return (
    <ContactFormWrapper>
    <Alert>{mess}</Alert>
      <ContactFormHeading>Contact Me:</ContactFormHeading>

      <ContactFormContainer id='myFormContact' onSubmit={SendMessage}>
        <label htmlFor="name">Name:</label>
    
        <input
          type="text"
          minLength="1"
          maxLength='200'
          placeholder="Enter your name"
          name="name"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          maxLength='200'
          required
          onChange={(e) => {
            setUserMail(e.target.value);
          }}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          minLength="1"
          maxLength='2000'
          placeholder="Enter your message"
          name="message"
          required
          rows="15"
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <Btn type="submit" heading="Send" />
      </ContactFormContainer>
     
    </ContactFormWrapper>
  );
};

export default ContactForm;
