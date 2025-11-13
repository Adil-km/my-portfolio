import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "../Button";

import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import Giscus from '@giscus/react';

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
        console.log(error);
        
        setData({ title: 'Error', body: 'Error fetching data: '});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1 style={{color: "white", textAlign: "center",  marginTop:"50px" }}>Loading....</h1>;
  return (
    <>
    <div className="main">
    
    <section className="single-post-section">
        <div className="post-content-wrapper">
            
            <div className="post-metadata-header">
                <Button className="btn" text="Go back" link="/blog" />
                
                <div className="blog-post-dates">
                    <p className="date-info published">
                      Published: {data?.createdAt?.split('T')[0]}
                    </p>

                    {data?.createdAt !== data?.updatedAt && (
                      <p className="date-info updated">
                        Updated: {data?.updatedAt?.split('T')[0]}
                      </p>
                    )}
  
                </div>
            </div>

            <article className="blog-article-body">
                
                <h1 className="post-page-title">
                    {data.title}
                </h1>

                  {data?.coverImg &&
                    <figure className="post-featured-image">
                        <img src={data?.coverImg} alt="A detailed image related to AI and code generation" className="post-image"/>
                        <figcaption className="image-caption">
                            Image showcasing AI integration in modern web development tools.
                        </figcaption>
                    </figure>
                  }
                
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
