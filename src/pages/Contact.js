import React from "react";
import Header from "../components/Header";
import Peonies from "../images/peonies.jpg"

const Contact = () => {
  const recipientEmail = 'leah@foxwren.com';
  const composeEmail = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return(
    <div className="contact-page">
        <Header />
        <div className="contact-page--container">
          <div className="contact-page--content">
            <h1>Get in touch</h1>
            <p>If you have an event or freelance project you would like to discuss, I would love to hear from you.</p>
            <div className="contact-page--button-container">
              <button className="contact-page--button" onClick={composeEmail} target="_blank">Contact Leah</button>
            </div>
          </div>
          <img src={Peonies} alt="" />
        </div>
      </div>
  )
}

export default Contact;
