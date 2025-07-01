import {about} from './data.jsx';
import React from 'react';
import DOMPurify from 'dompurify';
import '../App.css';

export const AboutSection = () =>{

  return (
    <>
    <div className='about-section' id='about'>
      <div className="about-section-content">
          <span className="about-title">{about.title}</span>
          
          <span className='paragraph ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about.description) }} />
          
      </div>
      </div>
      <hr/>
    </>
  )
}