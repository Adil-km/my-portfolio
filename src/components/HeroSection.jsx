import { Button } from './Button.jsx';

import '../App.css';
import myResumePDF from "/resource/ADIL-KM_Resume.pdf"

export const HeroSection = () =>{
  const profileSrc= '/profile.png';
  const myLinkedin = "https://www.linkedin.com/in/adil-km"
  return (
    <>
      <div className="hero-section"  id='home'>
        <div className="hero-section-content">
          <div className="hero-section-text">
              <span>Hello, welcome</span>
              <span className="profile-name">I&apos;m Adil</span>
              <span className="hero-section-description">Software Developer</span>
              <span className='button-wrapper'>

                <span className='button-wrapper resumeBtn'>
                  <Button link={myResumePDF} glow={false} text="Resume" target='_blank' />
                </span>
                
                <span className='magnet button-wrapper'>
                  <a className='hit-area' target='_blank' href={myLinkedin}></a>
                  <Button link={myLinkedin} text="Let's connect" target='_blank' />
                </span>
              
              </span>
          </div>

          <img src={profileSrc} 
          className="hero-section-img" 
          alt="profile pic"
          onContextMenu={(e) => e.preventDefault()} 
          draggable={false} 
          onDragStart={(e) => e.preventDefault()} />

        </div>
      </div>
      <hr/>

    </>
    );
}