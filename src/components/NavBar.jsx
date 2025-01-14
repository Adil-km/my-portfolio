import {Button} from './Button.jsx';

import '../App.css';


export const NavBar=()=>{
  const logoSrc = "/logo.svg";
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src={logoSrc} className="NavBar-logo" alt="logo" onClick={()=>{window.location.href="#home"}}/>
           
          <div className="NavBar-items">
              <Button className="btn" text="About" link="#about"/>
              <Button className="btn" text="Skills" link="#skills"/>
              <Button className="btn" text="Projects" link="projects"/>
              <Button className="btn" text="Contact"/>
          </div>
      </div>
    </div>
    
    </>
    )
};