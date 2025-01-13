import '../App.css'

export const Button = ({text, glow=true, link}) =>{
  return (
  <>
  <button 
  //if doesn't want the glow effect 
  className={glow ? "btn-glow" : "btn"}
  onClick={()=> (link? (window.location.href= link): null)}>
  {text}
  </button>
  </>);
}