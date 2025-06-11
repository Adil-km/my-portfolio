import { project } from './data.jsx';

import { Button } from './Button.jsx';

import '../App.css';

export const FourthPage = () => {

  const projectList = project.slice().sort((a, b) => b.id - a.id).map(project =>

    
    <div className="card-items" key={project.id}>
      <div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.features.map((features,index) => (
            <li key={index}>{features}</li>
          ))}
        </ul>
        <div className="bubble-icons">
          {project.tech.map((tech, index) =>(
            <span key={index}>{tech}</span>
            ))}
        </div>

      </div>
        
      <div>
        <Button link={project.demo} text="view demo"/>
        <Button link={project.code} text="view code"/>
      </div>
    </div>

  );

  return (
    <>
      <div className="page-fourth" id="projects">
            <div className="page-fourth-content">
            <span id="span">My projects🚀</span>
              
              <div className="card-container" >
              {projectList}
              </div>
                
  
            </div>
          </div>
    </>

  )
}
