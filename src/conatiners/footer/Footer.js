import React from "react";
import "./Footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__adding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
          adipisci possimus. Ex?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sed eius natus mollitia obcaecati deserunt!
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default Footer;
