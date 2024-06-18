/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Comment = ({ property1, className, chirinjiviClassName, chirinjivi = "/img/chirinjivi.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "component-229",
  });

  return (
    <div
      className={`comment ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "component-229" && (
        <div className="group">
          <div className="component">
            <img className={`chirinjivi ${chirinjiviClassName}`} alt="Chirinjivi" src={chirinjivi} />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">Write a comment</div>
            </div>
          </div>
        </div>
      )}

      {state.property1 === "group-1000001884" && (
        <>
          <div className="div">
            <div className="overlap-group-2">
              <div className="overlap-group-2">
                <img className="line" alt="Line" src="/img/line-249.svg" />
                <img className="img" alt="Line" src="/img/line-252.svg" />
                <img className="line-2" alt="Line" src="/img/line-252.svg" />
                <img className="line-3" alt="Line" src="/img/line-252.svg" />
              </div>
              <img className="icon-feather-bold" alt="Icon feather bold" src="/img/icon-feather-bold.png" />
              <img className="icon-feather-italic" alt="Icon feather italic" src="/img/icon-feather-italic.png" />
              <img className="icon-feather" alt="Icon feather" src="/img/icon-feather-underline.png" />
              <img className="icon-material" alt="Icon material" src="/img/icon-material-strikethrough-s.svg" />
              <img className="icon-awesome-list-ul" alt="Icon awesome list ul" src="/img/icon-awesome-list-ul.svg" />
              <img className="icon-awesome-list-ol" alt="Icon awesome list ol" src="/img/icon-awesome-list-ol.svg" />
              <img className="icon-feather-image" alt="Icon feather image" src="/img/icon-feather-image.png" />
              <img className="icon-feather-link" alt="Icon feather link" src="/img/icon-feather-link-2.png" />
              <img className="icon-feather-code" alt="Icon feather code" src="/img/icon-feather-code.png" />
              <img className="double-quotes-r" alt="Double quotes r" src="/img/double-quotes-r.png" />
            </div>
            <div className="element-research-and">
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus mauris vel dapibus feugiat.
              </p>
              <p className="hi-everyone">
                <span className="span">Hi </span>
                <span className="text-wrapper-2">@Everyone</span>
                <span className="span">,</span>
              </p>
            </div>
            <div
              className="add-new-button"
              onClick={() => {
                dispatch("click_162");
              }}
            >
              <div className="content">
                <div className="start-and-end">Add Comment</div>
              </div>
            </div>
            <button
              className="content-wrapper"
              onClick={() => {
                dispatch("click_165");
              }}
            >
              <div className="content">
                <div className="start-and-end-2">Cancel</div>
              </div>
            </button>
          </div>
          <div className="group-2">
            <div className="text-wrapper-3">Attachments</div>
            <div className="overlap">
              <img className="group-3" alt="Group" src="/img/group-3105.png" />
            </div>
            <p className="text-wrapper-4">You can drag or drop</p>
          </div>
          <p className="attachments">Note: To notify others, use @name @everyone @team</p>
          <div className="component">
            <img className="chirinjivi-2" alt="Chirinjivi" src="/img/chirinjivi-2.png" />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "group-1000001884",
      };

    case "click_162":
      return {
        ...state,
        property1: "component-229",
      };

    case "click_165":
      return {
        ...state,
        property1: "component-229",
      };
  }

  return state;
}

Comment.propTypes = {
  property1: PropTypes.oneOf(["component-229", "group-1000001884"]),
  chirinjivi: PropTypes.string,
};
