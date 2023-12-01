import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="icons flex">
      <a href="https://www.linkedin.com/in/hamza-ramadan/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/hamoz07/">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
      </div>
      <p>©️ 2023 spencer sharp. all rights reserved.</p>
    </footer>
  )
}

export default Footer
