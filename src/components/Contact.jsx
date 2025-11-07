import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from "./Button";

import '../App.css';

export const Contact = () => {
  const SERVICE_ID = 'service_ey6de8j';
  const TEMPLATE_ID = 'template_pddexvl';
  const PUBLIC_KEY = 'plIlCCVIcBu9th20k';
  const RECAPTCHA_SITE_KEY = '6LdwnQUsAAAAAOar-VJ20PeU40X6R9uM6b5jKOKQ';
  
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }

    if (isSending) return; // Prevent multiple clicks

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/" />
        </div>
        <h1>Contact me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="formInput" placeholder="Enter your Name" required />
          <input type="email" name="email" className="formInput" placeholder="Enter your Email" required />
          <textarea rows={1} name="message" className="formInput" placeholder="Enter your Message" required />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            className="recaptcha"
          />

          <div className="formBtnDiv">
            <input type="submit" className="btn-glow" value="send" />
          </div>
          
        </form>
      </div>
    </>
  );
};
