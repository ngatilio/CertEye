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
          <button className="add-new-button">
            <div className="content">
              <img className="add-icon" alt="Add icon" src="/img/add-icon.svg" />
              <div className="start-and-end">Add</div>
            </div>
          </button>
          <div className="group-15">
            <div className="group-16">
              <div className="group-17">
                <div className="overlap-group-3">
                  <div className="text-wrapper-7">Action</div>
                  <img className="drop-down-arrow" alt="Drop down arrow" src="/img/drop-down-arrow.svg" />
                </div>
              </div>
            </div>
            <img className="teenyicons-tick" alt="Teenyicons tick" src="/img/teenyicons-tick-small-outline.svg" />
            <div className="JC">win-x64</div>
            <img className="image" alt="Image" src="/img/image-5.png" />
          </div>
          <img className="line-4" alt="Line" src="/img/line-4.svg" />
          <div className="JC-2">Name</div>
          <div className="JC-3">OS</div>
          <div className="JC-4">Key</div>
        </div>
        <div className="overlap-3">
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
