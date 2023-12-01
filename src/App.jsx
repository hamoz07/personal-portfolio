import { useEffect, useState } from "react";
import Header from "./components/1- header/header";
import Hero from "./components/2- hero/hero";
import About from "./components/3- About/about";
import Skills from "./components/4- skills/Skills";
import Main from "./components/5- main/main";
import Contact from "./components/6- contact/Contact";
import Footer from "./components/7- footer/footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [show,setShow] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 430) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <div className="separator"></div>
        <About />
        <div className="separator"></div>
        <Skills />
        <div className="separator"></div>
        <Main  />
        <div className="separator"></div>
        <Contact />
        <div className="separator"></div>
        <Footer />
      </div>
      {show && <button className="scroll2top" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>}
    </>
  );
};

export default App;
