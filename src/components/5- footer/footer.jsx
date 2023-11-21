import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="about">about</a></li>
        <li><a href="projects">projects</a></li>
        <li><a href="contact">contact</a></li>
      </ul>
      <div className="icons flex">
          <div className="icon icon-linkedin2"></div>
          <div className="icon icon-github"></div>
        </div>
      <p>©️ 2023 spencer sharp. all rights reserved.</p>
    </footer>
  )
}

export default Footer
