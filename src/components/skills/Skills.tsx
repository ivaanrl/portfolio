import React, { useEffect, useState } from 'react';
import './Skills.scss';

const Skills = () => {
  const [skillDescription, setSkillDescription] = useState();

  const [currentSelectedElement, setCurrentSelectedElement] = useState();

  useEffect(() => {
    setCurrentSelectedElement(document.getElementById('frontend'));

    changeSkillText('frontend');
  }, []);

  const selectSkill = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const selectedElement: HTMLElement = event.currentTarget;
    selectedElement.classList.add('skills-title-selected');
    currentSelectedElement?.classList.remove('skills-title-selected');
    setCurrentSelectedElement(selectedElement);
    changeSkillText(selectedElement.id);
  };

  const changeSkillText = (id: string) => {
    switch (id) {
      case 'frontend':
        setSkillDescription(
          <div className="skill-description-container">
            <div className="skill-description">
              <div className="skills-description-title">HTLM & CSS</div>
              <div className="description-item">HTML5, CSS3, Sass</div>
              <div className="description-item">Bootstrap 3 & 4</div>
              <div className="description-item">
                <span>Responsive Web Design</span>
              </div>
            </div>
            <div className="skill-description">
              <div className="skills-description-title">JAVASCRIPT</div>
              <div className="description-item">Javascript ES6+</div>
              <div className="description-item">
                <span>React.js & Redux</span>
              </div>
              <div className="description-item">
                <span>React Hooks</span>
              </div>
              <div className="description-item">
                <span>Angular 8</span>
              </div>
              <div className="description-item">API Integration</div>
            </div>
          </div>
        );
        break;
      case 'backend':
        setSkillDescription(
          <div className="skill-description-container">
            <div className="skill-description">
              <div className="skills-description-title">BACKEND</div>
              <div className="description-item">
                <span>Node.js & Express.js</span>
              </div>
              <div className="description-item">Basics of Ruby on rails</div>
              <div className="description-item">REST API Creation</div>
            </div>
            <div className="skill-description">
              <div className="skills-description-title">DATABASES</div>
              <div className="description-item">
                <span>PostgreSQL</span>
              </div>
              <div className="description-item">PgAdmin 4</div>
              <div className="description-item">Psql</div>
              <div className="description-item">MongoDB</div>
            </div>
          </div>
        );
        break;
      case 'tools':
        setSkillDescription(
          <div className="skill-description-container">
            <div className="skill-description">
              <div className="skills-description-title">TOOLS</div>
              <div className="description-item">
                <span>Typescript</span>
              </div>
              <div className="description-item">Git version control</div>
              <div className="description-item">Postman</div>
              <div className="description-item">Cloudinary</div>
              <div className="description-item">
                <span>Webpack</span>
              </div>
            </div>
            <div className="skill-description">
              <div className="skills-description-title">MORE TOOLS</div>
              <div className="description-item">Npm/Yarn</div>
              <div className="description-item">ESLint</div>
              <div className="description-item">VSCode</div>
              <div className="description-item">Github</div>
              <div className="description-item">
                <span>Heroku</span>
              </div>
            </div>
          </div>
        );
        break;
      case 'learning':
        setSkillDescription(
          <div className="skill-description-container">
            <div className="skill-description">
              <div className="skills-description-title">CURRENTLY LEARNING</div>
              <div className="description-item">
                Integrating Typescript with Node.js
              </div>
              <div className="description-item">Python/Django</div>
            </div>
            <div className="skill-description">
              <div className="skills-description-title">WANT TO LEARN</div>
              <div className="description-item">Elixir</div>
              <div className="description-item">Electron</div>
              <div className="description-item">Machine Learning</div>
              <div className="description-item">GraphQL</div>
            </div>
          </div>
        );
        break;
    }
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="skills-main-title">SKILLS</div>
      </div>
      <div className="skills-container">
        <div className="skills-title-container">
          <div
            className="skills-title skills-title-selected"
            id="frontend"
            onClick={selectSkill}
          >
            FrontEnd
          </div>
          <div className="skills-title" id="backend" onClick={selectSkill}>
            BackEnd
          </div>
          <div className="skills-title" id="tools" onClick={selectSkill}>
            Tools
          </div>
          <div className="skills-title" id="learning" onClick={selectSkill}>
            Learning
          </div>
        </div>
        {skillDescription}
      </div>
    </div>
  );
};

export default Skills;
