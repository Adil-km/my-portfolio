import {project} from './data.jsx';

import { Button } from './Button.jsx';

import '../App.css';

export const FourthPage = ()=>{
  
  const projectList = project.map(project =>
  <div className="card-container" key={project.id}>
  <div className="card-items">
      <h3>{project.title}</h3>
      <p>{project.discription}</p>
      <ul>{project.features.map((features,index) => (
    <li key={index}>{features}</li>
         ))}
          </ul>
      <div className="bubble-icons">
        {project.tech.map((tech, index) =>(
          <span key={index}>{tech}</span>
          ))};
      <Button link="project.demo" text="view demo"/>
      <Button link="project.code" text="view code"/>
      
      </div>
      </div>
    </div>
);
  
  return (
    <>
    <h2>My projects</h2>
    {projectList}
    </>
    
    )
}