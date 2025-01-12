import '../App.css'

export const Button = ({text},{style}) =>{
  return (<>
  <button className={style}>{text}</button>
  </>);
}