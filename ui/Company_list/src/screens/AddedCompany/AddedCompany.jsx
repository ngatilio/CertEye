import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const AddedCompany = () => {
  return (
    <div className="added-company">
      <div className="div-5">
        <div className="NRS-database-list">
          <div className="search">
            <div className="overlap-group-2">
              <input className="start-and-end" placeholder="Search" type="text" />
              <img className="search-2" alt="Search" src="/img/search.svg" />
              <div className="rectangle" />
            </div>
          </div>
          <div className="add-new-button">
            <div className="content">
              <img className="add-icon" alt="Add icon" src="/img/add-icon-1.svg" />
              <div className="start-and-end-2">Add Company</div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content">
              <img className="add-icon" alt="Add icon" src="/img/add-icon.svg" />
              <div className="start-and-end-3">Invite people</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <img className="path" alt="Path" src="/img/path-2175.svg" />
              <div className="text-wrapper-4">Nextbrain</div>
              <div className="text-wrapper-5">Saranraj C</div>
              <div className="text-wrapper-6">Owner</div>
              <div className="text-wrapper-7">saran@nextbraintech.com</div>
              <div className="text-wrapper-8">Muniraj Thammapan</div>
              <div className="text-wrapper-9">Member</div>
              <div className="text-wrapper-10">muniraj.t@nextbraintech.com</div>
              <div className="text-wrapper-11">Sivakumar</div>
              <div className="text-wrapper-12">Member</div>
              <div className="text-wrapper-13">sivakumar@nextbraintech.com</div>
              <img className="more-horizontal" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-2" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-3" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-4" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="component" alt="Component" src="/img/component-45-535-2.png" />
              <img className="component-2" alt="Component" src="/img/component-45-536-2.png" />
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-13-2.png" />
            </div>
          </div>
          <div className="group-18">
            <div className="overlap-2">
              <img className="path" alt="Path" src="/img/path-2175.svg" />
              <div className="text-wrapper-4">BlinkBee</div>
              <div className="text-wrapper-5">Akshay Kumar</div>
              <div className="text-wrapper-6">Owner</div>
              <div className="text-wrapper-7">akshaykumar@blinkbee.com</div>
              <div className="text-wrapper-8">Bhavana</div>
              <div className="text-wrapper-9">Member</div>
              <p className="text-wrapper-10">Invited by Akshay yesterday 7:00 PM, not logged in yet.</p>
              <div className="text-wrapper-11">Preethi</div>
              <div className="text-wrapper-12">Member</div>
              <div className="text-wrapper-13">preethi@blinkbee.com</div>
              <img className="more-horizontal" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-2" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-3" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-4" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="component-3" alt="Component" src="/img/component-45-535-1.png" />
              <img className="component-4" alt="Component" src="/img/component-45-536-1.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-13-1.png" />
            </div>
          </div>
          <div className="group-19">
            <div className="overlap-2">
              <img className="path" alt="Path" src="/img/path-2175.svg" />
              <div className="text-wrapper-4">PickUp</div>
              <div className="text-wrapper-5">Amrithesh R</div>
              <div className="text-wrapper-6">Owner</div>
              <div className="text-wrapper-7">amrithesh@pikkup.com</div>
              <div className="text-wrapper-8">Balamuthukumar</div>
              <div className="text-wrapper-9">Member</div>
              <div className="text-wrapper-10">balamuthukumar@pikkup.com</div>
              <div className="text-wrapper-11">Chandrashekhar</div>
              <div className="text-wrapper-12">Member</div>
              <div className="text-wrapper-13">chandrashekhar@pikkup.com</div>
              <img className="more-horizontal" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-2" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-3" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="more-horizontal-4" alt="More horizontal" src="/img/more-horizontal.png" />
              <img className="component-5" alt="Component" src="/img/component-45-535.png" />
              <img className="component-6" alt="Component" src="/img/component-45-536.png" />
              <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-13.png" />
            </div>
          </div>
          <div className="text-wrapper-14">People</div>
          <div className="toast-message">
            <div className="group-20">
              <div className="text-wrapper-15">New company added successfully!</div>
              <img className="icon-feather-check" alt="Icon feather check" src="/img/icon-feather-check-circle.png" />
            </div>
          </div>
        </div>
        <Header className="header-instance" iconsaxLinear="/img/iconsax-linear-notification.svg" />
        <Menu
          className="menu-instance"
          iconsaxLinear="/img/iconsax-linear-useroctagon-2.svg"
          iconsaxLinear1="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear2="/img/iconsax-linear-building4.svg"
          iconsaxLinear3="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear4="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-setting2.svg"
          property1="side-menu"
        />
      </div>
    </div>
  );
};
