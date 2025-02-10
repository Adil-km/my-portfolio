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
          <div className="page-third" id="skills">
            <div className="page-third-content">
            <span>My skills🎮</span>
              <div className="skill-container">
              {skillList}
                
              </div>
            </div>
          </div>
          <hr/>
        </>
    )
}