import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const ThreatMitigation = () => {
  return (
    <div className="threat-mitigation">
      <div className="div-4">
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-4214.png" />
        <div className="navbar">
          <div className="text-wrapper-5">Incident monitoring</div>
          <div className="text-wrapper-6">AI EOAR</div>
          <div className="text-wrapper-7">/</div>
          <div className="text-wrapper-8">/</div>
          <div className="text-wrapper-9">AI Threat Mitigation Matrix</div>
        </div>
        <div className="frame-7">
          <div className="overlap-2">
            <div className="services-apps-wrapper">
              <div className="services-apps">
                services, apps,
                <br />
                containers,
                <br />
                OS, Vms
              </div>
            </div>
            <div className="databases-objects-wrapper">
              <div className="text-wrapper-10">
                databases, <br />
                objects, files,
                <br />
                blocks
              </div>
            </div>
            <div className="servers-racks-data-wrapper">
              <p className="servers-racks-data">
                servers, racks, <br />
                data centers, <br />
                clusters
              </p>
            </div>
            <div className="firewalls-routers-wrapper">
              <div className="firewalls-routers">
                firewalls,routers, gateways, load
                <br />
                balancers
              </div>
            </div>
            <div className="overlap-3">
              <div className="firewalls-routers-2">
                firewalls, routers,
                <br />
                gateways, load
                <br />
                balancers
              </div>
            </div>
            <div className="zero-trust-cloud-wrapper">
              <div className="text-wrapper-11">
                Zero Trust, <br />
                Cloud
                <br />
                Firewall, VPCs
              </div>
            </div>
            <div className="firewall-IPS-VPN-wrapper">
              <div className="firewall-IPS-VPN">
                Firewall, IPS, <br />
                VPN
              </div>
            </div>
            <div className="secure-boot-wrapper">
              <div className="secure-boot">
                Secure Boot
                <br />
                configuration
              </div>
            </div>
            <div className="overlap-4">
              <div className="text-wrapper-12">Encryption</div>
            </div>
            <div className="automatic-patching-wrapper">
              <div className="automatic-patching">
                Automatic
                <br />
                Patching
                <br />
                /Update
              </div>
            </div>
            <div className="overlap-5">
              <div className="rectangle-2" />
              <div className="encryption-signing">
                Encryption,
                <br />
                Signing, IAM
                <br />
                configuration
              </div>
            </div>
            <div className="ML-adversarial-wrapper">
              <div className="ML-adversarial">
                ML
                <br />
                Adversarial
                <br />
                defenses
              </div>
            </div>
            <div className="overlap-6">
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <div className="rectangle-8" />
              <div className="rectangle-9" />
              <div className="rectangle-10" />
              <div className="rectangle-11" />
              <div className="rectangle-12" />
              <div className="rectangle-13" />
              <div className="rectangle-14" />
              <div className="text-wrapper-13">Feature Engineering</div>
              <div className="EDR-antivirus-static">
                EDR, Antivirus,
                <br />
                Static/Dynamic
                <br />
                Analysis
              </div>
              <div className="vulnerability">
                Vulnerability
                <br />
                scanning
              </div>
              <div className="text-wrapper-14">EDR, Antivirus</div>
              <div className="vulnerability-2">
                Vulnerability
                <br />
                scanning
              </div>
              <div className="IDS-edrs-SIEM">
                IDS, EDRs,
                <br />
                SIEM
              </div>
              <div className="text-wrapper-15">CASB, SASE</div>
              <div className="ML-adversarial-2">
                ML
                <br />
                Adversarial
                <br />
                defenses
              </div>
              <div className="EDR-antivirus">
                EDR,
                <br />
                Antivirus,
                <br />
                Logging
              </div>
              <div className="auditing-logging">
                Auditing, <br />
                Logging
              </div>
              <div className="EDR-antivirus-2">
                EDR,
                <br />
                Antivirus,
                <br />
                Logging
              </div>
              <div className="auditing-logging-2">
                Auditing, <br />
                Logging
              </div>
              <div className="cloud-siems-cloud">
                Cloud SIEMs,
                <br />
                Cloud EDRs
              </div>
              <div className="rectangle-15" />
              <div className="rectangle-16" />
              <div className="text-wrapper-16">Detect</div>
            </div>
            <div className="application-wrapper">
              <div className="text-wrapper-10">
                Application
                <br />
                Isolation and
                <br />
                sandboxing
              </div>
            </div>
            <div className="executable-wrapper">
              <div className="text-wrapper-17">
                Executable
                <br />
                Denylisting
              </div>
            </div>
            <div className="process-termination-wrapper">
              <div className="process-termination">
                Process
                <br />
                Termination
              </div>
            </div>
            <div className="shutdown-system-wrapper">
              <div className="text-wrapper-18">
                Shutdown
                <br />
                System
              </div>
            </div>
            <div className="remove-infected-wrapper">
              <div className="remove-infected">
                Remove infected
                <br />
                databases/objects/files
              </div>
            </div>
            <div className="overlap-7">
              <p className="p">Reset or cleaning network configs, Shutdown Servers</p>
            </div>
            <div className="reset-or-cleaning-wrapper">
              <p className="reset-or-cleaning">
                Reset or cleaning <br />
                configurations, Shutdown VMs
              </p>
            </div>
            <div className="infected-data-wrapper">
              <div className="text-wrapper-19">
                Infected Data
                <br />
                Detection
              </div>
            </div>
            <div className="disable-or-remove-wrapper">
              <div className="disable-or-remove">
                Disable or
                <br />
                Remove
                <br />
                Program
              </div>
            </div>
            <div className="overlap-group-3">
              <div className="text-wrapper-18">
                Reset or <br />
                Cleaning
              </div>
            </div>
            <div className="data-denoising-wrapper">
              <div className="text-wrapper-19">
                Data
                <br />
                Denoising
              </div>
            </div>
            <div className="database-denylisting-wrapper">
              <div className="text-wrapper-17">
                Database
                <br />
                Denylisting
              </div>
            </div>
            <div className="IO-port-restriction-wrapper">
              <div className="IO-port-restriction">
                IO Port
                <br />
                Restriction
              </div>
            </div>
            <div className="out-in-boundtraffic-wrapper">
              <div className="text-wrapper-20">
                Out(In)
                <br />
                BoundTraffic
                <br />
                Filtering
              </div>
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-20">
                Out(In)
                <br />
                BoundTraffic
                <br />
                Filtering
              </div>
            </div>
            <div className="database-isolation-wrapper">
              <div className="text-wrapper-10">
                Database
                <br />
                Isolation and
                <br />
                sandboxing
              </div>
            </div>
            <div className="kernel-based-process-wrapper">
              <div className="kernel-based-process">
                Kernel-based <br />
                Process
                <br />
                Isolation
              </div>
            </div>
            <div className="DNS-denylisting-wrapper">
              <div className="text-wrapper-20">
                DNS Denylisting,
                <br />
                Encrypted
                <br />
                Tunnels
              </div>
            </div>
            <div className="overlap-9">
              <div className="text-wrapper-20">
                DNS Denylisting,
                <br />
                Encrypted
                <br />
                Tunnels, Bastion
              </div>
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-21">Data quarantine</div>
            </div>
            <div className="proper-IAM-wrapper">
              <div className="proper-IAM">
                Proper IAM
                <br />
                configuration
              </div>
            </div>
            <div className="overlap-11">
              <div className="proper-IAM">
                Proper IAM
                <br />
                configuration
              </div>
            </div>
            <div className="trusted-platform-wrapper">
              <div className="trusted-platform">
                Trusted
                <br />
                Platform
                <br />
                Module
              </div>
            </div>
            <div className="overlap-12">
              <div className="proper-IAM-2">
                Proper IAM
                <br />
                configuration
              </div>
            </div>
            <div className="overlap-13">
              <div className="proper-IAM">
                Proper IAM
                <br />
                configuration
              </div>
            </div>
            <div className="text-wrapper-22">Assets</div>
            <div className="text-wrapper-23">Data collection</div>
            <div className="keys-models-datasets-wrapper">
              <div className="text-wrapper-11">
                Keys, models,
                <br />
                datasets’ <br />
                code, libraries
              </div>
            </div>
            <div className="text-wrapper-24">Data Preprocessing</div>
            <div className="text-wrapper-25">Testing</div>
            <div className="text-wrapper-26">Inference</div>
            <div className="text-wrapper-27">Monitoring</div>
            <div className="overlap-14">
              <div className="text-wrapper-28">Harden</div>
            </div>
            <div className="overlap-15">
              <div className="text-wrapper-29">Isolate</div>
            </div>
            <div className="overlap-16">
              <div className="text-wrapper-30">Evict</div>
            </div>
          </div>
          <div className="overlap-17">
            <div className="text-wrapper-31">Cloud</div>
            <div className="text-wrapper-32">Network</div>
            <div className="text-wrapper-33">System</div>
            <div className="text-wrapper-34">Storage</div>
            <div className="text-wrapper-35">Software</div>
            <div className="text-wrapper-36">Data</div>
            <div className="rectangle-17" />
            <img className="line-4" alt="Line" src="/img/line-392.svg" />
            <img className="line-5" alt="Line" src="/img/line-392.svg" />
            <img className="line-6" alt="Line" src="/img/line-392.svg" />
            <img className="line-7" alt="Line" src="/img/line-392.svg" />
            <img className="line-8" alt="Line" src="/img/line-392.svg" />
          </div>
          <div className="add-a-new-company">AI Threat Mitigation Matrix</div>
        </div>
        <Menu
          className="menu-instance"
          customerClassName="design-component-instance-node"
          customerClassNameOverride="design-component-instance-node"
          divClassName="menu-2"
          divClassName1="menu-4"
          divClassName2="menu-4"
          divClassNameOverride="menu-3"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear10="/img/iconsax-linear-activity.svg"
          iconsaxLinear2="/img/iconsax-linear-arrowright2-4.svg"
          iconsaxLinear3="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear4="/img/iconsax-linear-arrowright2-3.svg"
          iconsaxLinear5="/img/iconsax-linear-arrowright2-2.svg"
          iconsaxLinear6="/img/iconsax-linear-building4.svg"
          iconsaxLinear7="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear8="/img/iconsax-linear-arrowright2-1.svg"
          iconsaxLinear9="/img/iconsax-linear-arrowright2.svg"
          img="/img/iconsax-linear-arrowright2-4.svg"
          property1="EOAR"
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
