import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export const Button = ({text, glow=true, link}) =>{

  const location = useLocation();

  return (
  <>

  //if current page is in home
  {(location.pathname === '/')?
  (
    
    //for smooth scrolling, I used button instead of Link
  <button className={glow ? "btn-glow" : "btn"} onClick={()=>{window.location.href=link}}>{text}</button>
  ):(
    <Link 
    to={link}
    //if doesn't want the glow effect 
    className={glow ? "btn-glow" : "btn"}>
    {text}
  </Link>
  )}

  </>);
}