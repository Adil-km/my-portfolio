import '../App.css'

export const Button = ({text},{glow=false}) =>{
  return (
  <>
  <button 
  className="btn" 

  style={{backgroundColor:glow ? 'white' : 'red'}}
  >{text}</button>
  </>);
}