import { useEffect, useState } from 'react';
import { Button } from "../Button"
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import api from '../axiosConfig';

export default function EditBlog () {
  const navigate = useNavigate();


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const url = "/admin/edit"
  useEffect(() => {
    const fetchData = async ()=>{
      setLoading(true);
      try {
        const postId = window.location.href.split('edit/')[1];
        const response = await api.get(`${url}/${postId}`);
        // const response = await api.get(url)
        setTitle(response.data.title)
        setBody(response.data.body)
        setError(null)
      } catch (error) {
        
        console.log("Authentication Failed: ", error.response);
        setError("You must be logged in to view this page.")
        
      }finally{
        setLoading(false)
      }
    }
  
    fetchData()
  }, [])



  const editPost = async()=>{
      try {
        const url = '/admin/edit'
        const postId = window.location.href.split('edit/')[1];
        const response = await api.post(`${url}/${postId}`, {title:title, body:body})
        console.log(response);
        navigate('/admin/posts')
        
      } catch (error) {
        console.log("Login Error: ", error.response);
        navigate('/admin/auth'); 
      }
    }

  const handleSubmit = (e) => {
      e.preventDefault();
      editPost()
      
    };
    

  if (loading){
    return <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading....</h1>;
  }
  if (error){
    return <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Error: {error}</h1>;
  }

  return (
    <>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/admin/posts" />
        </div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="title" className="formInput" placeholder="Enter the title for the blog post" required value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea rows={4} name="body" className="formInput" placeholder="Enter your blog content" required value={body} onChange={(e)=>setBody(e.target.value)} />

          <div className="formBtnDiv">
            <input type="submit" className="btn-glow" value="Post blog" />
          </div>
        </form>
      </div>
    </>
  );
};
