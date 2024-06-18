/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkbox = ({ color = "#222222", className }) => {
  return (
    <svg
      className={`checkbox ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.24967 19.1663H12.7497C17.333 19.1663 19.1663 17.333 19.1663 12.7497V7.24967C19.1663 2.66634 17.333 0.833008 12.7497 0.833008H7.24967C2.66634 0.833008 0.833008 2.66634 0.833008 7.24967V12.7497C0.833008 17.333 2.66634 19.1663 7.24967 19.1663Z"
        fill={color}
      />
      <path
        className="path"
        d="M6.10352 9.99944L8.69768 12.5936L13.8952 7.40527"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
};
