import {Button} from './Button.jsx';

import '../App.css';


export const NavBar=()=>{
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src="/src/assets/logo.svg" className="NavBar-logo" alt="logo"/>
           
          <div className="NavBar-items">
              <Button className="btn" text="Home" glow={true}/>
              <Button className="btn" text="About" glow={true}/>
              <Button className="btn" text="Skills" glow={true}/>
              <Button className="btn" text="Projects" glow={true}/>
              <Button className="btn" text="Contact" glow={true}/>
              
          </div>
      </div>
    </div>
    
    </>
    )
};