import { Button } from "./Button"
import '../App.css'


export const Contact= () =>{
    const show = (event) =>{
      const formData = new FormData(event.target);
      const q = formData.get("query");

      alert(q);
    }
  
  
    return (
      <form onSubmit={show}>
        <label htmlFor="formName">Name</label>
        <input name="query" id="formName" />

        <button type="submit">submit</button>
      </form>
    );
  }
  