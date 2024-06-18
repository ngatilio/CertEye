import React from "react";
import { AutopatchingEditor } from "../../components/AutopatchingEditor";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const Autopatching = () => {
  return (
    <div className="autopatching">
      <div className="div-6">
        <div className="navbar">
          <div className="text-wrapper-6">AI Enforcement Point</div>
          <div className="text-wrapper-7">AI Ethics Auto Patching</div>
          <div className="text-wrapper-8">/</div>
          <div className="text-wrapper-9">/</div>
          <div className="text-wrapper-10">patch-twin01</div>
        </div>
        <div className="NRS-database-list">
          <div className="add-a-new-company">patch-twin01</div>
          <button className="add-new-button">
            <div className="content">
              <div className="start-and-end">SAVE</div>
            </div>
          </button>
          <div className="content-wrapper">
            <div className="content">
              <div className="start-and-end">EXECUTE</div>
            </div>
          </div>
          <div className="add-new-button-2">
            <div className="content">
              <div className="start-and-end-2">Pull</div>
            </div>
          </div>
          <div className="add-new-button-3">
            <div className="content">
              <div className="start-and-end-2">Push</div>
            </div>
          </div>
          <div className="group-19">
            <div className="group-20">
              <div className="add-a-new-company-2">Data Collection</div>
            </div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="group-21">
            <div className="add-a-new-company-3">Data Processing</div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="group-22">
            <div className="add-a-new-company-3">Training</div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="add-a-new-company-4">patch_twin.yaml</div>
          <img className="line-4" alt="Line" src="/img/line-378.svg" />
          <AutopatchingEditor className="autopatching-editor-instance" />
        </div>
        <Menu
          className="menu-instance"
          divClassName="menu-2"
          divClassNameOverride="menu-3"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear10="/img/iconsax-linear-activity.svg"
          iconsaxLinear2="/img/iconsax-linear-arrowright2-4.svg"
          iconsaxLinear3="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear4="/img/iconsax-linear-arrowright2-3.svg"
          iconsaxLinear5="/img/iconsax-linear-arrowright2.svg"
          iconsaxLinear6="/img/iconsax-linear-arrowright2.svg"
          iconsaxLinear7="/img/iconsax-linear-building4.svg"
          iconsaxLinear8="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear9="/img/iconsax-linear-arrowright2.svg"
          img="/img/iconsax-linear-arrowright2.svg"
          property1="enforcement"
          rolesClassName="design-component-instance-node"
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
