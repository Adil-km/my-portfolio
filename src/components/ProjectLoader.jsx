import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from './Button';
import Loading from './Loading';
import '../App.css';
import { useSearchParams } from "react-router-dom";

export default function ProjectLoader() {
    const [searchParams] = useSearchParams();
    const redirectLink = searchParams.get('redirect');
    
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${redirectLink}/ping.js`, {
                    withCredentials: false,
                });

        setData(response.data);
      } catch (err) {
        setError("Could not fetch project data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [])

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
  
    if(data){
        if(redirectLink){
            window.location.replace(redirectLink);
        }
    }
    return null
}
