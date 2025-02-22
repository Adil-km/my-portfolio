import { Button } from './Button.jsx';

import '../App.css';

export const FirstPage = () =>{
  const profileSrc= './profile.png';
  return (
    <>
      <div className="page-first"  id='home'>
        <div className="page-first-content">
          <div className="page-first-text">
		
              <span>test 1 Hello, welcome</span>
              <span className="profile-name">I'm Adil</span>
              <span className="page-first-discription">Student at Farook college</span>
              <Button className="btn" link="https://www.linkedin.com/in/adil-km" text="Let's connect"/>
          </div>

          <img src={profileSrc} className="page-first-img" alt="profile pic"/>
        </div>
      </div>
      <hr/>

    </>
    );
}
