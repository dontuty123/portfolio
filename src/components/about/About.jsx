/** @format */

import React from "react";
import "./about.css";
import Award from "../../img/about.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Award} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Hi, I'm a front-end developer who can code all day without getting tired.</p>
        <p className="a-desc">
          I started learning to code in college, and i start make money from my programming skill from 6 months ago by
          selling my project i've made since i was in school on social media. In the past year, I have been very focused
          on learning front-end web programming. Now I am very confident that my abilities can meet your requirements.
        </p>
      </div>
    </div>
  );
};

export default About;
