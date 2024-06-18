import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const NrsDatabaseAudit = () => {
  return (
    <div className="NRS-database-audit">
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
                <div className="beneficieries">Audit In-Progress</div>
                <div className="text-wrapper-9">Members</div>
                <div className="text-wrapper-9">Audit Review Committee</div>
              </div>
            </div>
          </div>
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-3700.svg" />
        </div>
        <div className="text-wrapper-10">NRS Database</div>
        <div className="text-wrapper-11">/</div>
        <div className="text-wrapper-12">Abyec technologies</div>
        <div className="overlap-3">
          <div className="JC">Global Audit Progress</div>
          <p className="UX-research-for">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla dui vitae lorem cursus, ac semper
            tortor semper. Quisque malesuada ipsum eget mauris eleifend eleifend. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Integer at arcu eget metus pellentesque convallis id
            non elit.
          </p>
          <div className="navbar-2">
            <div className="text-wrapper-13">Requested</div>
            <div className="text-wrapper-14">Initiated</div>
            <div className="text-wrapper-15">In-Progress</div>
            <div className="text-wrapper-16">Draft Report</div>
            <div className="text-wrapper-17">Review</div>
            <div className="text-wrapper-18">Completed</div>
            <img className="group-17" alt="Group" src="/img/group-1000001891.png" />
          </div>
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
