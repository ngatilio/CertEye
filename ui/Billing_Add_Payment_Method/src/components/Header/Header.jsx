/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({ className, iconsaxLinear = "/img/iconsax-linear-notification-1.svg", divClassName }) => {
  return (
    <div className={`header ${className}`}>
      <div className="overlap">
        <div className="frame-6">
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="iconsax-linear-19" alt="Iconsax linear" src={iconsaxLinear} />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className={`text-wrapper-4 ${divClassName}`}>5</div>
                </div>
              </div>
            </div>
          </div>
          <img className="bi-people" alt="Bi people" src="/img/bi-people-1.svg" />
          <div className="profile" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  iconsaxLinear: PropTypes.string,
};
