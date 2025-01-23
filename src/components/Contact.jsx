import { Button } from "./Button"
import '../App.css'


export const Contact= () =>{
    const show = (event) =>{
      const formData = new FormData(event.target);

      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("tel");
      const message = formData.get("text");

      }
  
    return (
      <>
      <div className="formDiv">
      <form onSubmit={show}>
        <input name="name" placeholder="Enter your Name" id="formName"/>
        <input name="email" placeholder="Enter your Email" id="formEmail"/>
        <input name="phone" type="tel" placeholder="Enter your Phone number" id="formPhone" />
        <input name="message" type="text" placeholder="Enter your message" id="formMessage"/>
        <Button type="submit" text="submit"/>
      </form>
      </div>
      </>
    );
  }
  