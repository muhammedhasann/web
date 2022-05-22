/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgDesktop } from 'react-icons/cg';
import Article from '../../components/article/Article';
import { work1, work2, work3 } from './imports';

import './work.css';

const Work = () => (
  <div className="gpt3__blog section__padding" id="work">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Some Things I’ve Built, <br /> My latest case studies.</h1>
    </div>

    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={work1} web1={<a href="https://muhammadhasan.w3spaces.com/"><CgDesktop /></a>} git1={<a href="https://github.com/muhammedhasann/project_modern_ui_ux_gpt3.git"><BsGithub /></a>} text1="My Portfolio Website" text2="Having a strong Portfolio will prove and improve your skills. I have built his site by using react.js and some of Bem " />
        <Article imgUrl={work2} web2={<a href="https://burgapp.mybluemix.net/djangoapp/"><CgDesktop /></a>} git2={<a href="https://github.com/muhammedhasann/agfzb-CloudAppDevelopment_Capstone-1.git"><BsGithub /></a>} text1="Full Stack Application" text2="I built a full Stack application using python (Django) and some of the front-end languages." />
        <Article imgUrl={work3} web3={<a href="https://github.com/muhammedhasann"><CgDesktop /></a>} git3={<a href="https://github.com/muhammedhasann/vftvk-Simple-Interest-Calculator.git"><BsGithub /></a>} text1="Simple-Interest-Calculator" text2="I built interest calculator using JavaScript, Html and Css" />
      </div>
    </div>
  </div>
);
export default Work;
