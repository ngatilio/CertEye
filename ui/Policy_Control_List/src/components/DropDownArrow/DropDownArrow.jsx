/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DropDownArrow = ({
  state,
  position,
  className,
  stateInactive = "/img/state-inactive-position-down.svg",
}) => {
  return (
    <img
      className={`drop-down-arrow ${position} ${className}`}
      alt="State active"
      src={
        state === "active" && position === "up"
          ? "/img/state-active-position-up.svg"
          : position === "up" && state === "inactive"
          ? "/img/state-inactive-position-up.svg"
          : state === "active" && position === "right"
          ? "/img/state-active-position-right.svg"
          : position === "down" && state === "inactive"
          ? stateInactive
          : position === "right" && state === "inactive"
          ? "/img/state-inactive-position-right.svg"
          : state === "active" && position === "left"
          ? "/img/state-active-position-left.svg"
          : position === "left" && state === "inactive"
          ? "/img/state-inactive-position-left.svg"
          : "/img/state-active-position-down.svg"
      }
    />
  );
};

DropDownArrow.propTypes = {
  state: PropTypes.oneOf(["inactive", "active"]),
  position: PropTypes.oneOf(["left", "up", "right", "down"]),
  stateInactive: PropTypes.string,
};
