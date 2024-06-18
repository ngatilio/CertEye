import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { NrsDbFilter } from "../../components/NrsDbFilter";
import { DropDownArrow12 } from "../../icons/DropDownArrow12";
import "./style.css";

export const NrsDatabase = () => {
  return (
    <div className="NRS-database">
      <div className="div-8">
        <div className="NRS-database-list">
          <div className="search-3">
            <div className="overlap-group-3">
              <input className="input" placeholder="Search keywords" type="text" />
              <img className="search-4" alt="Search" src="/img/search-1.svg" />
              <div className="rectangle" />
            </div>
          </div>
          <div className="add-new-button">
            <div className="content-3">
              <img className="add-icon-2" alt="Add icon" src="/img/add-icon-1.svg" />
              <div className="start-and-end-2">Add NRS</div>
            </div>
          </div>
          <button className="content-wrapper">
            <div className="content-3">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="start-and-end-3">Export</div>
            </div>
          </button>
          <img className="line-5" alt="Line" src="/img/line-4.svg" />
          <div className="JC">Provider’s name</div>
          <div className="JC-2">Country</div>
          <div className="JC-3">Continent</div>
          <div className="JC-4">Domain</div>
          <div className="JC-5">Publication date</div>
          <div className="JC-6">Status</div>
          <div className="navbar">
            <div className="JC-7">Abyec Technologies</div>
            <div className="JC-8">Asia</div>
            <div className="JC-9">South Korea</div>
            <div className="JC-10">HealthCare Industry</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="navbar-2">
            <div className="JC-7">TechVista</div>
            <div className="JC-8">South America</div>
            <div className="JC-9">Brazil</div>
            <div className="JC-10">Information technology</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="navbar-3">
            <div className="JC-7">GlobalSoft</div>
            <div className="JC-8">Asia</div>
            <div className="JC-9">India</div>
            <div className="JC-10">Automotive</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="JC-7">AquaTech</div>
            <div className="JC-8">Oceania</div>
            <div className="JC-9">Australia</div>
            <div className="JC-10">Information technology</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="overlap-group-4">
                <div className="JC-13">In-Active</div>
              </div>
            </div>
          </div>
          <div className="element-2">
            <div className="JC-7">EuroLink</div>
            <div className="JC-8">North America</div>
            <div className="JC-9">Canada</div>
            <div className="JC-10">Information technology.ca</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="element-3">
            <div className="JC-7">EuroLink</div>
            <div className="JC-8">North America</div>
            <div className="JC-9">Canada</div>
            <div className="JC-10">Banking</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="element-4">
            <div className="JC-7">EuroLink</div>
            <div className="JC-8">North America</div>
            <div className="JC-9">Canada</div>
            <div className="JC-10">Automotive</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="element-5">
            <div className="JC-7">EuroLink</div>
            <div className="JC-8">North America</div>
            <div className="JC-9">Canada</div>
            <div className="JC-10">Information technology</div>
            <div className="JC-11">01 Jan 2023</div>
            <div className="group-17">
              <div className="JC-wrapper">
                <div className="JC-12">Active</div>
              </div>
            </div>
          </div>
          <div className="group-18">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-19">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-20">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-21">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-22">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-23">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-24">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <div className="group-25">
            <div className="overlap-3">
              <div className="text-wrapper-6">Action</div>
              <DropDownArrow12 className="drop-down-arrow-10" />
            </div>
          </div>
          <img className="line-6" alt="Line" src="/img/line-11.svg" />
          <img className="line-7" alt="Line" src="/img/line-11.svg" />
          <img className="line-8" alt="Line" src="/img/line-11.svg" />
          <img className="line-9" alt="Line" src="/img/line-11.svg" />
          <img className="line-10" alt="Line" src="/img/line-11.svg" />
          <img className="line-11" alt="Line" src="/img/line-11.svg" />
          <img className="line-12" alt="Line" src="/img/line-11.svg" />
          <NrsDbFilter
            className="NRS-DB-filter-instance"
            dropDownArrowStateActiveClassName="NRS-DB-filter-4"
            dropDownArrowStateActiveClassNameOverride="NRS-DB-filter-5"
            iconsaxLinearClassName="design-component-instance-node"
            iconsaxLinearClassNameOverride="NRS-DB-filter-6"
            lineClassName="NRS-DB-filter-2"
            searchClassName="NRS-DB-filter-3"
            stateProp="inactive-filter"
          />
          <div className="pagination">
            <div className="JC-14">1</div>
            <img className="iconsax-linear-23" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-6.svg" />
            <img className="iconsax-linear-24" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-5.svg" />
            <div className="JC-15">2</div>
            <div className="JC-16">3</div>
            <div className="JC-17">4</div>
          </div>
        </div>
        <Link className="AI-policies-controls-3" to="/nrs-database">
          AI Policies &amp; controls
        </Link>
        <div className="text-wrapper-7">/</div>
        <div className="text-wrapper-8">NRS Database</div>
        <div className="toast-message-wrapper">
          <div className="toast-message">
            <div className="group-26">
              <div className="new-company-added">NRS Database added successfully</div>
              <img className="icon-feather-check" alt="Icon feather check" src="/img/icon-feather-check-circle.png" />
            </div>
          </div>
        </div>
        <Menu
          AIPoliciesControlsClassName="menu-3"
          className="menu-instance"
          divClassName="menu-4"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear2="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear3="/img/iconsax-linear-arrowright2-8.svg"
          iconsaxLinear4="/img/iconsax-linear-building4.svg"
          iconsaxLinear5="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear6="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-arrowright2-4.svg"
          property1="policy-and-control"
          rolesClassName="menu-2"
        />
        <Header
          className="header-instance"
          iconsaxLinear="/img/iconsax-linear-notification.svg"
          overlapClassName="header-3"
        />
      </div>
    </div>
  );
};
