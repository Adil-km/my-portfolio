import { useEffect, useState } from 'react';
// 🔑 Import the pre-configured instance
import api from '../axiosConfig'; 
import { Button } from "../Button";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the path only
  const url = '/admin/posts'
  
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        // Axios automatically sends the cookie here!
        const response = await api.get(url)
        setData(response.data)
        setError(null)
      } catch (error) {
        // The 401 response should now be correctly caught here
        console.log("Authentication Failed: ", error.response);
        setError("You must be logged in to view this page.")
        // You might want to redirect to /admin here if the error is 401
      }finally{
        setLoading(false)
      }
    }
  
    fetchData()
  }, [])
  
  
  
  if (loading){
    return <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading....</h1>;
  }
  if (error){
    return <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Error: {error}</h1>;
  }

  const blogPosts = data.data; // Assumes your server response is { data: [posts] }
  if (!blogPosts || !Array.isArray(blogPosts) || blogPosts.length === 0) {
    return <h1 style={{ color: "yellow", textAlign: "center", marginTop: "50px" }}>No blog posts found.</h1>;
  }
  
  
  const blogElements = blogPosts.map((blog, index) => (
    
    <article className="blog-post-article" key={blog._id || index}> 
      <img src={blog.img} alt="A relevant image for the blog post" className="blog-post-img-full" />
      
      <div className="blog-post-text-content-full">
        <h2 className="blog-post-main-title">{blog.title}</h2>
        
        <div className="blog-post-dates metadata">
          <p className="published">
            Published: {blog.createdAt.split('T')[0]}
          </p>
          <p className="updated">
            Updated: {blog.updatedAt.split('T')[0]}
          </p>
        </div>
        
        <p className="blog-post-excerpt-full">
          {blog.body}
        </p>

        <Link to={`/blog/${blog._id}`}> 
          <p className="read-more-link btn-glow">Continue Reading &rarr;</p>
        </Link>
        <Link to={`/edit/${blog._id}`}> 
          <p className="read-more-link btn-glow">Edit Post &rarr;</p>
        </Link>
        <Link to={`/delete/${blog._id}`}> 
          <p className="read-more-link btn-glow">Delete Post &rarr;</p>
        </Link>
      </div>
    </article>
  ));

  return (
    <div className="main">
      <Button className="btn" text="Go back" link="/" />
      
      <section className="blog-section">
        <div className="blog-section-content">
          <span className="blog-title" id="span">📝 Latest Articles</span>
          <div className="blog-container traditional-feed">

            {blogElements} 

          </div>
        </div>
      </section>
    </div>
  );
}