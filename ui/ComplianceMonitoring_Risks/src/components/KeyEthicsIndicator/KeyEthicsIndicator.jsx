/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const KeyEthicsIndicator = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`key-ethics-indicator ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-group">
        {state.property1 === "expanded" && (
          <div className="rectangle">
            <div className="vector">
              <img className="img" alt="Vector" src="/img/vector-7.svg" />
              <img className="vector" alt="Vector" src="/img/vector-5.svg" />
              <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-6.svg" />
            </div>
            <div className="overlap">
              <div className="options">
                <div
                  className="frame"
                  onClick={() => {
                    dispatch("click_925");
                  }}
                >
                  <div className="radio-button" />
                  <div className="location">Fairness</div>
                </div>
                <div
                  className="div"
                  onClick={() => {
                    dispatch("click_928");
                  }}
                >
                  <div className="radio-button" />
                  <div className="location">Performance</div>
                </div>
                <div
                  className="div"
                  onClick={() => {
                    dispatch("click_931");
                  }}
                >
                  <div className="radio-button" />
                  <div className="location">Security</div>
                </div>
                <div
                  className="div"
                  onClick={() => {
                    dispatch("click_934");
                  }}
                >
                  <div className="radio-button" />
                  <div className="location">Transparency</div>
                </div>
                <div
                  className="div"
                  onClick={() => {
                    dispatch("click_937");
                  }}
                >
                  <div className="radio-button" />
                  <div className="location">Sustainability</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="blinkbee">
          {["default", "expanded"].includes(state.property1) && <>Key Ethics Indicator</>}

          {state.property1 === "fairness" && <>Fairness</>}

          {state.property1 === "performance" && <>Performance</>}

          {state.property1 === "security" && <>Security</>}

          {state.property1 === "transparency" && <>Transparency</>}

          {state.property1 === "sustainability" && <>Sustainability</>}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "fairness") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "performance") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "security") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "transparency") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "sustainability") {
    switch (action) {
      case "click":
        return {
          property1: "expanded",
        };
    }
  }

  if (state.property1 === "expanded") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };

      case "click_925":
        return {
          property1: "fairness",
        };

      case "click_928":
        return {
          property1: "performance",
        };

      case "click_931":
        return {
          property1: "security",
        };

      case "click_934":
        return {
          property1: "transparency",
        };

      case "click_937":
        return {
          property1: "sustainability",
        };
    }
  }

  return state;
}

KeyEthicsIndicator.propTypes = {
  property1: PropTypes.oneOf([
    "security",
    "transparency",
    "sustainability",
    "default",
    "fairness",
    "expanded",
    "performance",
  ]),
};
