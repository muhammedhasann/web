import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Hey! I’m Muhammed Hasan, Front End Developer.</h1>
      <p>I build interactive websites that run across platforms & devices. Currently, I’m focused on UX &  Front End.</p>
      <button className="glow-on-hover" type="button"><a href="#work">Learn More</a></button>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
