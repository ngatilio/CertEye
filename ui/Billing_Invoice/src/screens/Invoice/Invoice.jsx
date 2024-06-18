import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const Invoice = () => {
  return (
    <div className="invoice">
      <div className="div-4">
        <div className="settings-3">
          <div className="text-wrapper-5">Billings</div>
          <div className="text-wrapper-6">Billing</div>
          <div className="invoices">Billing details</div>
          <div className="invoices-2">Invoice</div>
          <div className="overlap-group-3">
            <img className="path" alt="Path" src="/img/path-2379.svg" />
            <img className="line-4" alt="Line" src="/img/line-285.svg" />
          </div>
          <div className="text-wrapper-7">Invoice details</div>
          <div className="overlap-2">
            <div className="nextbrain">
              <div className="text-wrapper-8">Nextbrain Technologies Pvt Ltd</div>
              <p className="p">1801 Roosevelt street, San fransisco</p>
              <div className="text-wrapper-9">United Stated - 45426.</div>
            </div>
            <div className="VAT">VAT VGFH4544KMGG99</div>
            <img className="vector" alt="Vector" src="/img/vector.svg" />
          </div>
          <div className="overlap-3">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-3562.png" />
            <img className="clip-path-group" alt="Clip path group" src="/img/clip-path-group-3.png" />
            <img className="clip-path-group-2" alt="Clip path group" src="/img/clip-path-group-2.png" />
            <img className="clip-path-group-3" alt="Clip path group" src="/img/clip-path-group-1.png" />
            <img className="clip-path-group-4" alt="Clip path group" src="/img/clip-path-group.png" />
          </div>
          <div className="text-wrapper-10">Invoices</div>
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
