import { useEffect, useState } from 'react';
import { Footer } from '../Footer'
import { Button } from "../Button";
import {NavBar} from "../NavBar" 
import Loading from '../Loading';
import Markdown from 'react-markdown';
import ScrollToButton from '../ScrollToButton'
import api from '../../utils/axiosConfig';
import formatDate from '../../utils/formatDate';

export default function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isLocal = (import.meta.env.VITE_PROD === "local")
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
  
  
  if(loading && !isLocal){
    return <Loading/>
  }
  if (error && !isLocal){
    return <>
    <div className="error-container">
      <p className="error-main">Error : {error}</p>
      <Button link='/' text="Go home"/>
    </div>
    </>;
  }

  let blogPosts = data;
  if ((!blogPosts || !Array.isArray(blogPosts) || blogPosts.length === 0) && !isLocal){
    return <h1 style={{ color: "yellow", textAlign: "center", marginTop: "50px" }}>No blog posts found.</h1>;
  }
  
if(isLocal){

  blogPosts = [
    {
      _id:"this is a testing id",
      title:"This is a testing title",
      body:"This is the body or content of the data.",
      coverImg:"This would be a testing url for cover image",
      createdAt: "2025-11-15T05:20:53.463+00:00",
      updatedAt: "2025-11-15T05:48:33.513+00:00",
    }
  ]
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
            Published: {formatDate(blog?.createdAt?.split('T')[0])}
          </p>

          {formatDate(blog?.createdAt?.split('T')[0]) !== formatDate(blog?.updatedAt?.split('T')[0]) && (
            <p className="date-info updated">
              Updated: {formatDate(blog?.updatedAt?.split('T')[0])}
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
          <span className="blog-title" id="span">Code & Beyond✨</span>
          <div className="blog-container traditional-feed">

            {blogElements} 

          </div>
        </div>
      </section>
      <ScrollToButton/>
      <Footer/>
    </div>
  );
}