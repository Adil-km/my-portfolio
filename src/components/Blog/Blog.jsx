import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "../Button";
import {NavBar} from "../NavBar" 

export default function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/');
        setData(response.data);
      } catch (err) {
        setError("Could not fetch blog data.");
        console.log(err.response);
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  
  if (loading){
    return <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading....</h1>;
  }
  if (error){
    return <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Error: {error}</h1>;
  }

  const blogPosts = data;
  if (!blogPosts || !Array.isArray(blogPosts) || blogPosts.length === 0) {
    return <h1 style={{ color: "yellow", textAlign: "center", marginTop: "50px" }}>No blog posts found.</h1>;
  }
  
  
  const blogElements = blogPosts.map((blog, index) => (
    
    <article className="blog-post-article" key={blog._id || index}>
      {blog?.coverImg &&
        <img src={blog?.coverImg} alt="A relevant image for the blog post" className="blog-post-img-full" />
      }
      
      <div className="blog-post-text-content-full">
        <h2 className="blog-post-main-title">{blog?.title}</h2>
        
        <p className="blog-post-excerpt-full">
          {blog?.body}
        </p>

      <div className="blog-post-footer">

        <div className="blog-post-dates">
          <p className="date-info published">
            Published: {blog?.createdAt?.split('T')[0]}
          </p>

          {blog?.createdAt !== blog?.updatedAt && (
            <p className="date-info updated">
              Updated: {blog?.updatedAt?.split('T')[0]}
            </p>
          )}
          
        </div>
          <Button link={`/blog/${blog?._id}`} text="Continue Reading &rarr;"/>
      </div>

      </div>
    </article>
  ));

  return (
    <div className="main">
      <NavBar/>
      <section className="blog-section">
        <div className="blog-section-content">
          <span className="blog-title" id="span">📝 Blogs</span>
          <div className="blog-container traditional-feed">

            {blogElements} 

          </div>
        </div>
      </section>
    </div>
  );
}