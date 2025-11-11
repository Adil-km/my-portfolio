import { useEffect, useState } from 'react';
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
import '../App.css';

// 🔑 Import the pre-configured instance
import api from './axiosConfig'; 

export default function Admin () {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    // Use the path only, as the base URL is in axiosConfig
    const url = "/admin/auth" 

    const authFetch = async()=>{
      try {
        // Axios automatically uses the configured base URL (http://localhost:5001)
        const response = await api.post(url, {username:username, password:password})
        console.log(response.data);
        navigate('/admin/posts')
        
      } catch (error) {
        // Log the error response fully for debugging
        console.log("Login Error: ", error.response);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      authFetch()
    };

  return (
    <>
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