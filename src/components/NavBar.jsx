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
          </div>
      </div>
    </div>
    
    </>
    )
};