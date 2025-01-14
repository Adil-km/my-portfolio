import {skills} from './data.jsx';
import "../App.css";

export const ThirdPage = () =>{
  const skillList = skills.map(skill=>
    <div className="card" key={skill.id}>
        <h3>{skill.skill }</h3>
        <p>{skill.level}</p>
      </div>
  );
    return (
        <>
          <div className="page-third">
            <div className="page-third-content">
            <h2>My skills</h2>
              <div className="skill-container">
              {skillList}
                
              </div>
            </div>
          </div>
        </>
    )
}