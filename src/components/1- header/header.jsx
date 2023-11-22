import { useState } from "react";
// import { MoonIcon } from "@heroicons/20/solid";
import "./header.css";
import Modal from "./modal/modal";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme,setTheme] = useState(localStorage.getItem("theme") ?? "dark")

  useEffect(()=>{

    if(theme === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    
    }
  },[theme])

  return (
    <header className="flex">
      <button onClick={() => setToggle(true)}>
        {
         theme === "dark" ? 
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} /> 
        : 
        <FontAwesomeIcon icon={faBars} style={{color:"#000"}} /> 
        
        }
      </button>
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={()=>{
        
        localStorage.setItem("theme",theme === "light" ? "dark" : "light")
        setTheme(localStorage.getItem("theme"))
      }}>
        
       {
         theme === "dark" ? 
         <FontAwesomeIcon icon={faMoon} style={{color: "#ffffff",}} />
         :
         <FontAwesomeIcon icon={faSun} style={{color: "#000",}}/> 
        }
       
      </button>
      {toggle && <Modal setToggle={setToggle} theme={theme} />}
    </header>
  );
};

export default Header;
