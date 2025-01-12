import {Button} from './Button.jsx';

import '../App.css';


export const NavBar=({text})=>{
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src="/src/assets/logo.svg" className="NavBar-logo" alt="logo"/>
           
          <div className="NavBar-items">
              <Button className="btn" text="Home" />
              <Button className="btn" text="About" />
              <Button className="btn" text="Skills" />
              <Button className="btn" text="Projects" />
              <Button className="btn" text="Contact" />
              
          </div>
      </div>
    </div>
    
    </>
    )
};