import { project } from './data.jsx';

import { Button } from './Button.jsx';

import '../App.css';

export const ProjectSection = () => {

  const projectList = project.slice().sort((a, b) => b.id - a.id).map(project =>

    
    <div className="card-items scrollAppear" key={project.id}>
      <div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.features.map((features,index) => (
            <li key={index}>{features}</li>
          ))}
        </ul>
        <div className="bubble-icons">
          {project.tech.map((tech, index) =>(
            <span className={tech === "Hackathon" ? "special" : " "} key={index}>{tech}</span>
            ))}
        </div>

      </div>
        
      <div>
        {project.demo && <Button link={project.demo} text="View Demo" target='_blank'/>}
        {project.code && <Button link={project.code} text="View Code" target='_blank'/>}

      </div>
    </div>

  );

  return (
    <>
      <div className="project-section" id="projects">
            <div className="project-section-content">
            <span id="span">My projects🚀</span>
              
              <div className="card-container" >
              {projectList}
              </div>
                
  
            </div>
          </div>
    </>

  )
}
