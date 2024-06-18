/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LightDoughnutChart = ({ className }) => {
  return (
    <div className={`light-doughnut-chart ${className}`}>
      <div className="doughnut">
        <div className="overlap-group">
          <img className="element" alt="Element" src="/img/01.svg" />
          <img className="img" alt="Element" src="/img/02.svg" />
          <img className="element-2" alt="Element" src="/img/03.svg" />
          <img className="element-3" alt="Element" src="/img/04.svg" />
        </div>
      </div>
      <div className="data">
        <div className="bullet">
          <div className="rectangle" />
        </div>
        <div className="txt">
          <div className="text-wrapper">Critical</div>
        </div>
      </div>
      <div className="div">
        <div className="bullet">
          <div className="rectangle-2" />
        </div>
        <div className="txt">
          <div className="text-wrapper">High</div>
        </div>
      </div>
      <div className="data-2">
        <div className="bullet">
          <div className="rectangle-3" />
        </div>
        <div className="txt">
          <div className="text-wrapper">Medium</div>
        </div>
      </div>
      <div className="data-3">
        <div className="bullet">
          <div className="rectangle-4" />
        </div>
        <div className="txt">
          <div className="text-wrapper">Low</div>
        </div>
      </div>
      <div className="card-title">AI audit traces</div>
    </div>
  );
};
