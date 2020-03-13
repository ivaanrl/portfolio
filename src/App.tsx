import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
