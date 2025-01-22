import { Button } from "./Button"
import '../App.css'


export const Contact= () =>{
    const show = () =>{
      alert("hii");
    }
  
  
    return (
      <form >
        <label htmlFor="formName">Name</label>
        <input type="text" id="formName" />

        <button type="submit">submit</button>
      </form>
    );
  }
  