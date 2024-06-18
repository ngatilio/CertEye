import React from "react";
import { ApiOrServerless } from "../../components/ApiOrServerless";
import "./style.css";

export const AddEthicsOps = () => {
  return (
    <div className="add-ethics-ops">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="div">
              <div className="group-2">
                <div className="add-a-new-company">Add AI Pipeline</div>
                <div className="text-wrapper">Target repository</div>
                <div className="API-or-serverless-2">
                  <ApiOrServerless className="property-URL" property1="URL" />
                  <ApiOrServerless className="property-hook" property1="hook" />
                </div>
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
          <div className="frame">
            <div className="group-3">
              <p className="p">Select the AI pipeline steps</p>
              <div className="overlap-2">
                <div className="rectangle">
                  <div className="overlap-group-2">
                    <div className="tag">
                      <div className="frame-2">
                        <div className="start-and-end">Data Collection</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-closecircle.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-2">
                        <div className="start-and-end">Data Processing</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-closecircle.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img className="keyboard-arrow-down" alt="Keyboard arrow down" src="/img/keyboard-arrow-down.svg" />
              </div>
            </div>
            <div className="group-3">
              <div className="name-of-the-company-2">Select AI ethics policy</div>
              <div className="overlap-2">
                <div className="rectangle">
                  <div className="overlap-group-3">
                    <div className="tag">
                      <div className="frame-2">
                        <div className="start-and-end">Fairness Policy</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-closecircle.svg"
                        />
                      </div>
                    </div>
                    <div className="div-wrapper">
                      <div className="frame-2">
                        <div className="start-and-end">Security Policy</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-closecircle.svg"
                        />
                      </div>
                    </div>
                    <img className="vector" alt="Vector" src="/img/vector.svg" />
                  </div>
                </div>
                <img className="keyboard-arrow-down" alt="Keyboard arrow down" src="/img/keyboard-arrow-down.svg" />
              </div>
            </div>
            <div className="role">
              <div className="field">
                <div className="tag-2">
                  <div className="frame-2">
                    <div className="start-and-end-2">fairness</div>
                    <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-closecircle.svg" />
                  </div>
                </div>
                <div className="tag-3">
                  <div className="frame-2">
                    <div className="start-and-end-2">Transparency</div>
                    <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-closecircle.svg" />
                  </div>
                </div>
              </div>
              <div className="start-and-end-3">Tags</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
