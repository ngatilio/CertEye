/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cxa = ({ className, text = "Enter URL", overlapGroupClassName, text1 = "www.textlink.com" }) => {
  return (
    <div className={`cxa ${className}`}>
      <div className="group">
        <div className="name-of-the-company">{text}</div>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className="blinkbee">{text1}</div>
        </div>
      </div>
    </div>
  );
};

Cxa.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
