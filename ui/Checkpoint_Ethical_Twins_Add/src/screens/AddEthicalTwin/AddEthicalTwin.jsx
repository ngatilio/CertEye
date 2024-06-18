import React from "react";
import { DropDownArrow21 } from "../../icons/DropDownArrow21";
import "./style.css";

export const AddEthicalTwin = () => {
  return (
    <div className="add-ethical-twin">
      <div className="div">
        <div className="group">
          <div className="name-of-the-company">NRS DB</div>
          <div className="overlap-group">
            <div className="blinkbee">Abyec Technologies</div>
            <img className="vector" alt="Vector" src="/img/vector-4.svg" />
          </div>
        </div>
        <div className="group-2">
          <p className="text-wrapper">Select the Machine Learning pipeline</p>
          <div className="overlap-group">
            <div className="blinkbee">Data Preprocessing</div>
            <img className="vector" alt="Vector" src="/img/vector-4.svg" />
          </div>
        </div>
        <div className="group-3">
          <p className="p">Select The Policies &amp; Control</p>
          <div className="overlap">
            <div className="text-wrapper-2">Audit Policy</div>
            <img className="img" alt="Vector" src="/img/vector-4.svg" />
          </div>
        </div>
        <div className="add-a-new-company">Add Ethical Twin Test</div>
        <div className="group-4">
          <div className="name-of-the-company">Enter Test Name</div>
          <div className="overlap-2">
            <div className="rectangle">
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
            </div>
            <div className="blinkbee">test-twin 01</div>
          </div>
        </div>
        <div className="group-5">
          <div className="name-of-the-company">Number of Replica</div>
          <div className="overlap-2">
            <div className="rectangle">
              <img className="vector-2" alt="Vector" src="/img/vector.svg" />
            </div>
            <div className="blinkbee">05</div>
          </div>
        </div>
        <button className="button">
          <div className="cancel-wrapper">
            <div className="cancel">CANCEL</div>
          </div>
        </button>
        <button className="overlap-wrapper">
          <div className="next-wrapper">
            <div className="next">SAVE</div>
          </div>
        </button>
        <div className="line-wrapper">
          <img className="line" alt="Line" src="/img/line-186.svg" />
        </div>
        <div className="text-wrapper-3">Select The Ethical Properties</div>
        <div className="text-wrapper-4">Data Attributes</div>
        <div className="group-6">
          <div className="overlap-3">
            <div className="field">
              <div className="tag">
                <div className="frame">
                  <div className="start-and-end">fairness</div>
                  <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-closecircle.svg" />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame">
                  <div className="start-and-end">Transparency</div>
                  <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-closecircle.svg" />
                </div>
              </div>
            </div>
            <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2.svg" />
          </div>
          <p className="start-and-end-2">
            <span className="span">Tags </span>
            <span className="text-wrapper-5">*</span>
          </p>
        </div>
        <div className="overlap-group-wrapper">
          <div className="div-wrapper">
            <div className="next-2">+ Add</div>
          </div>
        </div>
        <div className="group-7">
          <div className="overlap-4">
            <div className="text-wrapper-6">+</div>
          </div>
        </div>
        <div className="group-8">
          <div className="overlap-4">
            <div className="text-wrapper-6">+</div>
          </div>
        </div>
        <div className="group-9">
          <div className="overlap-4">
            <div className="text-wrapper-6">+</div>
          </div>
        </div>
        <div className="group-10">
          <div className="overlap-4">
            <div className="text-wrapper-6">+</div>
          </div>
        </div>
        <div className="model">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Select</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="model-attribute">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Loss</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-7">Model Attributes</div>
        <div className="model-2">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Select</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="model-3">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Learning Rate</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="data-attributes">
          <div className="frame-3">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Age</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow-21" />
            </div>
          </div>
        </div>
        <div className="data-attributes-2">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Select</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="data-attributes-3">
          <div className="frame-2">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Select</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow" />
            </div>
          </div>
        </div>
        <div className="data-attributes-4">
          <div className="frame-3">
            <div className="overlap-group-2">
              <div className="month">
                <div className="filter">Gender</div>
              </div>
              <DropDownArrow21 className="drop-down-arrow-21" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
