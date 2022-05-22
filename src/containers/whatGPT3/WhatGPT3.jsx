import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About me" text=" I’m a self-taught Front End Developer and Mechanical  Engineering student. My curiosity about Technology and Robots led me to get into coding. Back in 2019, when I was trying to build a blog and publish a blog about Engineering, I could not create it, so I decided to learn how to make a blog, and from there, my story in coding started." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">My Skills And Qualifications</h1>
      <p>Explore My Work</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Front-End" text="Html/ Css/ JavaScript/ jQuery / React/ Bootstrap/ Jest/ NPM/ Webpack/ UX" />
      <Feature title="Back-End" text="Python/ Django/ Node.js/ MySQL/ Git" />
      <Feature title="Certifications" text="IBM Full Stack Software Developer Professional " />
    </div>
  </div>
);

export default WhatGPT3;
