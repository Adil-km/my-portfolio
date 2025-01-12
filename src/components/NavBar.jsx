import {Button} from './Button.jsx';

import '../App.css';


export const NavBar=()=>{
  const logoSrc = "/logo.svg";
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src={logoSrc} className="NavBar-logo" alt="logo"/>
           
          <div className="NavBar-items">
              <Button className="btn" text="About"/>
              <Button className="btn" text="Skills"/>
              <Button className="btn" text="Projects"/>
              <Button className="btn" text="Contact"/>
          </div>
      </div>
    </div>
    
    </>
    )
};