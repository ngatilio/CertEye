import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const VirtualEmulation = () => {
  return (
    <div className="virtual-emulation">
      <div className="div-5">
        <div className="text-wrapper-4">AI Checkpoint</div>
        <div className="text-wrapper-5">/</div>
        <div className="text-wrapper-6">Virtual Emulation</div>
        <div className="overlap-2">
          <button className="button">
            <div className="next-wrapper">
              <div className="next">EXECUTE</div>
            </div>
          </button>
          <button className="button-2">
            <div className="overlap-3">
              <div className="next-2">CANCEL</div>
            </div>
          </button>
          <div className="group-15">
            <div className="overlap-4">
              <div className="next-3">+ Add more</div>
            </div>
          </div>
          <div className="AI-pipeline">
            <div className="name-of-the-company">Select the ethical twins</div>
            <div className="overlap-5">
              <img className="keyboard-arrow-down" alt="Keyboard arrow down" src="/img/keyboard-arrow-down.svg" />
              <div className="blinkbee">test-twin 01</div>
            </div>
          </div>
          <div className="AI-pipeline-2">
            <div className="name-of-the-company">Select the OS</div>
            <div className="overlap-5">
              <img className="keyboard-arrow-down" alt="Keyboard arrow down" src="/img/keyboard-arrow-down.svg" />
              <div className="blinkbee">win-x64</div>
            </div>
          </div>
        </div>
        <div className="overlap-6">
          <div className="rectangle" />
          <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1871.svg" />
          <div className="overview">Virtual Machine (VM)</div>
          <div className="notification">Virtual Emulation (VE)</div>
        </div>
        <Menu
          className="menu-instance"
          divClassName="menu-2"
          divClassName1="menu-3"
          divClassNameOverride="menu-3"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear2="/img/iconsax-linear-arrowright2-4.svg"
          iconsaxLinear3="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear4="/img/iconsax-linear-arrowright2-7.svg"
          iconsaxLinear5="/img/iconsax-linear-building4.svg"
          iconsaxLinear6="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear7="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-arrowright2-7.svg"
          property1="checkpoint-2"
          settingsClassName="design-component-instance-node"
        />
        <Header
          className="header-instance"
          iconsaxLinear="/img/iconsax-linear-notification.svg"
          overlapClassName="header-2"
        />
      </div>
    </div>
  );
};
