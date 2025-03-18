import { Button } from "./Button";
import '../App.css';

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

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
    
    const navigate = useNavigate();
    
    const formSubmit = (e) => {
      if(formData.name!==""||formData.email!==""){
      e.preventDefault();
      console.log(formData);
      setFormData({
        name : '',
        email : '',
        message : ''
      })
  
     navigate('/success');
      }
    };
  
  
    return (
      <>
      <div className="form-container">
        
        <div className="form-back-btn">
        <Button className="btn" text="Go back" link="/"/>
        </div>
        <h1>Contact me</h1>
        
        <form onSubmit={formSubmit}>
        
          <input onChange={formChange} value={formData.name} type="text" name="name" className="formInput"  placeholder="Enter your Name" required/>
          
          <input onChange={formChange} value={formData.email}  type="email" name="email" className="formInput"  placeholder="Enter your Email" required/>
          
          <textarea rows={1} onChange={formChange} value={formData.message} name="message" className="formInput" placeholder="Enter your Message" required/>
          
          <div className="formBtnDiv">
              <button type="submit" className="btn-glow" onClick={(e)=>{formSubmit(e)}}>Submit</button>
          </div>
          
         </form>
        </div>
      </>
    );
  }
  