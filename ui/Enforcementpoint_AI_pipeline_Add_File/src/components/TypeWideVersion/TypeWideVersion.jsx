/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CheckboxField } from "../../icons/CheckboxField";
import "./style.css";

export const TypeWideVersion = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-1000001909",
  });

  return (
    <div
      className={`type-wide-version property-1-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="div">
        <div className="name-of-the-company">Select the type</div>
        <div className="overlap-group">
          <img
            className="rectangle"
            alt="Rectangle"
            src={
              state.property1 === "expanded-form"
                ? "/img/rectangle-2-2.png"
                : state.property1 === "YAML"
                ? "/img/keyboard-arrow-down-5.svg"
                : "/img/keyboard-arrow-down-2.svg"
            }
          />
          {state.property1 === "expanded-form" && (
            <div className="rectangle-2">
              <img className="keyboard-arrow-down" alt="Keyboard arrow down" src="/img/keyboard-arrow-down-1.svg" />
              <div className="frame-wrapper">
                <div className="frame">
                  <div className="options">
                    <div
                      className="frame-2"
                      onClick={() => {
                        dispatch("click_65");
                      }}
                    >
                      <CheckboxField className="checkbox-field" />
                      <div className="location">YAML File</div>
                    </div>
                    <div
                      className="frame-3"
                      onClick={() => {
                        dispatch("click_68");
                      }}
                    >
                      <CheckboxField className="checkbox-field" />
                      <div className="location">Python File</div>
                    </div>
                    <div
                      className="frame-3"
                      onClick={() => {
                        dispatch("click_71");
                      }}
                    >
                      <CheckboxField className="checkbox-field" />
                      <div className="location">API</div>
                    </div>
                    <div
                      className="frame-3"
                      onClick={() => {
                        dispatch("click_74");
                      }}
                    >
                      <CheckboxField className="checkbox-field" />
                      <div className="location">Serverless function</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="blinkbee">
            {["expanded-form", "frame-1000001909"].includes(state.property1) && <>File Type</>}

            {state.property1 === "YAML" && <>YAML File</>}

            {state.property1 === "python" && <>Python File</>}

            {state.property1 === "API" && <>API</>}

            {state.property1 === "serverless" && <>Serverless Function</>}
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "expanded-form") {
    switch (action) {
      case "click_65":
        return {
          property1: "YAML",
        };

      case "click_68":
        return {
          property1: "python",
        };

      case "click_71":
        return {
          property1: "API",
        };

      case "click_74":
        return {
          property1: "serverless",
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        property1: "expanded-form",
      };
  }

  return state;
}

TypeWideVersion.propTypes = {
  property1: PropTypes.oneOf(["API", "python", "expanded-form", "YAML", "serverless", "frame-1000001909"]),
};
