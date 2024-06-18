import React from "react";
import { NewPassword } from "../../components/NewPassword";
import { Checkbox } from "../../icons/Checkbox";
import "./style.css";

export const ResetPassword = () => {
  return (
    <div className="reset-password">
      <div className="div">
        <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash-2.png" />
        <div className="reset">
          <div className="heading">
            <div className="sign-in">Reset Password</div>
            <p className="text-wrapper">Have you already reset the password?</p>
            <div className="enter-your-email-and-2">Sign in</div>
          </div>
          <NewPassword className="new-password-variant5" />
          <p className="p">
            <span className="span">I agree to the </span>
            <span className="text-wrapper-2">terms and condition</span>
            <span className="span"> and </span>
            <span className="text-wrapper-2">privacy policy</span>
          </p>
          <Checkbox className="state-checked" color="#222222" />
          <button className="button">
            <div className="login">Reset Password</div>
          </button>
          <div className="new-password-2">
            <div className="enter-your-email-and-3">Repeat password</div>
            <div className="img-wrapper">
              <img className="img-2" alt="Img" src="/img/1.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="text-wrapper-3">ZeroTrust 360</div>
      </div>
    </div>
  );
};
