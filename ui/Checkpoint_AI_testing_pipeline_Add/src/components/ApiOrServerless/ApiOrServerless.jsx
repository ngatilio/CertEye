/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cxa } from "../Cxa";
import "./style.css";

export const ApiOrServerless = ({ property1, className }) => {
  return (
    <div className={`API-or-serverless ${className}`}>
      <Cxa
        className="instance-node"
        overlapGroupClassName="cxa-instance"
        text={property1 === "hook" ? "Enter DVC Endpoint" : "Enter Git Endpoint"}
        text1={property1 === "hook" ? "www.ac.com" : "www.textlink.com"}
      />
    </div>
  );
};

ApiOrServerless.propTypes = {
  property1: PropTypes.oneOf(["URL", "hook"]),
};
