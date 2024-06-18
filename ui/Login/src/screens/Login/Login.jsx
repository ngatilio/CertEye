import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
        <div className="frame">
          <div className="text-wrapper">Sign In</div>
          <p className="enter-your-email-and">Please enter your details to sign in</p>
          <div className="enter-your-email-and-2">Email or Mobile number</div>
          <div className="enter-your-email-and-3">Password</div>
          <div className="overlap">
            <div className="mufaddal-rangwala">saranraj@ad.com</div>
          </div>
          <div className="overlap-group">
            <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash-1.svg" />
            <img className="img-2" alt="Img" src="/img/image.svg" />
          </div>
          <div className="text-wrapper-2">Forgot Password ?</div>
          <button className="button">
            <div className="text-wrapper-3">Sign In</div>
          </button>
          <div className="group">
            <div className="enter-your-email-and-4">Don’t have an account?</div>
            <div className="enter-your-email-and-5">Sign up</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
        </div>
        <div className="text-wrapper-4">ZeroTrust 360</div>
      </div>
    </div>
  );
};
