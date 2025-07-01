import '../App.css';
import { HeroSection } from './HeroSection.jsx';
import { AboutSection } from './AboutSection.jsx'
import { ThirdPage } from './ThirdPage.jsx';
import { FourthPage } from './FourthPage.jsx';
import {Footer} from './Footer.jsx';

export const MainPage = ()=>{
  
  return (
    <>
    <div className="main">
      <HeroSection/>
      <AboutSection/>
      <ThirdPage/>
      <FourthPage/>
      <Footer/>
    </div>
    </>
  );
  
}