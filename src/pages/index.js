import React, { useState } from "react";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import InfoSection from "../components/Infosection";
import { homeObjOne, homeObjTwo } from "../components/Infosection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Herosection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
