/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DropDownArrow12 } from "../../icons/DropDownArrow12";
import { Button } from "../Button";
import { DropDownArrow } from "../DropDownArrow";
import "./style.css";

export const NrsDbFilter = ({
  stateProp,
  className,
  iconsaxLinearClassName,
  lineClassName,
  searchClassName,
  dropDownArrowStateActiveClassName,
  dropDownArrowStateActiveClassNameOverride,
  iconsaxLinearClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "inactive-filter",
  });

  return (
    <div
      className={`NRS-DB-filter ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`frame ${state.state}`}>
        <div className="filter-button">
          <div className="filter">
            <div className="content-2">
              <img
                className="img"
                alt="Filter"
                src={state.state === "active-state" ? "/img/filter-1.svg" : "/img/filter-2.svg"}
              />
              <div className="text-wrapper">Filters</div>
            </div>
          </div>
        </div>
        <div className="filter-options">
          <div className="frame-2">
            <div className="header-2">
              <div className="filter-2">
                {state.state === "active-state" && <>Filters</>}

                {state.state === "inactive-filter" && <>Filter</>}
              </div>
              <div className="filter-3">Clear all</div>
              <img
                className={`iconsax-linear ${state.state === "inactive-filter" ? iconsaxLinearClassName : undefined}`}
                alt="Iconsax linear"
                src={
                  state.state === "inactive-filter"
                    ? "/img/iconsax-linear-calendar2-2.png"
                    : "/img/iconsax-linear-closecircle-1.svg"
                }
              />
              <img
                className={`line ${state.state === "inactive-filter" ? lineClassName : undefined}`}
                alt="Line"
                src={state.state === "inactive-filter" ? "/img/iconsax-linear-calendar2-2.png" : "/img/line-3-1.svg"}
              />
            </div>
            <div className="search">
              {state.state === "inactive-filter" && (
                <div className="month-wrapper">
                  <div className="month">
                    <div className="filter-4">Search by role, operation</div>
                    <img
                      className={`search-2 ${searchClassName}`}
                      alt="Search"
                      src="/img/iconsax-linear-calendar2-2.png"
                    />
                  </div>
                </div>
              )}

              {state.state === "active-state" && (
                <>
                  <div className="div-2">
                    <div className="label">
                      <div className="location">Continent</div>
                    </div>
                    <div className="frame-3">
                      <div className="overlap-group">
                        <div className="filter-wrapper">
                          <div className="filter-5">Select continent</div>
                        </div>
                        <DropDownArrow12 className="drop-down-arrow-12" />
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="label">
                      <div className="location">Country</div>
                    </div>
                    <div className="frame-3">
                      <div className="overlap-group">
                        <div className="filter-wrapper">
                          <div className="filter-5">Select country</div>
                        </div>
                        <DropDownArrow12 className="drop-down-arrow-12" />
                      </div>
                    </div>
                  </div>
                  <div className="div-4">
                    <div className="label">
                      <div className="location">Status</div>
                    </div>
                    <div className="frame-3">
                      <div className="overlap-group">
                        <div className="filter-wrapper">
                          <div className="filter-5">Select Status</div>
                        </div>
                        <DropDownArrow12 className="drop-down-arrow-12" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <Button
                      className="instance-node"
                      height="forty"
                      onClick={() => {
                        dispatch("click_870");
                      }}
                      startAndEndClassName="button-instance"
                      state="filter-cancel"
                    />
                    <Button className="button-2" height="forty" startAndEndClassName="button-3" state="apply" />
                  </div>
                </>
              )}
            </div>
            {state.state === "inactive-filter" && (
              <div className="frame-5">
                <div className="div-2">
                  <div className="label">
                    <div className="location-2">Operation</div>
                  </div>
                  <div className="frame-3">
                    <div className="div-wrapper">
                      <div className="filter-6">Select the operation</div>
                    </div>
                    <DropDownArrow
                      className={dropDownArrowStateActiveClassName}
                      position="down"
                      state="inactive"
                      stateInactive="/img/iconsax-linear-calendar2-2.png"
                    />
                  </div>
                </div>
                <div className="div-3">
                  <div className="label">
                    <div className="location-2">Gender</div>
                  </div>
                  <div className="frame-3">
                    <div className="div-wrapper">
                      <div className="filter-6">Select the gender</div>
                    </div>
                    <DropDownArrow
                      className={dropDownArrowStateActiveClassNameOverride}
                      position="down"
                      state="inactive"
                      stateInactive="/img/iconsax-linear-calendar2-2.png"
                    />
                  </div>
                </div>
                <div className="div-4">
                  <div className="label">
                    <div className="location-2">Received date</div>
                  </div>
                  <div className="frame-3">
                    <div className="div-wrapper">
                      <div className="filter-6">Select the date</div>
                    </div>
                    <img
                      className={`iconsax-linear-2 ${iconsaxLinearClassNameOverride}`}
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-calendar2-2.png"
                    />
                  </div>
                </div>
                <div className="frame-4">
                  <Button className="button-4" height="forty" state="filter-cancel" />
                  <Button className="button-5" height="forty" state="apply" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "inactive-filter") {
    switch (action) {
      case "click":
        return {
          state: "active-state",
        };
    }
  }

  if (state.state === "active-state") {
    switch (action) {
      case "click":
        return {
          state: "inactive-filter",
        };
    }
  }

  switch (action) {
    case "click_870":
      return {
        ...state,
        state: "inactive-filter",
      };
  }

  return state;
}

NrsDbFilter.propTypes = {
  stateProp: PropTypes.oneOf(["inactive-filter", "active-state"]),
};
