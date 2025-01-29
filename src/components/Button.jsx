import { Link } from 'react-router-dom';
import '../App.css'

export const Button = ({text, glow=true, link}) =>{

  
  return (
  <>
  <Link
    to={"#"}
  //if doesn't want the glow effect 
  className={glow ? "btn-glow" : "btn"}
  onClick={()=> (link? (window.location.href= link): null)}>
  {text}
  </Link>
  </>);
}