import {Button} from './Button.jsx';
import '../App.css';


export const NavBar=()=>{
  const logoSrc = "/logo.svg";
 

  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src={logoSrc} className={'NavBar-logo'} alt="logo" onClick={()=>{window.location.href="#home"}}/>
           
          <div className="NavBar-items">
              <Button text="About" link="#about"/>
              <Button text="Skills" link="#skills"/>
              <Button text="Projects" link="#projects"/>
              <Button text="Contact" link="/contact"/>
          </div>
      </div>
    </div>
    
    </>
    )
};