import { useState } from 'react';
import { Button } from "../Button"

import '../../App.css';

export default function AddBlog () {
  
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
            'http://127.0.0.1:5001/admin/add',
            {
                method:'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({title:title,body:body})
            }
        ).then(res=>res.json())
        .then(data=>{
             console.log("Blog added", data);
        }).catch(e=>{
            console.log(e.message);
            
        })
    
  };

  return (
    <>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/" />
        </div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="title" className="formInput" placeholder="Enter the title for the blog post" required value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea rows={1} name="body" className="formInput" placeholder="Enter your blog content" required value={body} onChange={(e)=>setBody(e.target.value)} />

          <div className="formBtnDiv">
            <input type="submit" className="btn-glow" value="Post blog" />
          </div>
        </form>
      </div>
    </>
  );
};
