import { useEffect, useState } from 'react';
import axios from 'axios';
import imgUrl from '/stock_image.jpg'
import { Button } from "../Button";

export default function SingleBlog() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postId = window.location.href.split('/')[4];
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
                        Published: {data.createdAt.split('T')[0]}
                    </p>
                    
                    <p className="date-info updated">
                        Updated: {data.updatedAt.split('T')[0]}
                    </p> 
                </div>
            </div>

            <article className="blog-article-body">
                
                <h1 className="post-page-title">
                    {data.title}
                </h1>

                <figure className="post-featured-image">
                    <img src={imgUrl} alt="A detailed image related to AI and code generation" className="post-image"/>
                    <figcaption className="image-caption">
                        Image showcasing AI integration in modern web development tools.
                    </figcaption>
                </figure>
                
                <div className="post-text-content">
    
                    <p>
                        {data.body}
                        </p>


                </div>
            </article>


        </div>
    </section>
</div>

    </>
  );
}
