import React from "react";
import "./style.css";

export const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="div">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
        <div className="div-2">
          <div className="sign-in">Forgot Password</div>
          <p className="enter-your-email-and">Enter your email id or mobile number to reset password</p>
          <div className="name">
            <div className="text-wrapper">Email or Mobile number</div>
            <div className="overlap-group">
              <div className="mufaddal-rangwala">saranraj@ad.com</div>
            </div>
          </div>
          <button className="button">
            <div className="login">Cancel</div>
          </button>
          <button className="login-wrapper">
            <div className="login-2">Submit</div>
          </button>
        </div>
        <div className="frame">
          <div className="overlap">
            <div className="rectangle" />
          </div>
        </div>
        <div className="text-wrapper-2">ZeroTrust 360</div>
      </div>
    </div>
  );
};
