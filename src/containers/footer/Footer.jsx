/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './footer.css';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="footer">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Get In Touch</h1>
    </div>
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3> Feel free to contact me You can reach me via my social accounts or my Gmail.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button"><a href="https://www.linkedin.com/in/muhammedhaan">Say Hello</a></button>
      </div>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links">
        <p className="gpt3__footer-links_git"><a href="https://github.com/muhammedhasann"><BsGithub /></a></p>
        <p className="gpt3__footer-links_Twi"><a href="https://twitter.com/Muhammed__Hasan"><BsTwitter /></a></p>
        <p className="gpt3__footer-links_lin"><a href="https://www.linkedin.com/in/muhammedhaan"><BsLinkedin /></a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2022 Muhammed Hasan.</p>
    </div>
  </div>
);

export default Footer;
