import React from 'react';
import './Navbar.scss';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="frontend" smooth={true} offset={-120}>
        <div className="nav-item">SKILLS</div>
      </Link>
      <Link to="projects" smooth={true}>
        <div className="nav-item">PROJECTS</div>
      </Link>
      <Link to="contact" smooth={true}>
        <div className="nav-item">CONTACT</div>
      </Link>
    </div>
  );
};

export default Navbar;
