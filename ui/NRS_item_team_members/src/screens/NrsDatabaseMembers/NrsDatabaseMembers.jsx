import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const NrsDatabaseMembers = () => {
  return (
    <div className="NRS-database-members">
      <div className="div-4">
        <div className="overlap-2">
          <div className="group-16">
            <div className="overlap-group-3">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-1859.svg" />
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1871.svg" />
              <div className="max-smith">Abyec Technologies</div>
              <p className="individual-account">
                <span className="span">Country</span>
                <span className="text-wrapper-5"> : </span>
                <span className="text-wrapper-6">South Korea</span>
              </p>
              <p className="profile-created-on">
                <span className="span">Publication date</span>
                <span className="text-wrapper-7"> :</span>
                <span className="text-wrapper-8">&nbsp;</span>
                <span className="text-wrapper-6">01 June 2023</span>
              </p>
              <div className="navbar">
                <div className="text-wrapper-9">Overview</div>
                <div className="text-wrapper-9">Policies &amp; controls</div>
                <div className="text-wrapper-9">Audit In-Progress</div>
                <div className="vehicles">Members</div>
                <div className="text-wrapper-9">Audit Review Committee</div>
              </div>
            </div>
          </div>
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-3700.svg" />
        </div>
        <div className="text-wrapper-10">NRS Database</div>
        <div className="text-wrapper-11">/</div>
        <div className="text-wrapper-12">Abyec technologies</div>
        <div className="NRS-database-list">
          <div className="add-new-button">
            <div className="content">
              <img className="add-icon" alt="Add icon" src="/img/add-icon.svg" />
              <div className="start-and-end">Invite people</div>
            </div>
          </div>
          <div className="text-wrapper-13">People</div>
          <div className="group-17">
            <div className="group-18">
              <div className="text-wrapper-14">Saranraj C</div>
              <div className="saranraj-c">CEO at Nextbrain</div>
            </div>
            <img className="vector" alt="Vector" src="/img/vector.png" />
          </div>
          <div className="group-19">
            <div className="group-18">
              <div className="text-wrapper-14">Akshay Kumar</div>
              <div className="saranraj-c">CEO at Nextbrain</div>
            </div>
            <img className="vector" alt="Vector" src="/img/vector.png" />
          </div>
          <div className="group-20">
            <div className="group-21">
              <div className="text-wrapper-14">Muniraj Thammapan</div>
              <div className="saranraj-c">UI/UX Manager</div>
            </div>
            <img className="component" alt="Component" src="/img/component-45-536.png" />
          </div>
          <div className="group-22">
            <div className="group-23">
              <div className="text-wrapper-14">Jimin</div>
              <div className="saranraj-c">Technical incharge</div>
            </div>
            <img className="component" alt="Component" src="/img/component-45-536.png" />
          </div>
          <div className="group-24">
            <div className="group-25">
              <div className="saranraj-c-2">Sivakumar</div>
              <div className="saranraj-c-3">CTO</div>
            </div>
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-13.png" />
          </div>
          <div className="group-26">
            <div className="group-27">
              <div className="saranraj-c-2">Parker</div>
              <div className="saranraj-c-4">UI/UX Designer</div>
            </div>
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-13.png" />
          </div>
          <img className="path" alt="Path" src="/img/path-2176.svg" />
          <img className="path-2" alt="Path" src="/img/path-2176.svg" />
          <div className="text-wrapper-15">Nextbrain</div>
          <div className="nextbrain">Infosys</div>
        </div>
        <Menu
          AIPoliciesControlsClassName="menu-2"
          className="menu-instance"
          divClassName="menu-3"
          frame="/img/frame-128-9.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon-9.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2-9.svg"
          iconsaxLinear2="/img/iconsax-linear-profile2user-9.svg"
          iconsaxLinear3="/img/iconsax-linear-arrowright2-49.svg"
          iconsaxLinear4="/img/iconsax-linear-building4-9.svg"
          iconsaxLinear5="/img/iconsax-linear-documenttext1-9.svg"
          iconsaxLinear6="/img/iconsax-linear-activity-9.svg"
          img="/img/iconsax-linear-arrowright2-55.svg"
          property1="policy-and-control"
          rolesClassName="design-component-instance-node"
        />
        <Header
          className="header-instance"
          iconsaxLinear="/img/iconsax-linear-notification-1.svg"
          overlapClassName="header-2"
        />
      </div>
    </div>
  );
};
