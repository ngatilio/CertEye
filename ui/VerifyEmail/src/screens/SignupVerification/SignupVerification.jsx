import React from "react";
import { StateChecked } from "../../icons/StateChecked";
import "./style.css";

export const SignupVerification = () => {
  return (
    <div className="signup-verification">
      <div className="div">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
        <div className="frame">
          <div className="overlap-group">
            <div className="rectangle" />
          </div>
        </div>
        <div className="reset">
          <div className="heading">
            <div className="sign-in">Verify your email</div>
            <p className="enter-your-email-and">Have you already reset the password?</p>
            <div className="text-wrapper">Sign in</div>
          </div>
          <div className="new-password">
            <div className="enter-your-email-and-2">Email</div>
            <div className="mufaddal-rangwala-wrapper">
              <div className="mufaddal-rangwala">johndoe@gmail.com</div>
            </div>
          </div>
          <p className="use-or-more">
            <span className="span">I agree to the </span>
            <span className="text-wrapper-2">terms and condition</span>
            <span className="span"> and </span>
            <span className="text-wrapper-2">privacy policy</span>
          </p>
          <StateChecked className="checkbox" color="#222222" />
          <button className="button">
            <div className="login">Set Password</div>
          </button>
          <div className="new-password-2">
            <div className="enter-your-email-and-3">Enter OTP</div>
            <div className="mufaddal-rangwala-wrapper">
              <div className="mufaddal-rangwala-2">123456</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-3">ZeroTrust 360</div>
      </div>
    </div>
  );
};
