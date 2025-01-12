import '../App.css'

export const Button = ({text,glow=true}) =>{
  return (
  <>
  <button 
  //if doesn't want the glow effect 
  className={glow ? "btn-glow" : "btn"}>
  {text}
  </button>
  </>);
}