import '../App.css';
import { FirstPage } from './FirstPage.jsx';
import { SecondPage } from './SecondPage.jsx'
import { ThirdPage } from './ThirdPage.jsx';
import { FourthPage } from './FourthPage.jsx';
import {Footer} from './Footer.jsx';

export const MainPage = ()=>{
  
  return (
    <>
    <div className="main">
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <Footer/>
    </div>
    </>
  );
  
}