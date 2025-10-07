import React from "react";
import "./hero.css";
import laptop from '../../../public/animations/Animation - 1700558036803.json'
import Lottie from "lottie-react";
import personalImg from './112629005.jpeg'
import verify from '../../../public/animations/Animation - 1700595310768.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <section className="flex">
      <div className="hero-holder-left ">
        <div className="avatar-holder">
          <img src={personalImg} alt="me" />
          <span><Lottie animationData={verify}/></span>
        </div>
        <h2>
          Hi, {"I'm"} Hamza
        </h2>
        <p>
           I build Websites, and develop Web Applications
        </p>
        <div className="icons flex">
          <a href="https://www.linkedin.com/in/hamza-ramadan/" target="_blank" rel="noreferrer">
            {/* <div className="icon icon-linkedin2"></div> */}
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/hamoz07/">
            {/* <div className="icon icon-github"></div> */}
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
      <div className="hero-holder-right"><Lottie animationData={laptop} /></div>
    </section>
  );
};

export default Hero;

