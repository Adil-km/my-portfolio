import '../App.css'

export const Button = ({text, glow=true, link, type="button"}) =>{

  
  return (
  <>
  <button 
  type={type}
  //if doesn't want the glow effect 
  className={glow ? "btn-glow" : "btn"}
  onClick={()=> (link? (window.location.href= link): null)}>
  {text}
  </button>
  </>);
}