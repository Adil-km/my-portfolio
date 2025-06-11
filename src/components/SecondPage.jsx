import {about} from './data.jsx';
import React from 'react';
import DOMPurify from 'dompurify';
import '../App.css';

export const SecondPage = () =>{

  return (
    <>
    <div className='page-second' id='about'>
      <div className="page-second-content">
          <span className="about-title">{about.title}</span>
          
          <span className='paragraph ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about.description) }} />
          
      </div>
      </div>
      <hr/>
    </>
  )
}