import React from "react";
import "./DropdownMenu.scss";
import { Link } from "react-scroll";

export interface dropdownMenuProps {
  switchDropdownMenu: () => void;
  openDropdown: boolean;
}

const DropdownMenu = (props: dropdownMenuProps) => {
  const { openDropdown, switchDropdownMenu } = props;
  let dropdownClass = "dropdown-menu";

  if (openDropdown) {
    dropdownClass = "dropdown-menu open";
  }

  return (
    <div className={dropdownClass} onClick={switchDropdownMenu}>
      <Link to="home" smooth={true} offset={-120} onClick={switchDropdownMenu}>
        <div className="dropdown-menu-nav-item">Home</div>
      </Link>
      <Link
        to="projects"
        smooth={true}
        offset={-120}
        onClick={switchDropdownMenu}
      >
        <div className="dropdown-menu-nav-item">Projects</div>
      </Link>
      <Link to="skills" smooth={true} offset={-60} onClick={switchDropdownMenu}>
        <div className="dropdown-menu-nav-item">Skills</div>
      </Link>
      <Link to="contact" smooth={true} onClick={props.switchDropdownMenu}>
        <div className="dropdown-menu-nav-item">Contact</div>
      </Link>
    </div>
  );
};

export default DropdownMenu;
