import React from "react";
import "./Project.scss";
export interface projectProps {
  title: string;
  description: string;
  github: string;
  liveSite: string;
  picture: string;
  technologies: string[];
}

const Project = (props: projectProps) => {
  return (
    <div className="project-container">
      <div className="hover-container">
        <div className="title"> {props.title} </div>
        <div className="description">{props.description} </div>
        <div className="button-container">
          <div className="live-site">
            <a href={props.liveSite} target="blank">
              Live site
            </a>
          </div>
          <div className="code">
            <a href={props.github} target="blank">
              View code
            </a>
          </div>
        </div>
      </div>
      <img
        src={props.picture}
        alt="Screenshot of Twooter app"
        className="project-img"
      ></img>
    </div>
  );
};

export default Project;
