import { Button } from "./Button"
import '../App.css'


export const Contact= () =>{
    const show = (event) =>{
      const formData = new FormData(event.target);

      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("tel");
      const message = formData.get("text");
      alert(name);
      }
  
    return (
      <>
      <div className="form-container">
        <h1>Contact me</h1>
        
        <form onSubmit={show}>
        
          <input type="text" name="name" placeholder="Enter your Name"/>
          <input type="email" name="email" placeholder="Enter your Email"/>
          <input type="text" name="message" placeholder="Enter your Message"/>
          <div class="formBtnDiv">
              <Button text="submit" type="submit"/>
          </div>
         </form>
        </div>
      </>
    );
  }
  