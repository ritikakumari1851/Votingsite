// Captcha.js
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="YOUR_RECAPTCHA_SITE_KEY"
      onChange={onChange}
    />
  );
};

export default Captcha;
