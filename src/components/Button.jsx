import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export const Button = ({text, glow=true, link=null, onClick=null, target = "_self"}) =>{

  const location = useLocation();
  const classes = glow ? "btn-glow" : "btn";

  if (onClick) {
    return (
      <button 
        className={classes} 
        onClick={onClick} 
        disabled={link !== null && link !== ""}
      >
        {text}
      </button>
    );
  }

  // 2. Handle smooth scrolling behavior (only on the root path)
  if (location.pathname === '/' && link) {
    return (
      <button 
        className={classes} 
        onClick={() => window.open(link, target)} 
      >
        {text}
      </button>
    );
  }

  if (link) {
    return (
      <Link 
        to={link}
        className={classes} 
        target={target}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classes}>{text}</button>
  );
}