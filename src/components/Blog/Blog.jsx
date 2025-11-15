import { useEffect, useState } from 'react';
import { Button } from "../Button";
import {NavBar} from "../NavBar" 
import Loading from '../Loading';
import Markdown from 'react-markdown';
import ScrollToButton from '../ScrollToButton'
import api from '../axiosConfig';

export default function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/');
        setData(response.data);
      } catch (err) {
        setError("Could not fetch blog data.");
        console.error(err.response);
        
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  
  if(loading){
    return <Loading/>
  }
  if (error){
    return <>
    <div className="error-container">
      <p className="error-main">Error : {error}</p>
      <Button link='/' text="Go home"/>
    </div>
    </>;
  }

  const blogPosts = data;
  if (!blogPosts || !Array.isArray(blogPosts) || blogPosts.length === 0) {
    return <h1 style={{ color: "yellow", textAlign: "center", marginTop: "50px" }}>No blog posts found.</h1>;
  }
  
  
  const blogElements = blogPosts.map((blog, index) => (
    
    <article className="card-items" key={blog._id || index}>
      {blog?.coverImg &&
        <img src={blog?.coverImg} alt="A relevant image for the blog post" className="blog-post-img-full" />
      }
      
      <div className="blog-post-card">
        <h2 className="blog-post-main-title">{blog?.title}</h2>
        
        <div className="blog-post-excerpt-full">
          <Markdown>
            {blog?.body}
          </Markdown>
        </div>

      <div className="blog-post-footer">

        <div className="blog-post-dates">
          <p className="date-info published">
            Published: {blog?.createdAt?.split('T')[0]}
          </p>

          {blog?.createdAt.split('T')[0] !== blog?.updatedAt.split('T')[0] && (
            <p className="date-info updated">
              Updated: {blog?.updatedAt?.split('T')[0]}
            </p>
          )}
          
        </div>
          <Button link={`/blog/${blog?._id}`} text="Continue Reading" icon={<span></span>}/>
      </div>

      </div>
    </article>
  ));

  return (
    <div className="main">
      <NavBar/>
      <section className="blog-section">
        <div className="blog-section-content">
          <span className="blog-title" id="span">Blogs📝</span>
          <div className="blog-container traditional-feed">

            {blogElements} 

          </div>
        </div>
      </section>
      <ScrollToButton/>
    </div>
  );
}