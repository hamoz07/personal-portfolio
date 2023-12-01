import React from 'react'
import NextJs from "./imgs/next-dot-js-svgrepo-com.svg";
import materialUi from "./imgs/material-ui-svgrepo-com.svg";
import postman from "./imgs/postman-icon-svgrepo-com.svg";
import './skills.css'

const Skills = () => {
  return (
    <section id={"skills"}>
    <h1>My Skills</h1>
      <ul className="skills-list">
        <li className="skills-item">
          <i className="bx bxl-html5"></i>
          <h5 className="h5">HTML</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-css3"></i>
          <h5 className="h5">CSS</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-javascript"></i>
          <h5 className="h5">JavaScript</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-typescript"></i>
          <h5 className="h5">TypeScript</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-sass"></i>
          <h5 className="h5">SASS</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-bootstrap"></i>
          <h5 className="h5">Bootstrap</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-tailwind-css"></i>
          <h5 className="h5">Tailwind CSS</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-react"></i>
          <h5 className="h5">React.js</h5>
        </li>
        <li className="skills-item">
          <img src={NextJs} alt="Next JS Icon" />
          <h5 className="h5">Next.js</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-redux"></i>
          <h5 className="h5">Redux</h5>
        </li>
        <li className="skills-item">
          <img src={materialUi} alt="Material UI Icon" />
          <h5 className="h5">Material-UI</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-git"></i>
          <h5 className="h5">Git</h5>
        </li>
        <li className="skills-item">
          <i className="bx bxl-github"></i>
          <h5 className="h5">GitHub</h5>
        </li>
        <li className="skills-item">
          <img src={postman} alt="postman" />
          <h5 className="h5">postman</h5>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
