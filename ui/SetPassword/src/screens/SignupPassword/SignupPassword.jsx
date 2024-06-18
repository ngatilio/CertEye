import React from "react";
import "./style.css";

export const SignupPassword = () => {
  return (
    <div className="signup-password">
      <div className="div">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
        <div className="frame">
          <div className="overlap-group">
            <div className="rectangle" />
          </div>
        </div>
        <div className="reset">
          <div className="heading">
            <div className="sign-in">Set Password</div>
          </div>
          <div className="new-password">
            <div className="enter-your-email-and">New password</div>
            <div className="frame-2">
              <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash-1.svg" />
              <img className="img-2" alt="Img" src="/img/image.svg" />
            </div>
            <div className="rectangle-2" />
            <p className="use-or-more">Awesome! You have a new secure password</p>
          </div>
          <p className="p">
            <span className="text-wrapper">I agree to the </span>
            <span className="span">terms and condition</span>
            <span className="text-wrapper"> and </span>
            <span className="span">privacy policy</span>
          </p>
          <img className="checkbox" alt="Checkbox" src="/img/checkbox.svg" />
          <button className="button">
            <div className="login">Set password</div>
          </button>
        </div>
        <div className="text-wrapper-2">ZeroTrust 360</div>
      </div>
    </div>
  );
};
