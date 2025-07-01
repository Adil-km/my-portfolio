import '../App.css';
import { HeroSection } from './HeroSection.jsx';
import { SecondPage } from './SecondPage.jsx'
import { ThirdPage } from './ThirdPage.jsx';
import { FourthPage } from './FourthPage.jsx';
import {Footer} from './Footer.jsx';

export const MainPage = ()=>{
  
  return (
    <>
    <div className="main">
      <HeroSection/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <Footer/>
    </div>
    </>
  );
  
}