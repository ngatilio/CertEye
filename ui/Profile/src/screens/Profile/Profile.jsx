import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="div-4">
        <div className="staff-list">
          <div className="address">
            <div className="role">
              <div className="field">
                <div className="overlap-group-3">
                  <div className="start-and-end">2432</div>
                  <div className="rectangle" />
                </div>
              </div>
              <div className="start-and-end-2">Address line 1</div>
            </div>
            <div className="role-2">
              <div className="field">
                <div className="overlap-group-3">
                  <div className="start-and-end">Chemin Hudson,</div>
                  <div className="rectangle" />
                </div>
              </div>
              <div className="start-and-end-2">Address line 2</div>
            </div>
            <div className="frame-7">
              <div className="field-2">
                <div className="overlap-group-3">
                  <div className="start-and-end">H4J 1M9</div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="start-and-end-2">Pincode</div>
            </div>
            <div className="frame-8">
              <div className="field-2">
                <div className="overlap-group-3">
                  <div className="start-and-end">Montreal</div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="start-and-end-2">City</div>
            </div>
            <div className="frame-9">
              <div className="field-2">
                <div className="overlap-group-3">
                  <div className="start-and-end">Quebec</div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="start-and-end-2">State</div>
            </div>
            <div className="frame-10">
              <div className="field-2">
                <div className="overlap-group-3">
                  <div className="start-and-end">Canada</div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="start-and-end-2">Country</div>
            </div>
            <div className="jib-details">Address</div>
          </div>
          <div className="image-uplaod">
            <div className="overlap-2">
              <div className="avatar-user" />
              <div className="edit-icon">
                <img className="edit" alt="Edit" src="/img/edit-2.svg" />
              </div>
              <div className="close-icon">
                <img className="close-icon-2" alt="Close icon" src="/img/close-icon.svg" />
              </div>
            </div>
            <p className="allowed-file-types">Allowed file types: png, jpg, jpeg</p>
          </div>
          <div className="text-wrapper-5">Edit Profile</div>
          <img className="line-4" alt="Line" src="/img/line-6.svg" />
          <div className="name">
            <div className="field-2">
              <div className="overlap-group-3">
                <div className="start-and-end-3">John doe</div>
                <div className="rectangle-2" />
              </div>
            </div>
            <p className="p">
              <span className="span">Name </span>
              <span className="text-wrapper-6">*</span>
            </p>
          </div>
          <div className="name-2">
            <div className="field-2">
              <div className="overlap-group-3">
                <div className="start-and-end-3">128642</div>
                <div className="rectangle-2" />
              </div>
            </div>
            <p className="p">
              <span className="span">ID </span>
              <span className="text-wrapper-6">*</span>
            </p>
          </div>
          <div className="email">
            <div className="field-2">
              <div className="overlap-group-3">
                <input className="input" id="input-1" placeholder="johndoe@gmail.com" type="email" />
                <div className="rectangle-2" />
              </div>
            </div>
            <label className="start-and-end-2" htmlFor="input-1">
              Email
            </label>
          </div>
          <div className="mobile">
            <div className="field-2">
              <div className="overlap-group-3">
                <div className="start-and-end">613-824-0353</div>
                <div className="rectangle-2" />
              </div>
            </div>
            <p className="p">
              <span className="span">Mobile </span>
              <span className="text-wrapper-6">*</span>
            </p>
          </div>
          <div className="password">
            <div className="field-2">
              <div className="overlap-group-3">
                <div className="start-and-end-4">**********</div>
                <img className="iconsax-linear-20" alt="Iconsax linear" src="/img/iconsax-linear-eyeslash.png" />
                <div className="rectangle-2" />
              </div>
            </div>
            <p className="p">
              <span className="span">Password </span>
              <span className="text-wrapper-6">*</span>
            </p>
          </div>
          <div className="DOB">
            <div className="field-2">
              <div className="overlap-group-3">
                <div className="start-and-end">11 July 1997</div>
                <div className="rectangle-2" />
                <img className="iconsax-linear-20" alt="Iconsax linear" src="/img/iconsax-linear-calendar2.svg" />
              </div>
            </div>
            <div className="start-and-end-2">Date of birth</div>
          </div>
          <div className="gender">
            <div className="field-2">
              <div className="overlap-group-3">
                <input className="start-and-end-5" id="input-2" placeholder="Assistant Manager" type="number" />
                <img className="iconsax-linear-21" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-7.svg" />
                <div className="rectangle-2" />
              </div>
            </div>
            <label className="start-and-end-2" htmlFor="input-2">
              Title at company name
            </label>
          </div>
          <button className="button">
            <div className="content">
              <div className="start-and-end-6">UPDATE</div>
            </div>
          </button>
          <button className="content-wrapper">
            <div className="content">
              <div className="start-and-end-7">CANCEL</div>
            </div>
          </button>
        </div>
        <Menu
          className="menu-instance"
          iconsaxLinear="/img/iconsax-linear-useroctagon-1.svg"
          iconsaxLinear1="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear2="/img/iconsax-linear-building4.svg"
          iconsaxLinear3="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear4="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-setting2.svg"
          property1="side-menu"
        />
        <Header className="header-instance" iconsaxLinear="/img/iconsax-linear-notification.svg" />
      </div>
    </div>
  );
};
