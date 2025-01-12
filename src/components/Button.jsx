import '../App.css'

export const Button = ({text,glow=false}) =>{
  return (
  <>
  <button 
  className={glow ? "btn-glow" : "btn"}>
  {text}
  </button>
  </>);
}