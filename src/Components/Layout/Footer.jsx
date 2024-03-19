import React from "react";
import "./Footer.css";
import {  FaWhatsapp, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_Left">
        <h2>About Website:</h2>
        <p>This website is design to know more about the society</p>
        <p>Created by team <b>HE110 W0R1D</b></p>
        <h3>Copyright &#169; All rights reserved</h3>
      </div>
      <div className="Footer_Right">
        <h2> Contact Us:</h2>
        <div className="Footer_Icons">
          <a href="https://www.instagram.com/helloworldclub_ucer?igsh=cDZ0c3RzcGtkdHc0" target="_blank" rel="noreferrer">
          <FaInstagram
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
          <a href="https://chat.whatsapp.com/DX7mgcWEzTnATje8JhhFUt" target="_blank" rel="noreferrer">
          <FaWhatsapp
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
          <a href="https://discord.gg/zYPKVrarNd" target="_blank" rel="noreferrer">
          <FaDiscord
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
