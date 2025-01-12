import {Button} from './Button.jsx';

import '../App.css';


export const NavBar=()=>{
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src="../assets/logo.svg" className="NavBar-logo" alt="logo"/>
           
          <div className="NavBar-items">
              <button className="btn" text="Home" />
          </div>
      </div>
    </div>
    
    </>
    )
};