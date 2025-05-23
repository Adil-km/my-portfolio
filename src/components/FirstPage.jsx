import { Button } from './Button.jsx';

import '../App.css';

export const FirstPage = () =>{
  const profileSrc= '/profile.png';
  return (
    <>
      <div className="page-first"  id='home'>
        <div className="page-first-content">
          <div className="page-first-text">
              <span>Hello, welcome</span>
              <span className="profile-name">I'm Adil</span>
              <span className="page-first-discription">student at farook college</span>
              <span className='magnet'>
                <Button link="https://www.linkedin.com/in/adil-km" text="Let's connect"/>
              </span>
          </div>

          <img src={profileSrc} className="page-first-img" alt="profile pic"/>
        </div>
      </div>
      <hr/>

    </>
    );
}