import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { YamlFile } from "../../components/YamlFile";
import "./style.css";

export const EnforcementConfig = () => {
  return (
    <div className="enforcement-config">
      <div className="div-6">
        <div className="NRS-database-list">
          <img className="line-4" alt="Line" src="/img/line-378.svg" />
          <div className="add-a-new-company">ml-enforce-pipeline 01</div>
          <div className="group-19">
            <div className="group-20">
              <div className="add-a-new-company-2">Data Pre-Processing</div>
            </div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="group-21">
            <div className="text-wrapper-18">model.py</div>
            <img className="line-5" alt="Line" src="/img/line-376-2.svg" />
          </div>
          <div className="group-22">
            <div className="text-wrapper-18">train.py</div>
            <img className="line-5" alt="Line" src="/img/line-376-2.svg" />
          </div>
          <div className="group-23">
            <div className="text-wrapper-18">preproc.py</div>
            <img className="line-5" alt="Line" src="/img/line-376-2.svg" />
          </div>
          <div className="group-24">
            <div className="overlap-group-3">
              <div className="add-a-new-company-3">Training</div>
              <img className="line-6" alt="Line" src="/img/line-379.svg" />
            </div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="group-25">
            <div className="add-a-new-company-4">Monitoring</div>
            <img className="ic-sharp-add" alt="Ic sharp add" src="/img/ic-sharp-add.svg" />
          </div>
          <div className="overlap-2">
            <div className="add-a-new-company-5">config.yaml</div>
            <img className="line-7" alt="Line" src="/img/line-376-1.svg" />
          </div>
          <button className="add-new-button">
            <div className="content">
              <div className="start-and-end">SAVE</div>
            </div>
          </button>
          <div className="content-wrapper">
            <div className="content">
              <div className="start-and-end-2">Pull</div>
            </div>
          </div>
          <div className="add-new-button-2">
            <div className="content">
              <div className="start-and-end-2">Push</div>
            </div>
          </div>
          <YamlFile
            className="YAML-file-instance"
            text="&nbsp;&nbsp;AIEthicsEnforcerYaml"
            text1="fairness_enforcer"
            text2=" “fairness_enforcer.py”"
            text3="audit_enforcer"
          />
        </div>
        <div className="navbar">
          <div className="text-wrapper-19">Enforcement point</div>
          <div className="text-wrapper-20">AI Patching Pipeline</div>
          <div className="text-wrapper-21">/</div>
          <div className="text-wrapper-22">/</div>
          <div className="text-wrapper-23">ml-enforce-pipeline01</div>
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
          img="/img/iconsax-linear-arrowright2-5.svg"
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
