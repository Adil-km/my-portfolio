import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "../Button";

import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import Giscus from '@giscus/react';
import { NavBar } from '../NavBar';
import Loading from '../Loading';

export default function SingleBlog() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postId } =  useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/${postId}`);
        setData(response.data);
      } catch (err) {
        setError(err.response);
        console.log(err);
        
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
  
  return (
    <>
    <NavBar/>
    <div className="main">
    
    <section className="single-post-section">
        <div className="post-content-wrapper">
            
                <Button className="btn" text="Go back" link="/blog" />

            <article className="blog-article-body">
                

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
                      Published: {data?.createdAt?.split('T')[0]}
                    </p>

                    {data?.createdAt !== data?.updatedAt && (
                      <p className="date-info updated">
                        Updated: {data?.updatedAt?.split('T')[0]}
                      </p>
                    )}
                </div>

                <div className="post-text-content">
    
                        
                        {data.body &&
                          data.body.split('<br>').map((para, index) => (
                            <div key={index}>{parse(para)}</div>
                          ))}
     


                </div>
            </article>

            {/* Comment section */}
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
</div>

    </>
  );
}
