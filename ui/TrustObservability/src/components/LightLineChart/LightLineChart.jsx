/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LightLineChart = ({ className }) => {
  return (
    <div className={`light-line-chart ${className}`}>
      <div className="info">
        <div className="rectangle-5" />
        <div className="text-wrapper-2">30% over SLA</div>
      </div>
      <div className="chart">
        <div className="overlap">
          <div className="overlap-group-2">
            <div className="text-wrapper-3">150</div>
            <div className="text-wrapper-4">100</div>
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
            <div className="rectangle-13" />
            <div className="rectangle-14" />
            <div className="rectangle-15" />
            <div className="rectangle-16" />
            <div className="rectangle-17" />
            <img className="line" alt="Line" src="/img/line.svg" />
            <img className="bullet-2" alt="Bullet" src="/img/bullet-2.svg" />
            <img className="bullet-3" alt="Bullet" src="/img/bullet.svg" />
          </div>
          <div className="text-wrapper-5">0</div>
          <div className="text-wrapper-6">50</div>
        </div>
        <div className="text-wrapper-7">19:00</div>
        <div className="text-wrapper-8">12:00</div>
        <div className="text-wrapper-9">15:00</div>
      </div>
      <div className="text-wrapper-10">SLA Average</div>
    </div>
  );
};
