import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const NrsDatabaseView = () => {
  return (
    <div className="NRS-database-view">
      <div className="div-4">
        <div className="NRS-database-list">
          <div className="customer-code-name">
            <div className="text-wrapper-5">Provider’s name</div>
            <div className="text-wrapper-6">Continent</div>
            <div className="text-wrapper-7">Country</div>
            <div className="text-wrapper-8">Description</div>
            <p className="p">Ethical policy / control identifier</p>
            <div className="text-wrapper-9">Domain</div>
            <div className="text-wrapper-10">Publication date</div>
            <div className="text-wrapper-11">Reference Link</div>
            <div className="text-wrapper-12">Status</div>
          </div>
          <div className="element-max-smith">
            <div className="text-wrapper-13">Abyec Technologies</div>
            <div className="text-wrapper-14">Asia</div>
            <div className="text-wrapper-15">South Korea</div>
            <p className="text-wrapper-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla dui vitae lorem cursus, ac
              semper tortor semper. Quisque malesuada ipsum eget mauris eleifend eleifend. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Integer at arcu eget metus pellentesque
              convallis id non elit.
            </p>
            <p className="text-wrapper-17">Lorem ipsum is a dummy text holder</p>
            <div className="text-wrapper-18">Information technology</div>
            <div className="text-wrapper-19">01 June 2023</div>
            <div className="text-wrapper-20">www.textlink.com</div>
          </div>
          <div className="group-16">
            <div className="JC-wrapper">
              <div className="JC">Active</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="group-17">
            <div className="overlap-3">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-1859.svg" />
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-1871.svg" />
              <div className="max-smith">Abyec Technologies</div>
              <p className="individual-account">
                <span className="span">Country</span>
                <span className="text-wrapper-21"> : </span>
                <span className="text-wrapper-22">South Korea</span>
              </p>
              <p className="profile-created-on">
                <span className="span">Publication date</span>
                <span className="text-wrapper-23"> :</span>
                <span className="text-wrapper-24">&nbsp;</span>
                <span className="text-wrapper-22">01 June 2023</span>
              </p>
              <div className="navbar">
                <div className="text-wrapper-25">Overview</div>
                <div className="text-wrapper-26">Policies &amp; controls</div>
                <div className="text-wrapper-26">Audit In-Progress</div>
                <div className="text-wrapper-26">Members</div>
                <div className="text-wrapper-26">Audit Review Committee</div>
              </div>
            </div>
          </div>
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-3700.svg" />
        </div>
        <div className="text-wrapper-27">NRS Database</div>
        <div className="text-wrapper-28">/</div>
        <div className="text-wrapper-29">Abyec technologies</div>
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
