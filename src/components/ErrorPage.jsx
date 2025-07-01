import { Button } from './Button.jsx';

import '../App.css';

export const ErrorPage= () =>{
  return (
    <>
    <div className="error-container">
      <p className="error-main">404</p>
      <p className="error-message">Oops, This Page Not Found!</p>
      <Button link='/' text="Go home"/>
    </div>

    </>
    );
}