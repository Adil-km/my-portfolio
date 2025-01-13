import {FirstPage} from './FirstPage.jsx';
import {SecondPage} from './SecondPage.jsx'
import '../App.css';

export const Main = ()=>{
  
  return (
    <>
    <div className="main">
      <FirstPage/>
      <SecondPage/>
    </div>
    </>
  );
}