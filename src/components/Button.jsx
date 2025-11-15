import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export const Button = ({text, glow=true, link=null,icon=null, onMouseDown=null, onClick=null, target = "_self"}) =>{

  const location = useLocation();
  const classes = glow ? "btn-glow" : "btn";

  if (onClick) {
    return (
      <button 
        className={classes} 
        onClick={onClick}
        onMouseDown={onMouseDown}
        disabled={link !== null && link !== ""}
        target ={target}
      >
        {text}
        {icon}
      </button>
    );
  }

  // 2. Handle smooth scrolling behavior (only on the root path)
  if (location.pathname === '/' && link) {
    return (
      <button 
        className={classes} 
        onClick={() => window.open(link, target)} 
        onMouseDown={onMouseDown}
      >
        {text}
        {icon}
      </button>
    );
  }

  if (link) {
    return (
      <Link 
        to={link}
        className={classes} 
        target={target}
        >
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} onMouseDown={onMouseDown} target ={target}>
      {text}
        {icon}
    </button>
  );
}