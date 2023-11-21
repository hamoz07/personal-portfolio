import React from "react";
import "../header.css";
// import { XMarkIcon } from "@heroicons/24/outline";
const Modal = ({ setToggle, theme }) => {
  return (
    <div className="fixed"
    
    style={{background:theme === "dark" ? "rgba(40, 40, 48, .91)" : "rgba (0,0,0,.91)"}}
    >
      <ul className={`modal`}>
        <li>
          <a href="about" onClick={() => setToggle(false)}>
            About
          </a>
        </li>
        <li>
          <a href="projects" onClick={() => setToggle(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="contact" onClick={() => setToggle(false)}>
            Contact
          </a>
        </li>
      </ul>
      <button onClick={() => setToggle(false)}>
        <svg fill="none"
        
        style={{    width: "40px"}}
        stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      </button>
    </div>
  );
};

export default Modal;
