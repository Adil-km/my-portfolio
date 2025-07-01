import { Button } from './Button.jsx';

import '../App.css';

export const SuccessPage= () =>{
  return (
    <>
    <div className="success-container">
      <p className="success-main">Thank you!</p>
      <p className="success-message">Your message has been submitted successfully.</p>
      <Button link='/contact' text="Go back"/>
    </div>
    </>
    );
}