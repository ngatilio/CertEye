/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StateChecked = ({ color = "#FDA312", className }) => {
  return (
    <svg
      className={`state-checked ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 19 19"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.41667 18.3333H11.9167C16.5 18.3333 18.3333 16.5 18.3333 11.9167V6.41667C18.3333 1.83333 16.5 0 11.9167 0H6.41667C1.83333 0 0 1.83333 0 6.41667V11.9167C0 16.5 1.83333 18.3333 6.41667 18.3333Z"
        fill={color}
      />
      <path
        className="path"
        d="M5.271 9.16668L7.86516 11.7608L13.0627 6.57251"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

StateChecked.propTypes = {
  color: PropTypes.string,
};
