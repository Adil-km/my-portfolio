import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export const Button = ({text, glow=true, link, target = "_self"}) =>{

  const location = useLocation();

  return (
  <>

  
  {(location.pathname === '/')?
  (
    
    //for smooth scrolling, I used button instead of Link
  <button className={glow ? "btn-glow" : "btn"} onClick={() => window.open(link, target)} >{text}</button>
  ):(
    <Link 
    to={link}
    //if doesn't want the glow effect 
    className={glow ? "btn-glow" : "btn"} target={target}>
    {text}
  </Link>
  )}

  </>);
}