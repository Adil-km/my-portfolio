import {skills} from './data.jsx';
import "../App.css";

export const SkillSection = () =>{
  const skillList = skills.map(skill=>
    <div className="card scrollAppear" key={skill.id}>
        <h3>{skill.skill }</h3>
        <p>{skill.level}</p>
      </div>
  );
    return (
        <>
          <div className="skill-section" id="skills">
            <div className="skill-section-content">
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