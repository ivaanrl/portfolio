import React from 'react';
import './Project.scss';
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
      <div className="img-container">
        <img
          src={props.picture}
          alt="Screenshot of Twooter app"
          className="project-img"
        ></img>
        <div className="technologies-container">
          {props.technologies.map(technology => (
            <div className="technology" key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
      <div className="text-container">
        <div className="title-and-description-container">
          <div className="project-title">{props.title} </div>

          <div className="description">{props.description}</div>
        </div>
      </div>
      <div className="button-container">
        <div className="github-button">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            Code
          </a>{' '}
        </div>
        <div className="livesite-button">
          <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
