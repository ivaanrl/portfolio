import React from "react";
import "./Projects.scss";
import Project from "./project/Project";
import TwotterImg from "../../assets/Projects/Screenshots/twooterScreenshot.png";
import AlgorithmsImg from "../../assets/Projects/Screenshots/algorithmVisualizerScreenshot.png";
import PathfindingImg from "../../assets/Projects/Screenshots/Screenshot from 2020-02-06 14-56-12.png";
import PomodoroImg from "../../assets/Projects/Screenshots/pomodoroimg.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Projects = () => {
  const AlgorithmDescription: string =
    "Algorithm visualizer is a website where you can watch how some algorithms work. Here you can mainly visualize sorting and searching algorithms, as well as some others!.";

  const algorithmTechnologies: string[] = ["Angular", "Bootstrap"];

  const TwooterDescription: string =
    "Twooter is a Twitter clone created using Angular 8 along with bootstrap in the front end. It connects with a NodeJS/Express REST API which utilises PostgreSQL to store the users' data.";
  const twooterTechnologies: string[] = [
    "Angular",
    "Bootstrap",
    "NodeJS",
    "Express",
    "PostgreSQL",
  ];

  const pathfindingDescription: string =
    "In pathfinding visualizer you can visualize Dijkstra's and A* weighted pathfinding algorithms, as well as DFS and BFS unweighted pathfinding algorithms.";

  const pathfindignTechnologies: string[] = ["React"];

  const pomodoroTechnologies: string[] = ["React", "Jest", "Enzyme", "Redux"];

  const pomodoroDescription: string =
    "This is a simple Pomodoro Timer in which you can set custom times for your work sessions and breaks. It was built using TDD (Test Driven Development), using Jest and Enzyme.";
  return (
    <React.Fragment>
      <div className="projects-container" id="projects">
        <ScrollAnimation animateIn="flipInX" animateOnce>
          <Project
            title="Twooter"
            description={TwooterDescription}
            github="https://github.com/ivaanrl/social-clone"
            liveSite="https://ivaanrl.github.io/social-clone/"
            picture={TwotterImg}
            technologies={twooterTechnologies}
          ></Project>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInY" animateOnce>
          <Project
            title="Algorithm Visualizer"
            description={AlgorithmDescription}
            github="https://github.com/ivaanrl/algorithmVisualizer"
            liveSite="https://ivaanrl.github.io/algorithmVisualizer/sortingVisualizer"
            picture={AlgorithmsImg}
            technologies={algorithmTechnologies}
          ></Project>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInY" animateOnce>
          <Project
            title="Pathfinding Visualizer"
            description={pathfindingDescription}
            github="https://github.com/ivaanrl/pathfindingVisualizer"
            liveSite="https://ivaanrl.github.io/pathfindingVisualizer/"
            picture={PathfindingImg}
            technologies={pathfindignTechnologies}
          ></Project>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" animateOnce>
          <Project
            title="Pomodoro Timer (TDD with Jest + Enzyme)"
            description={pomodoroDescription}
            github="https://github.com/ivaanrl/pomodoro"
            liveSite="https://ivaanrl.github.io/pomodoro/"
            picture={PomodoroImg}
            technologies={pomodoroTechnologies}
          ></Project>
        </ScrollAnimation>
      </div>
      <a href="https://github.com/ivaanrl" target="blank">
        <div className="github-button">Github profile</div>
      </a>
    </React.Fragment>
  );
};

export default Projects;
