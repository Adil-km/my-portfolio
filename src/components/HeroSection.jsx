import { Button } from './Button.jsx';

import '../App.css';

export const HeroSection = () =>{
  const profileSrc= '/profile.png';
  const myLinkedin = "https://www.linkedin.com/in/adil-km"
  return (
    <>
      <div className="hero-section"  id='home'>
        <div className="hero-section-content">
          <div className="hero-section-text">
              <span>Hello, welcome</span>
              <span className="profile-name">I'm Adil</span>
              <span className="hero-section-discription">student at farook college</span>
              <span className='magnet button-wrapper'>
                <a className='hit-area' href={myLinkedin}></a>
                <Button link={myLinkedin} text="Let's connect"/>
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