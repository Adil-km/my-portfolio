import { Button } from './Button.jsx';

import '../App.css';

export const FirstPage = () =>{
  const profileSrc= '/profile.png';
  return (
    <>
      <div className="page-first">
        <div className="page-first-content">
          <div className="page-first-text">
              <span>Hello, welcome</span>
              <span className="profile-name">I'm Name</span>
              <span className="page-first-discription">student at farook college</span>
              <Button className="btn" text="Let's connect"/>
          </div>

          <img src={profileSrc} className="page-first-img" alt="profile pic"/>
        </div>
      </div>
            
      <div className="page-second">
          <span>About me</span>
          <p>Hi, I'm Adil, a BVoc Software Development student with a curious mind and a passion for web development 💻. I love learning new things 📚 and finding simple solutions to problems 🔍. My goal is to keep growing my skills and create useful tools with technology 🚀.</p>
      </div>
    </>
    );
}