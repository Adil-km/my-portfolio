import {about} from './data.jsx';
import React from 'react';
import '../App.css';
export const SecondPage = () =>{

  return (
    <>
    <div className='page-second' id='about'>
      <div className="page-second-content">
          <span>{about.title}</span>
          
          <p>{about.description.split("<br>").map((line,index)=>(
          
           <React.Fragment key={index}>
            {line}<br/>
            </React.Fragment>
          )
            
          )}</p>
      </div>
      </div>
      <hr/>
    </>
  )
}