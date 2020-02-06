import React from 'react';
import './Projects.scss';
import Project from './project/Project';
import TwotterImg from '../../assets/Projects/Screenshots/twooterScreenshot.png';
import AlgorithmsImg from '../../assets/Projects/Screenshots/algorithmVisualizerScreenshot.png';
import PathfindingImg from '../../assets/Projects/Screenshots/Screenshot from 2020-02-06 14-56-12.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Projects = () => {
  const TwooterDescription: string =
    "Twooter is a Twitter clone created using Angular 8 along with bootstrap in the front end. It connects with a NodeJS/Express REST API which utilises PostgreSQL to store the users' data.";
  const twooterTechnologies: string[] = [
    'Angular',
    'Bootstrap',
    'NodeJS',
    'Express',
    'PostgreSQL'
  ];

  const AlgorithmDescription: string =
    'Algorithm visualizer is a website where you can watch how some algorithms work. Here you can mainly visualize sorting and searching algorithms, as well as some others!.';

  const algorithmTechnologies: string[] = ['Angular', 'Bootstrap'];

  const pathfindingDescription: string =
    "In pathfinding visualizer you can visualize Dijkstra's and A* weighted pathfinding algorithms, as well as DFS and BFS unweighted pathfinding algorithms.";

  const pathfindignTechnologies: string[] = ['React'];

  return (
    <div className="container" id="projects">
      <div className="title-container">
        <div className="title">PROJECTS</div>
      </div>
      <div className="projects-container">
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <Project
            title="Twooter"
            description={TwooterDescription}
            github="https://github.com/ivaanrl/social-clone"
            liveSite="https://ivaanrl.github.io/social-clone/"
            picture={TwotterImg}
            technologies={twooterTechnologies}
          ></Project>
        </ScrollAnimation>
        <div className="separator"></div>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <Project
            title="Algorith Visualizer"
            description={AlgorithmDescription}
            github="https://github.com/ivaanrl/algorithmVisualizer"
            liveSite="https://ivaanrl.github.io/algorithmVisualizer/sortingVisualizer"
            picture={AlgorithmsImg}
            technologies={algorithmTechnologies}
          ></Project>
        </ScrollAnimation>
        <div className="separator"></div>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <Project
            title="Pathfinding Visualizer"
            description={pathfindingDescription}
            github="https://github.com/ivaanrl/pathfindingVisualizer"
            liveSite="https://ivaanrl.github.io/pathfindingVisualizer/"
            picture={PathfindingImg}
            technologies={pathfindignTechnologies}
          ></Project>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
