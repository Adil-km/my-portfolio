import { Button } from "./Button";
import '../App.css';

import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



export const Contact= ()  => {
  
  const SERVICE_ID ='service_ey6de8j';
  const TEMPLATE_ID = 'template_pddexvl';
  const PUBLIC_KEY = 'plIlCCVIcBu9th20k';
  
  const form = useRef();
  const navigate = useNavigate();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        navigate('/success');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
      );
    };
    
    return (
      
      <>
            <div className="form-container">
        
        <div className="form-back-btn">
        <Button className="btn" text="Go back" link="/"/>
        </div>
        <h1>Contact me</h1>
        
        <form ref={form} onSubmit={sendEmail}>
        
          <input type="text" name="name" className="formInput"  placeholder="Enter your Name" required/>
          
          <input type="email" name="email" className="formInput"  placeholder="Enter your Email" required/>
          
          <textarea rows={1} name="message" className="formInput" placeholder="Enter your Message" required/>
          
          <div className="formBtnDiv">
              <input type="submit" className="btn-glow" value="send"/>
          </div>
          
         </form>
        </div>

        </>

);
};


// old code

// import {useState} from 'react';
// export const Contact= () =>{
  
  //     const [formData, setFormData] = useState({
    //       name : '',
    //       email : '',
    //       message : ''
    //     });
//     const formChange = (e) => {
//       const {name,value} =  e.target;
//       setFormData({
//         ...formData,
//         [name]:value
//       });
//     }
    
//     const navigate = useNavigate();
    
//     const formSubmit = (e) => {
//       if(formData.name!==""&&formData.email!==""){
//       e.preventDefault();
//       console.log(formData);
//       setFormData({
//         name : '',
//         email : '',
//         message : ''
//       })
  
//      navigate('/success');
//       }
//     };
  
  
//     return (
//       <>
//       <div className="form-container">
        
//         <div className="form-back-btn">
//         <Button className="btn" text="Go back" link="/"/>
//         </div>
//         <h1>Contact me</h1>
        
//         <form onSubmit={formSubmit}>
        
//           <input onChange={formChange} value={formData.name} type="text" name="name" className="formInput"  placeholder="Enter your Name" required/>
          
//           <input onChange={formChange} value={formData.email}  type="email" name="email" className="formInput"  placeholder="Enter your Email" required/>
          
//           <textarea rows={1} onChange={formChange} value={formData.message} name="message" className="formInput" placeholder="Enter your Message" required/>
          
//           <div className="formBtnDiv">
//               <button type="submit" className="btn-glow" onClick={(e)=>{formSubmit(e)}}>Submit</button>
//           </div>
          
//          </form>
//         </div>
//       </>
//     );
//   }
  