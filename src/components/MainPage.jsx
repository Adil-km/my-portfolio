import '../App.css';
import { HeroSection } from './HeroSection.jsx';
import { AboutSection } from './AboutSection.jsx'
import { SkillSection } from './SkillSection.jsx';
import { ProjectSection } from './ProjectSection.jsx';
import {Footer} from './Footer.jsx';

export const MainPage = ()=>{
  
  const portfolioDescription = "Welcome to my portfolio website. Explore my web design and development projects by Adil.";

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