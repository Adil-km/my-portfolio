import '../App.css';
import { HeroSection } from './HeroSection.jsx';
import { AboutSection } from './AboutSection.jsx'
import { SkillSection } from './SkillSection.jsx';
import { ProjectSection } from './ProjectSection.jsx';
import {Footer} from './Footer.jsx';

export const MainPage = ()=>{
  
  return (
    <>
    <div className="main">
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <Footer/>
    </div>
    </>
  );
  
}