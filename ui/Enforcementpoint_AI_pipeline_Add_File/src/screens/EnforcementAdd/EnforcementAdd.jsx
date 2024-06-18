import React from "react";
import { Python } from "../../components/Python";
import { TypeWideVersion } from "../../components/TypeWideVersion";
import "./style.css";

export const EnforcementAdd = () => {
  return (
    <div className="enforcement-add">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="group-2">
                <div className="add-a-new-company">Add File</div>
                <button className="button">
                  <div className="cancel-wrapper">
                    <div className="cancel">CANCEL</div>
                  </div>
                </button>
                <button className="button-2">
                  <div className="next-wrapper">
                    <div className="next">ADD</div>
                  </div>
                </button>
              </div>
              <img className="x" alt="X" src="/img/x-2.png" />
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-3">
              <div className="text-wrapper">Add file name</div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <img className="vector" alt="Vector" src="/img/vector.svg" />
                  <div className="blinkbee-2">model.py</div>
                </div>
              </div>
            </div>
          </div>
          <Python className="python-instance" />
          <TypeWideVersion className="type-wide-version" property1="python" />
        </div>
      </div>
    </div>
  );
};
