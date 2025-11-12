import {Button} from './Button.jsx';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import api from './axiosConfig.js';

export const NavBar=({children, blogPage = false})=>{
  const navigate = useNavigate()
  const logoSrc = "/logo.svg";
  
  const handleLogout = async () => {
      try {
          await api.get('/admin/logout'); 
          
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
        onClick={blogPage ? () => { window.location.href = "/" } : () => { window.location.href = "#home" }} 
      />
           
          <div className="NavBar-items">
            {children}
            {blogPage ? 
            <Button text="Logout" onClick={handleLogout}/> :  
            <>
              <Button text="About" link="#about"/>
              <Button text="Skills" link="#skills"/>
              <Button text="Projects" link="#projects"/>
              <Button text="Blog" link="/blog"/>
              <Button text="Contact" link="/contact"/>
            </>
          }
          </div>
      </div>
    </div>
    
    </>
    )
};