/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hero.scss";
import mockUp from "../../assets/FigmaComponents/HeroMockUpPage.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="main-container" id="home">
      <div className="titles-and-buttons">
        <div className="main-title">Full-Stack web developer.</div>
        <div className="subtitle">I help deliver amazing user experience.</div>
        <div className="buttons-container">
          <div className="see-my-work">
            <Link to="projects" smooth={true} offset={-120}>
              See my work
            </Link>
          </div>
          <div className="check-my-skills">
            <Link to="skills" smooth={true} offset={20}>
              Check my skills
            </Link>
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src={mockUp}
          className="mockup-image"
          alt="mock up of a web app."
        />
      </div>
    </div>
  );
};

export default Hero;
