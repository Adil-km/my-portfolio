import { Button } from "./Button";
import '../App.css';

import {useState} from 'react';

export const Contact= () =>{
    const [formData, setFormData] = useState({
      name : '',
      email : '',
      message : ''
    });
    const formChange = (e) => {
      const {name,value} =  e.target;
      setFormData({
        ...formData,
        [name]:value
      });
    }
    
    const formSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setFormData({
        name : '',
        email : '',
        message : ''
      })
    };
  
  
    return (
      <>
      <div className="form-container">
        <h1>Contact me</h1>
        
        <form onSubmit={formSubmit}>
        
          <input onChange={formChange} value={formData.name} type="text" name="name" className="formInput"  placeholder="Enter your Name" required/>
          
          <input onChange={formChange} value={formData.email}  type="email" name="email" className="formInput"  placeholder="Enter your Email" required/>
          
          <textarea onChange={formChange} value={formData.message} name="message" className="formInput" placeholder="Enter your Message" required/>
          
          <div className="formBtnDiv">
              <Button text="submit" type="submit"/>
          </div>
          
         </form>
        </div>
      </>
    );
  }
  