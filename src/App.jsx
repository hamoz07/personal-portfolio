import { useEffect, useState } from "react";
import Header from "./components/1- header/header";
import Hero from "./components/2- hero/hero";
import Main from "./components/4- main/main";
import Contact from "./components/5- contact/Contact";
import Footer from "./components/6- footer/footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./components/3- About/about";

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
