import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact/Contact";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

const App = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const switchDropdownMenu = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="App">
      <Navbar switchDropdownMenu={switchDropdownMenu} />
      <DropdownMenu
        switchDropdownMenu={switchDropdownMenu}
        openDropdown={openDropdown}
      />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
