/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

import logo from '../../assets/4.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#home"> <img src={logo} /></a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p className="About"><a href="#home">Home</a></p>
          <p className="About"><a href="#wgpt3">About</a></p>
          <p className="About"><a href="#work">Portfolio</a></p>
          <p className="About"><a href="#footer">Contact</a></p>
        </div>
      </div>
      <div className="social_icons">
        <p className="social_icons_git"><a href="https://github.com/muhammedhasann"><BsGithub /></a></p>
        <p className="social_icons_Twi"><a href="https://twitter.com/Muhammed__Hasan"><BsTwitter /></a></p>
        <p className="social_icons_lin"><a href="https://www.linkedin.com/in/muhammedhaan"><BsLinkedin /></a></p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#work">Portfolio</a></p>
            <p><a href="#features">Skills</a></p>
            <p><a href="#footer">Contact</a></p>
          </div>
          <div className="social_icons_menu">
            <p className="social_icons_git_menu"><a href="https://github.com/muhammedhasann"><BsGithub /></a></p>
            <p className="social_icons_Twi_menu"><a href="https://twitter.com/Muhammed__Hasan"><BsTwitter /></a></p>
            <p className="social_icons_lin_menu"><a href="https://www.linkedin.com/in/muhammedhaan"><BsLinkedin /></a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
