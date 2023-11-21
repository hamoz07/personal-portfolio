import React from "react";
import "./hero.css";
import laptop from '../../../public/animations/Animation - 1700558036803.json'
import Lottie from "lottie-react";
import personalImg from './1665068830591.jpeg'
import verify from '../../../public/animations/Animation - 1700595310768.json'
const Hero = () => {
  return (
    <section className="flex" id="about">
      <div className="hero-holder-left ">
        <div className="avatar-holder">
          <img src={personalImg} alt="me" />
          <span><Lottie animationData={verify}/></span>
        </div>
        <h1>I am a front end developer, I build Websites, and develop Web Applications.</h1>
        <p>
          a passionate front-end developer with a strong focus on ReactJS. I
          love turning ideas into fully functional projects and continuously
          challenge myself to work on advanced projects.
          {"I've"} had the privilege of working on projects ranging from css only projects to e-commerce dashboards. 
        </p>
        <div className="icons flex">
          <a href="https://www.linkedin.com/in/hamza-ramadan/" target="_blank" rel="noreferrer">
            <div className="icon icon-linkedin2"></div>
          </a>
          <a href="https://github.com/hamoz07/">
            <div className="icon icon-github"></div>
          </a>
        </div>
      </div>
      <div className="hero-holder-right"><Lottie animationData={laptop} /></div>
    </section>
  );
};

export default Hero;
