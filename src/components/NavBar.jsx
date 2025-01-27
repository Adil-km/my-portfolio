import {Button} from './Button.jsx';
import '../App.css';
import { useNavigate } from 'react-router-dom';


export const NavBar=()=>{
  const logoSrc = "/logo.svg";
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate('./Contact');  // Navigate to the Contact page
  };

  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
          <img src={logoSrc} className="NavBar-logo" alt="logo" onClick={()=>{window.location.href="#home"}}/>
           
          <div className="NavBar-items">
              <Button className="btn" text="About" link="#about"/>
              <Button className="btn" text="Skills" link="#skills"/>
              <Button className="btn" text="Projects" link="#projects"/>
              <Button className="btn" text="Contact" onClick={navigateToContact}/>
              <button className="btn" onClick={navigateToContact}>contact</button>
          </div>
      </div>
    </div>
    
    </>
    )
};