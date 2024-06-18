/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NewPassword = ({ className }) => {
  return (
    <div className={`new-password ${className}`}>
      <div className="enter-your-email-and">New password</div>
      <div className="frame">
        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.svg" />
        <img className="img" alt="Img" src="/img/1.svg" />
      </div>
      <div className="rectangle" />
      <p className="use-or-more">Awesome! You have a new secure password</p>
    </div>
  );
};
