import { useCallback, useEffect, useState } from 'react';
import { Button } from "../Button"
import '../../App.css';

import api from '../axiosConfig'; 
import { useNavigate } from 'react-router-dom';

export default function AddBlog () {

  const url = "/admin/add"
  const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = useCallback(async () => {
    setLoading(true)
    try {
        await api.get(url);
    } catch (error) {
        console.log(error);
        navigate('/admin/auth'); 
    } setLoading(false)
  }, [navigate]);
  
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]); 

    const authFetch = async()=>{
      setIsSubmitting(true);
      try {
        const response = await api.post(url, {title:title, body:body})
        console.log(response);
        navigate('/admin/posts')
        
      } catch (error) {
        console.log("Login Error: ", error.response);
        navigate('/admin/auth'); 
      } finally {
          setIsSubmitting(false);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      authFetch()
    };
  if (loading){
    return <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading....</h1>;
  }

  return (
    <>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/" />
        </div>
        <h1>Add post</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="title" className="formInput" placeholder="Enter the title for the blog post" required value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea rows={4} name="body" className="formInput" placeholder="Enter your blog content" required value={body} onChange={(e)=>setBody(e.target.value)} />

          <div className="formBtnDiv">
            <input 
              type="submit" 
              className="btn-glow" 
              value={isSubmitting ? "Posting..." : "Post blog"} 
              disabled={isSubmitting} 
            />
          </div>
        </form>
      </div>
    </>
  );
};