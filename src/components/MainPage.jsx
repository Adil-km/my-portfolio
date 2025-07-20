import '../App.css';
import { HeroSection } from './HeroSection.jsx';
import { AboutSection } from './AboutSection.jsx'
import { SkillSection } from './SkillSection.jsx';
import { ProjectSection } from './ProjectSection.jsx';
import {Footer} from './Footer.jsx';
import { Helmet } from 'react-helmet';

export const MainPage = ()=>{
  
  return (
    <>
    {/* Meta tags */}
    <Helmet>
      <title>My Portfolio</title>
      <meta name="description" content="Welcome to my portfolio website. Explore my web design and development projects." />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="My Portfolio Website" />
      <meta property="og:description" content="Welcome to my portfolio website. Explore my web design and development projects." />
      <meta property="og:image" content="https://my-portfolio-gamma-nine-79.vercel.app/preview.jpg" />
      <meta property="og:url" content="https://my-portfolio-gamma-nine-79.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="Hi, I'm Adil" />
      <meta name="twitter:title" content="My Portfolio" />
      <meta name="twitter:description" content="Welcome to my portfolio. Explore my web design and development projects." />
      <meta name="twitter:image" content="https://my-portfolio-gamma-nine-79.vercel.app/preview.jpg" />
    </Helmet>

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