import React from "react";
import "./Skills.scss";
import Monitor from "../../assets/FigmaComponents/Monitor.png";
//import Gears from "../../assets/FigmaComponents/Gears.png";
import Server from "../../assets/FigmaComponents/Server.png";
import terminal from "../../assets/FigmaComponents/terminal.png";
import Book from "../../assets/FigmaComponents/Book.png";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="frontend skill">
        <div className="title-and-image">
          <div className="skill-title">Front-End</div>
          <div className="monitor-image-container">
            <img
              src={Monitor}
              alt="Drawing of a monitor"
              className=" frontend-image"
            />
          </div>
        </div>
        <div className="skill-list">
          <ul className="frontend-list">
            <li>React</li>
            <li>Redux</li>
            <li>Angular 2+</li>
            <li>Typescript</li>
            <span>
              <li>REST API integration</li>
            </span>
            <span>
              <li>HTML5</li>
            </span>
            <span>
              <li>SASS</li>
            </span>
            <span>
              <li>Material UI</li>
            </span>
          </ul>
        </div>
      </div>

      <div className="backend skill">
        <div className="title-and-image">
          <div className="skill-title">Back-End</div>
          <div className="images">
            <img src={Server} alt="Drawing of a monitor" />
          </div>
        </div>

        <div className="skill-list">
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>REST API</li>
            <li>Java</li>
            <li>Java Spring</li>
          </ul>
        </div>
      </div>
      <div className="tools skill">
        <div className="title-and-image">
          <div className="skill-title">Tools</div>
          <div className="tools-image-container">
            <img
              src={terminal}
              alt="Drawing of a monitor"
              className=" tools-image"
            />
          </div>
        </div>

        <div className="skill-list">
          <ul>
            <li>GIT</li>
            <li>Postman</li>
            <li>Webpack</li>
            <li>NPM</li>
            <li>Heroku</li>
            <li>Jest</li>
            <li>Enzyme</li>
          </ul>
        </div>
      </div>
      <div className="interested skill">
        <div className="title-and-image">
          <div className="skill-title">Interested</div>
          <div className="book-image-container">
            <img src={Book} alt="Drawing of a monitor" className="book-image" />
          </div>
        </div>

        <div className="skill-list">
          <ul>
            <li>Python</li>
            <li>Data Science</li>
            <li>Java for Android</li>
            <li>React Native</li>
            <li>Elixir</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
