import React from "react";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
        <div className="frame">
          <div className="overlap-group">
            <div className="rectangle" />
          </div>
        </div>
        <div className="overlap">
          <div className="frame-2">
            <div className="sign-in">Sign Up</div>
            <p className="enter-your-email-and">Please enter your details to sign up</p>
            <div className="group">
              <div className="text-wrapper">Full name</div>
              <div className="mufaddal-rangwala-wrapper">
                <div className="mufaddal-rangwala">John Doe</div>
              </div>
            </div>
            <div className="group-2">
              <div className="text-wrapper">Email or Mobile number</div>
              <div className="mufaddal-rangwala-wrapper">
                <div className="mufaddal-rangwala">johndoe@gmail.com</div>
              </div>
            </div>
            <div className="group-3">
              <div className="text-wrapper">Mobile number</div>
              <div className="mufaddal-rangwala-wrapper">
                <div className="mufaddal-rangwala">613-824-0353</div>
              </div>
            </div>
            <div className="group-4">
              <div className="text-wrapper">Company name</div>
              <div className="mufaddal-rangwala-wrapper">
                <div className="mufaddal-rangwala">NextBrain Technology</div>
              </div>
            </div>
            <div className="group-5">
              <div className="text-wrapper">Company headcount</div>
              <div className="mufaddal-rangwala-wrapper">
                <div className="mufaddal-rangwala">51-200</div>
              </div>
            </div>
            <button className="button">
              <div className="login">Sign Up</div>
            </button>
          </div>
          <div className="group-6">
            <p className="p">Already have a account ?</p>
            <div className="enter-your-email-and-2">Sign in</div>
          </div>
        </div>
      </div>
    </div>
  );
};
