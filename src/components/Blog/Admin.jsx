import { useState } from 'react';
import { Button } from "../Button";
import { useNavigate } from 'react-router-dom';
import '../../App.css';

import api from '../axiosConfig'; 
import { NavBar } from '../NavBar';

export default function Admin () {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const url = "/admin/auth" 

    const authFetch = async()=>{
      try {
        
        const response = await api.post(url, {username:username, password:password})
        console.log(response.data);
        navigate('/admin/posts')
        
      } catch (error) {
        
        console.log("Login Error: ", error.response);
        navigate('/admin/auth'); 
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      authFetch()
    };

  return (
    <>
    <NavBar blogPage={true}/>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/" />
        </div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" name="username" className="formInput" placeholder="Enter the username" required value={username} onChange={(e)=>setUserName(e.target.value)} />
          <input type="password" name="password" className="formInput" placeholder="Enter the password" required value={password} onChange={(e)=>setPassword(e.target.value)} />

          <div className="formBtnDiv">
            <input type="submit" className="btn-glow" value="send" />
          </div>
        </form>
      </div>
    </>
  );
};