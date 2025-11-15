import {Button} from './Button.jsx';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import api from './axiosConfig.js';

export const NavBar=({children, isAdmin= false})=>{
  const navigate = useNavigate()
  const logoSrc = "/logo.svg";
  
  const handleLogout = async () => {  
      try {
          const response = await api.get('/admin/logout'); 
          console.log(response.data);
          
          navigate('/admin/auth'); 

      } catch (error) {
          console.error("Logout failed:", error);
          
          navigate('/admin/auth'); 
      }
  };
  return (
    <>
    <div className="NavBar">
      <div className="NavBar-content">
      <img src={logoSrc} className='NavBar-logo magnet' alt="logo" 
        onClick={() => { window.location.href = "/#home" }} 
      />
           
          <div className="NavBar-items">
            {children}
            <>
              <Button text="About" link="/#about"/>
              <Button text="Skills" link="/#skills"/>
              <Button text="Projects" link="/#projects"/>
              <Button text="Blog" link="/blog"/>
              <Button text="Contact" link="/contact"/>
            </>
            {isAdmin &&
            <Button text="Logout" onClick={handleLogout}/>}
          </div>
      </div>
    </div>
    
    </>
    )
};