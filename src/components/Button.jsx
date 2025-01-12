import '../App.css'

export const Button = ({text,glow=true}) =>{
  return (
  <>
  <button 
  className={glow ? "btn" : "btn-glow"}>
  {text}
  </button>
  </>);
}