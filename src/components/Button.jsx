import '../App.css'

export const Button = ({text,glow=false}) =>{
  return (
  <>
  <button 
  className="btn" 
  style={glow ? {backgroundColor:'white'}: undefined} >
  {text}
  </button>
  </>);
}