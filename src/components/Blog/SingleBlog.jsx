import { useEffect, useState } from 'react';
import { Button } from "../Button";

import { useParams } from 'react-router-dom';
import api from '../../utils/axiosConfig'
import formatDate from '../../utils/formatDate';
import Markdown from 'react-markdown'
import Giscus from '@giscus/react';
import { NavBar } from '../NavBar';
import Loading from '../Loading';
import ScrollToButton from '../ScrollToButton';

export default function SingleBlog() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postId } =  useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/${postId}`);
          setData(response.data);
        
      } catch (err) {
        setError(err.response);
        console.error(err);
        
        setData({ title: 'Error', body: 'Error fetching data: '});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

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

  // target="_blank" for <a> tag when using MarkDown
  const components = {
    a: ({node, ...props}) => {
      const isExternal = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));
      return (
        <a
          {...props}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    }
  };
  
  return (
    <>
      <NavBar/>
      <div className="main">
      
      <section className="single-post-section">
        <div className="post-content-wrapper">
            

          <article className="blog-article-body">
          <Button className="btn" text="Go back" link="/blog" />

            {data?.coverImg &&
              <figure className="post-featured-image">
                  <img src={data?.coverImg} alt="A detailed image related to AI and code generation" className="post-image"/>
                  <figcaption className="image-caption">
                      Image showcasing AI integration in modern web development tools.
                  </figcaption>
              </figure>
            }
            
            <h1 className="post-page-title">
                {data.title}
            </h1>


            <div className="single-blog-post-dates">
              <p className="date-info published">
                Published: {formatDate(data?.createdAt?.split('T')[0])}
              </p>

              {formatDate(data?.createdAt.split('T')[0]) !== formatDate(data?.updatedAt.split('T')[0]) && (
                <p className="date-info updated">
                  Updated: {formatDate(data?.updatedAt?.split('T')[0])}
                </p>
              )}
            </div>

            <div className="post-text-content">
    
              {data.body &&
                  <Markdown components={components}>
                    {data.body}
                  </Markdown>
              }

            </div>
            <Button className="btn" text="Go back" link="/blog" />
          </article>

          {/* Comment section powered by Giscus */}
            <Giscus
            key={postId}
            repo="Adil-km/my-portfolio"
            repoId="R_kgDONoxWpA"
            category="Blog Comments"
            categoryId="DIC_kwDONoxWpM4CxwD5"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark"
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            />
        </div>
      </section>
      <ScrollToButton/>

    </div>
  </>
  );
}
