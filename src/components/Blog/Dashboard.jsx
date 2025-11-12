import { useEffect, useState, useCallback } from 'react';
import api from '../axiosConfig'; 
import { Button } from "../Button";
import { Link, useNavigate } from 'react-router-dom';
import { NavBar } from '../NavBar';

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [deletingPostId, setDeletingPostId] = useState(null); 

  const url = '/admin/posts'
  
  const fetchData = useCallback(async ()=>{
    setLoading(true);
    try {
      const response = await api.get(url)
      setData(response.data)
      setError(null)
    } catch (error) {
      console.log("Authentication Failed: ", error.response);
      navigate('/admin/auth'); 
      setError("You must be logged in to view this page.")
    }finally{
      setLoading(false)
    }
  }, [url, navigate])

  useEffect(() => {
    fetchData()
  }, [fetchData]) 
  
  
  const deletePost = async (postId)=>{
    if (!window.confirm("Are you sure you want to permanently delete this post?")) {
        return;
    }
    
    setDeletingPostId(postId);

    try {
      const url = `/admin/delete/${postId}`;
      await api.delete(url);

      console.log(`Post ${postId} deleted successfully.`);
      setError(null);
      
      fetchData(); 

    } catch (error) {
      console.error("Deletion Failed: ", error.response);
      setError("Failed to delete post. Please check permissions.");
      
    } finally {
        setDeletingPostId(null); 
    }
  }


  
  if (loading){
    return <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading....</h1>;
  }
  if (error && !data){
    return <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Error: {error}</h1>;
  }

  const blogPosts = data && data.data ? data.data : [];
  if (blogPosts.length === 0) {
    return (
        <div className="main">
            <NavBar blogPage={true}>
                <Button className="btn" text="Add New Post" link="/admin/add" />
            </NavBar>
            <h1 style={{ color: "yellow", textAlign: "center", marginTop: "50px" }}>No blog posts found.</h1>
        </div>
    );
  }
  
  
  const blogElements = blogPosts.map((blog, index) => (
    
    <article className="blog-post-article" key={blog?._id || index}> 
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

          <div style={{ display: 'flex'}} >
              <Link style={{textDecoration: 'none'}} to={`/blog/${blog?._id}`}> 
                <p className="btn-glow">Continue Reading &rarr;</p>
              </Link>
              
              <Link style={{textDecoration: 'none'}} to={`/admin/edit/${blog?._id}`}> 
                <p className="btn-glow">Edit Post &rarr;</p>
              </Link>

              {deletingPostId !== blog?._id &&
                <Button text={deletingPostId === blog?._id ? "Deleting..." : "Delete Post"} onClick={() => deletePost(blog?._id)}/>
              }

          </div>
        </div>

      </div>
    </article>
  ));

  return (
    
    <div className="main">
      <NavBar blogPage={true}>
        <Button className="btn" text="Add New Post" link="/admin/add" />
      </NavBar>
  
      <section className="blog-section">
        <div className="blog-section-content">
          <span className="blog-title" id="span">📝 Admin Dashboard - Latest Articles</span>
          <div className="blog-container traditional-feed">

            {blogElements} 

          </div>
        </div>
      </section>
    </div>
  );
}