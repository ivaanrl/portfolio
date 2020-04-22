import React from "react";
import "./Navbar.scss";
import dropdown from "../../assets/FigmaComponents/dropdown.png";
import { Link } from "react-scroll";

export interface navBarProps {
  switchDropdownMenu: () => void;
}

const Navbar = (props: navBarProps) => {
  const { switchDropdownMenu } = props;

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="home" smooth={true} offset={-120}>
          Iván Roldán Lusich
        </Link>
      </div>
      <div className="right-navbar">
        <Link to="home" smooth={true} offset={-120}>
          <div className="nav-item">Home</div>
        </Link>
        <Link to="skills" smooth={true} offset={20}>
          <div className="nav-item">Skills</div>
        </Link>
        <Link to="projects" smooth={true} offset={-120}>
          <div className="nav-item">Projects</div>
        </Link>
        <Link to="contact" smooth={true}>
          <div className="nav-item">Contact</div>
        </Link>
        <div className="dropdown" onClick={switchDropdownMenu}>
          <img src={dropdown} alt="dropdown icon to toggle menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
