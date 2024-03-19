import React from "react";
import "./Contact.css";
import { FaPhone,FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Page">
      <h1>Contact Us</h1>
      <div className="contact-parent">
        <div className="contact_right">
          <img
            src="./contact-bg.png"
            alt=""
          />
        </div>
        <div className="contact_left">
          <h2><FaMailBulk/>Helpline mail:</h2>
          <a href="mailto:he110w0r1ducer2024.help@gmail.com">he110w0r1ducer2024.help@gmail.com</a>
          <h2><FaPhone/>Call us:</h2>
          <p>9454500340</p>
          <p>7753041776</p>
          <p>9695975787</p>
          <p>9511196614</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
