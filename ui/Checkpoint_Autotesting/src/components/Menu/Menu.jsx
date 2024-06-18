/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Menu = ({
  property1,
  className,
  iconsaxLinear = "/img/iconsax-linear-useroctagon-2.svg",
  img = "/img/iconsax-linear-arrowright2-12.svg",
  settingsClassName,
  divClassName,
  iconsaxLinear1 = "/img/iconsax-linear-setting2-1.svg",
  iconsaxLinear2 = "/img/iconsax-linear-arrowright2-8.svg",
  iconsaxLinear3 = "/img/iconsax-linear-arrowright2-16.svg",
  divClassNameOverride,
  customerClassName,
  iconsaxLinear4 = "/img/iconsax-linear-profile2user-7.svg",
  iconsaxLinear5 = "/img/iconsax-linear-arrowright2-12.svg",
  frame = "/img/frame-128-1.svg",
  iconsaxLinear6 = "/img/iconsax-linear-arrowright2-9.svg",
  iconsaxLinear7 = "/img/iconsax-linear-building4-1.svg",
  iconsaxLinear8 = "/img/iconsax-linear-documenttext1-7.svg",
  iconsaxLinear9 = "/img/iconsax-linear-arrowright2-9.svg",
  iconsaxLinear10 = "/img/iconsax-linear-activity-7.svg",
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className={`logo-section ${property1}`}>
        {(property1 === "EOAR" ||
          property1 === "check-point" ||
          property1 === "checkpoint-2" ||
          property1 === "compliance-moitoring" ||
          property1 === "enforcement-2" ||
          property1 === "enforcement" ||
          property1 === "incident-monitoring-expand" ||
          property1 === "side-menu") && (
          <div className="logo-svg">
            <div className="text-wrapper">ZeroTrust 360</div>
          </div>
        )}

        {property1 === "policy-and-control" && (
          <>
            <img className="line" alt="Line" src="/img/line-376-8.svg" />
            <div className="menu-items">
              <div className="div">
                <div className="group">
                  <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-useroctagon-2.svg" />
                  <div className="AI-policies-controls">AI Policies &amp; Controls</div>
                </div>
                <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-12.svg" />
              </div>
              <div className="roles">
                <div className="div-wrapper">
                  <div className="div-2">NRS Database</div>
                </div>
              </div>
              <div className="roles">
                <div className="policies-controls-wrapper">
                  <div className="div-2">Policies &amp; controls</div>
                </div>
              </div>
              <div className="roles">
                <div className="group-2">
                  <div className="div-2">Estimated Readiness</div>
                </div>
              </div>
              <div className="settings">
                <div className="frame">
                  <div className="text-wrapper-2">Check Point</div>
                  <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-setting2-8.svg" />
                </div>
                <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
              </div>
              <div className="div">
                <img className="iconsax-linear-4" alt="Iconsax linear" src="/img/iconsax-linear-profile2user-7.svg" />
                <div className="group-3">
                  <div className="text-wrapper-3">Enforcement Point</div>
                  <img className="iconsax-linear-5" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-12.svg" />
                </div>
              </div>
              <div className="customer">
                <img className="frame-2" alt="Frame" src="/img/frame-128-1.svg" />
                <div className="group-4">
                  <div className="text-wrapper-3">Compliance Monitoring</div>
                  <img className="iconsax-linear-6" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
                </div>
              </div>
              <div className="customer-2">
                <div className="frame-3">
                  <div className="text-wrapper-2">Trust Observability</div>
                  <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-building4-1.svg" />
                </div>
              </div>
              <div className="customer-2">
                <div className="frame-3">
                  <div className="text-wrapper-2">Incident Monitoring</div>
                  <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-documenttext1-8.svg" />
                </div>
                <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
              </div>
              <div className="customer-2">
                <div className="frame-3">
                  <img className="iconsax-linear-7" alt="Iconsax linear" src="/img/iconsax-linear-activity-8.svg" />
                  <div className="text-wrapper-2">Activity Log</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={`menu-items-2 property-1-${property1}`}>
        {property1 === "side-menu" && (
          <>
            <div className="roles-2">
              <img className="iconsax-linear-8" alt="Iconsax linear" src="/img/iconsax-linear-useroctagon-2.svg" />
              <div className="AI-policies-controls-2">AI Policies &amp; Controls</div>
              <img className="img" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-12.svg" />
            </div>
            <div className="settings">
              <div className="frame">
                <div className="text-wrapper-2">Check Point</div>
                <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-setting2-8.svg" />
              </div>
              <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-12.svg" />
            </div>
            <div className="div">
              <img className="iconsax-linear-9" alt="Iconsax linear" src="/img/iconsax-linear-profile2user-9.svg" />
              <div className="group-3">
                <div className="text-wrapper-3">Enforcement Point</div>
                <img className="iconsax-linear-5" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-12.svg" />
              </div>
            </div>
            <div className="customer">
              <img className="frame-2" alt="Frame" src="/img/frame-128-1.svg" />
              <div className="group-4">
                <div className="text-wrapper-3">Compliance Monitoring</div>
                <img className="iconsax-linear-6" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
              </div>
            </div>
            <div className="customer-2">
              <div className="frame-3">
                <div className="text-wrapper-2">Trust Observability</div>
                <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-building4-1.svg" />
              </div>
            </div>
            <div className="customer-2">
              <div className="frame-3">
                <div className="text-wrapper-2">Incident Monitoring</div>
                <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-documenttext1-9.svg" />
              </div>
              <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
            </div>
            <div className="customer-2">
              <div className="frame-3">
                <img className="iconsax-linear-7" alt="Iconsax linear" src="/img/iconsax-linear-activity-9.svg" />
                <div className="text-wrapper-2">Activity Log</div>
              </div>
            </div>
          </>
        )}

        {property1 === "policy-and-control" && (
          <div className="logo-svg">
            <div className="text-wrapper">ZeroTrust 360</div>
          </div>
        )}

        {(property1 === "EOAR" ||
          property1 === "check-point" ||
          property1 === "checkpoint-2" ||
          property1 === "compliance-moitoring" ||
          property1 === "enforcement-2" ||
          property1 === "enforcement" ||
          property1 === "incident-monitoring-expand") && (
          <div className="menu-items">
            <div className="roles-2">
              <div className="group">
                <img
                  className="iconsax-linear"
                  alt="Iconsax linear"
                  src={
                    ["EOAR", "incident-monitoring-expand"].includes(property1)
                      ? "/img/iconsax-linear-useroctagon-1.svg"
                      : ["check-point", "enforcement"].includes(property1)
                      ? iconsaxLinear
                      : "/img/iconsax-linear-useroctagon-2.svg"
                  }
                />
                <div className="AI-policies-controls">AI Policies &amp; Controls</div>
              </div>
              <img
                className="img"
                alt="Iconsax linear"
                src={
                  ["check-point", "enforcement"].includes(property1) ? img : "/img/iconsax-linear-arrowright2-12.svg"
                }
              />
            </div>
            {["check-point", "enforcement"].includes(property1) && (
              <div className={`settings-2 ${settingsClassName}`}>
                <div className="frame">
                  <div className={`text-wrapper-2 ${divClassName}`}>Check Point</div>
                  <img className="iconsax-linear-2" alt="Iconsax linear" src={iconsaxLinear1} />
                </div>
                <img
                  className="img"
                  alt="Iconsax linear"
                  src={property1 === "enforcement" ? "/img/iconsax-linear-arrowright2-12.svg" : iconsaxLinear2}
                />
              </div>
            )}

            <div className="settings-3">
              {[
                "EOAR",
                "check-point",
                "checkpoint-2",
                "compliance-moitoring",
                "enforcement-2",
                "incident-monitoring-expand",
              ].includes(property1) && (
                <div className="group-5">
                  {property1 === "check-point" && <div className="div-2">AI Testing Pipeline</div>}

                  {[
                    "EOAR",
                    "checkpoint-2",
                    "compliance-moitoring",
                    "enforcement-2",
                    "incident-monitoring-expand",
                  ].includes(property1) && (
                    <>
                      <div className="text-wrapper-2">Check Point</div>
                      <img className="iconsax-linear-2" alt="Iconsax linear" src="/img/iconsax-linear-setting2-1.svg" />
                    </>
                  )}
                </div>
              )}

              {["EOAR", "checkpoint-2", "compliance-moitoring", "enforcement-2", "incident-monitoring-expand"].includes(
                property1
              ) && (
                <img
                  className="img"
                  alt="Iconsax linear"
                  src={
                    property1 === "checkpoint-2"
                      ? "/img/iconsax-linear-arrowright2-8.svg"
                      : "/img/iconsax-linear-arrowright2-12.svg"
                  }
                />
              )}

              {property1 === "enforcement" && (
                <>
                  <img
                    className="iconsax-linear-10"
                    alt="Iconsax linear"
                    src="/img/iconsax-linear-profile2user-1.svg"
                  />
                  <div className="group-3">
                    <div className="text-wrapper-3">Enforcement Point</div>
                    <img
                      className="iconsax-linear-5"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowright2-8.svg"
                    />
                  </div>
                </>
              )}
            </div>
            {["EOAR", "compliance-moitoring", "incident-monitoring-expand"].includes(property1) && (
              <>
                <div className="div">
                  <img
                    className="iconsax-linear-11"
                    alt="Iconsax linear"
                    src="/img/iconsax-linear-profile2user-1.svg"
                  />
                  <div className="group-3">
                    <div className="text-wrapper-3">Enforcement Point</div>
                    <img
                      className="iconsax-linear-5"
                      alt="Iconsax linear"
                      src={
                        property1 === "EOAR"
                          ? "/img/iconsax-linear-arrowright2-8.svg"
                          : "/img/iconsax-linear-arrowright2-12.svg"
                      }
                    />
                  </div>
                </div>
                <div className="customer-3">
                  <img className="frame-2" alt="Frame" src="/img/frame-128-1.svg" />
                  <div className="group-6">
                    <div className="text-wrapper-3">Compliance Monitoring</div>
                    <img
                      className="iconsax-linear-6"
                      alt="Iconsax linear"
                      src={
                        property1 === "compliance-moitoring"
                          ? "/img/iconsax-linear-arrowright2-16.svg"
                          : "/img/iconsax-linear-arrowright2-9.svg"
                      }
                    />
                  </div>
                </div>
              </>
            )}

            {[
              "check-point",
              "checkpoint-2",
              "compliance-moitoring",
              "enforcement-2",
              "enforcement",
              "incident-monitoring-expand",
            ].includes(property1) && (
              <>
                <div className="roles-3">
                  {property1 === "enforcement-2" && (
                    <img
                      className="iconsax-linear-12"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-profile2user-1.svg"
                    />
                  )}

                  <div className="group-7">
                    {["enforcement-2", "incident-monitoring-expand"].includes(property1) && (
                      <>
                        <div className="enforcement-point">
                          {property1 === "enforcement-2" && <>Enforcement Point</>}

                          {property1 === "incident-monitoring-expand" && <>Trust Observability</>}
                        </div>
                        <img
                          className="iconsax-linear-13"
                          alt="Iconsax linear"
                          src={
                            property1 === "incident-monitoring-expand"
                              ? "/img/iconsax-linear-building4-1.svg"
                              : "/img/iconsax-linear-arrowright2-8.svg"
                          }
                        />
                      </>
                    )}

                    {["check-point", "checkpoint-2", "compliance-moitoring", "enforcement"].includes(property1) && (
                      <div className="div-2">
                        {property1 === "check-point" && <>Checker Playbooks</>}

                        {property1 === "enforcement" && <>AI Patching Pipeline</>}

                        {property1 === "compliance-moitoring" && <>Compliance Statistics</>}

                        {property1 === "checkpoint-2" && <>AI Testing Pipeline</>}
                      </div>
                    )}
                  </div>
                </div>
                <div className="roles-4">
                  <div className="group-8">
                    {["check-point", "checkpoint-2", "compliance-moitoring", "enforcement-2", "enforcement"].includes(
                      property1
                    ) && (
                      <div className="div-2">
                        {property1 === "check-point" && <>Testing SandBox</>}

                        {property1 === "checkpoint-2" && <>Checker Playbooks</>}

                        {property1 === "enforcement-2" && <>AI Patching Pipeline</>}

                        {property1 === "enforcement" && <>Enforcer Playbooks</>}

                        {property1 === "compliance-moitoring" && <>Compliance Risks</>}
                      </div>
                    )}

                    {property1 === "incident-monitoring-expand" && (
                      <>
                        <div className="text-wrapper-2">Incident Monitoring</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-documenttext1-4.svg"
                        />
                      </>
                    )}
                  </div>
                  {["check-point", "incident-monitoring-expand"].includes(property1) && (
                    <img
                      className="iconsax-linear-14"
                      alt="Iconsax linear"
                      src={
                        property1 === "incident-monitoring-expand"
                          ? "/img/iconsax-linear-arrowright2-8.svg"
                          : iconsaxLinear3
                      }
                    />
                  )}
                </div>
                <div className="customer-4">
                  <div className="group-9">
                    {[
                      "check-point",
                      "checkpoint-2",
                      "enforcement-2",
                      "enforcement",
                      "incident-monitoring-expand",
                    ].includes(property1) && (
                      <div className={`div-2 ${property1 === "check-point" ? divClassNameOverride : undefined}`}>
                        {property1 === "incident-monitoring-expand" && <>AI EOAR</>}

                        {property1 === "checkpoint-2" && <>Testing SandBox</>}

                        {property1 === "enforcement" && <>Patching SandBox</>}

                        {property1 === "enforcement-2" && <>Enforcer Playbooks</>}

                        {property1 === "check-point" && <>Ethics Auto Testing</>}
                      </div>
                    )}

                    {property1 === "compliance-moitoring" && (
                      <>
                        <div className="text-wrapper-2">Trust Observability</div>
                        <img
                          className="iconsax-linear"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-building4-1.svg"
                        />
                      </>
                    )}
                  </div>
                  {["checkpoint-2", "enforcement", "incident-monitoring-expand"].includes(property1) && (
                    <img
                      className="iconsax-linear-15"
                      alt="Iconsax linear"
                      src={
                        property1 === "checkpoint-2"
                          ? "/img/iconsax-linear-arrowright2-16.svg"
                          : property1 === "enforcement"
                          ? "/img/iconsax-linear-arrowright2-9.svg"
                          : "/img/iconsax-linear-arrowright2-12.svg"
                      }
                    />
                  )}
                </div>
              </>
            )}

            {["checkpoint-2", "compliance-moitoring", "enforcement-2", "incident-monitoring-expand"].includes(
              property1
            ) && (
              <div className="customer-5">
                {["compliance-moitoring", "enforcement-2"].includes(property1) && (
                  <>
                    <div className="frame-4">
                      {property1 === "compliance-moitoring" && (
                        <>
                          <div className="text-wrapper-2">Incident Monitoring</div>
                          <img
                            className="iconsax-linear"
                            alt="Iconsax linear"
                            src="/img/iconsax-linear-documenttext1-5.svg"
                          />
                        </>
                      )}

                      {property1 === "enforcement-2" && <div className="div-2">Patching SandBox</div>}
                    </div>
                    <img
                      className="iconsax-linear-16"
                      alt="Iconsax linear"
                      src={
                        property1 === "enforcement-2"
                          ? "/img/iconsax-linear-arrowright2-16.svg"
                          : "/img/iconsax-linear-arrowright2-9.svg"
                      }
                    />
                  </>
                )}

                {["checkpoint-2", "incident-monitoring-expand"].includes(property1) && (
                  <div className="AI-ethics-drift-wrapper">
                    <div className="AI-ethics-drift">
                      {property1 === "incident-monitoring-expand" && <>AI Ethics drift detection</>}

                      {property1 === "checkpoint-2" && <>Ethical Twins</>}
                    </div>
                  </div>
                )}
              </div>
            )}

            {["EOAR", "compliance-moitoring", "incident-monitoring-expand"].includes(property1) && (
              <div className="customer-2">
                <div className="frame-3">
                  {property1 === "EOAR" && <div className="text-wrapper-2">Trust Observability</div>}

                  <img
                    className="iconsax-linear-17"
                    alt="Iconsax linear"
                    src={
                      property1 === "compliance-moitoring"
                        ? "/img/iconsax-linear-activity-5.svg"
                        : property1 === "incident-monitoring-expand"
                        ? "/img/iconsax-linear-activity-4.svg"
                        : "/img/iconsax-linear-building4-1.svg"
                    }
                  />
                  {["compliance-moitoring", "incident-monitoring-expand"].includes(property1) && (
                    <div className="text-wrapper-2">Activity Log</div>
                  )}
                </div>
              </div>
            )}

            {["checkpoint-2", "enforcement-2"].includes(property1) && (
              <>
                <div className="group-wrapper">
                  <div className="virtual-emulation-VE-wrapper">
                    <div className="div-3">
                      {property1 === "checkpoint-2" && <>Virtual Emulation (VE)</>}

                      {property1 === "enforcement-2" && <>Ethical Twins</>}
                    </div>
                  </div>
                </div>
                <div className="group-wrapper">
                  <div className="VE-test-report-wrapper">
                    <div className="div-3">
                      {property1 === "checkpoint-2" && <>VE Test Report</>}

                      {property1 === "enforcement-2" && <>Virtual Emulation (VE)</>}
                    </div>
                  </div>
                </div>
                <div className="roles-5">
                  <div className="ethics-auto-testing-wrapper">
                    <div className="ethics-auto-testing">
                      {property1 === "checkpoint-2" && <>Ethics Auto Testing</>}

                      {property1 === "enforcement-2" && <>VE Patch Report</>}
                    </div>
                  </div>
                </div>
                <div className="customer-6">
                  {property1 === "checkpoint-2" && (
                    <>
                      <img
                        className="iconsax-linear-18"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-profile2user-1.svg"
                      />
                      <div className="group-10">
                        <div className="text-wrapper-3">Enforcement Point</div>
                        <img
                          className="iconsax-linear-19"
                          alt="Iconsax linear"
                          src="/img/iconsax-linear-arrowright2-12.svg"
                        />
                      </div>
                    </>
                  )}

                  {property1 === "enforcement-2" && (
                    <div className="group-2">
                      <div className="div-2">Ethics Auto patching</div>
                    </div>
                  )}
                </div>
              </>
            )}

            {["EOAR", "checkpoint-2", "enforcement-2"].includes(property1) && (
              <div className="customer-7">
                {["checkpoint-2", "enforcement-2"].includes(property1) && (
                  <>
                    <img className="frame-2" alt="Frame" src="/img/frame-128-1.svg" />
                    <div className="group-4">
                      <div className="text-wrapper-3">Compliance Monitoring</div>
                      <img
                        className="iconsax-linear-6"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-arrowright2-9.svg"
                      />
                    </div>
                  </>
                )}

                {property1 === "EOAR" && (
                  <>
                    <div className="frame-3">
                      <div className="text-wrapper-2">Incident Monitoring</div>
                      <img
                        className="iconsax-linear"
                        alt="Iconsax linear"
                        src="/img/iconsax-linear-documenttext1-1.svg"
                      />
                    </div>
                    <img
                      className="iconsax-linear-3"
                      alt="Iconsax linear"
                      src="/img/iconsax-linear-arrowright2-9.svg"
                    />
                  </>
                )}
              </div>
            )}

            {["checkpoint-2", "enforcement-2"].includes(property1) && (
              <>
                <div className="customer-2">
                  <div className="frame-3">
                    <div className="text-wrapper-2">Trust Observability</div>
                    <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-building4-1.svg" />
                  </div>
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <div className="text-wrapper-2">Incident Monitoring</div>
                    <img
                      className="iconsax-linear"
                      alt="Iconsax linear"
                      src={
                        property1 === "enforcement-2"
                          ? "/img/iconsax-linear-documenttext1-2.svg"
                          : "/img/iconsax-linear-documenttext1-3.svg"
                      }
                    />
                  </div>
                  <img className="iconsax-linear-3" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-9.svg" />
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <img
                      className="iconsax-linear-7"
                      alt="Iconsax linear"
                      src={
                        property1 === "enforcement-2"
                          ? "/img/iconsax-linear-activity-2.svg"
                          : "/img/iconsax-linear-activity-3.svg"
                      }
                    />
                    <div className="text-wrapper-2">Activity Log</div>
                  </div>
                </div>
              </>
            )}

            {property1 === "EOAR" && (
              <>
                <div className="roles-6">
                  <div className="group-11">
                    <div className="div-2">AI EOAR</div>
                  </div>
                  <img className="iconsax-linear-20" alt="Iconsax linear" src="/img/iconsax-linear-arrowright2-8.svg" />
                </div>
                <div className="group-wrapper">
                  <div className="group-12">
                    <div className="div-3">AI Incident Response</div>
                  </div>
                </div>
                <div className="group-wrapper">
                  <div className="group-13">
                    <div className="div-3">AI Tool vulnerability</div>
                  </div>
                </div>
                <div className="group-wrapper">
                  <div className="group-14">
                    <div className="div-3">Targeted AI models</div>
                  </div>
                </div>
                <div className="group-wrapper">
                  <div className="group-15">
                    <div className="div-3">AI Threat Mitigation Matrix</div>
                  </div>
                </div>
                <div className="roles-7">
                  <div className="group-16">
                    <div className="div-2">AI Ethics drift detection</div>
                  </div>
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <img className="iconsax-linear-7" alt="Iconsax linear" src="/img/iconsax-linear-activity-1.svg" />
                    <div className="text-wrapper-2">Activity Log</div>
                  </div>
                </div>
              </>
            )}

            {["check-point", "enforcement"].includes(property1) && (
              <>
                <div className={`customer-8 ${customerClassName}`}>
                  {property1 === "check-point" && (
                    <>
                      <img className="iconsax-linear-21" alt="Iconsax linear" src={iconsaxLinear4} />
                      <div className="group-3">
                        <div className="text-wrapper-3">Enforcement Point</div>
                        <img className="iconsax-linear-5" alt="Iconsax linear" src={iconsaxLinear5} />
                      </div>
                    </>
                  )}

                  {property1 === "enforcement" && (
                    <div className="group-2">
                      <div className="div-2">Ethics Auto patching</div>
                    </div>
                  )}
                </div>
                <div className="customer">
                  <img className="frame-2" alt="Frame" src={frame} />
                  <div className="group-4">
                    <div className="text-wrapper-3">Compliance Monitoring</div>
                    <img className="iconsax-linear-6" alt="Iconsax linear" src={iconsaxLinear6} />
                  </div>
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <div className="text-wrapper-2">Trust Observability</div>
                    <img className="iconsax-linear" alt="Iconsax linear" src={iconsaxLinear7} />
                  </div>
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <div className="text-wrapper-2">Incident Monitoring</div>
                    <img
                      className="iconsax-linear"
                      alt="Iconsax linear"
                      src={property1 === "enforcement" ? "/img/iconsax-linear-documenttext1-6.svg" : iconsaxLinear8}
                    />
                  </div>
                  <img className="iconsax-linear-3" alt="Iconsax linear" src={iconsaxLinear9} />
                </div>
                <div className="customer-2">
                  <div className="frame-3">
                    <img
                      className="iconsax-linear-7"
                      alt="Iconsax linear"
                      src={property1 === "enforcement" ? "/img/iconsax-linear-activity-6.svg" : iconsaxLinear10}
                    />
                    <div className="text-wrapper-2">Activity Log</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {(property1 === "EOAR" ||
          property1 === "check-point" ||
          property1 === "checkpoint-2" ||
          property1 === "compliance-moitoring" ||
          property1 === "enforcement-2" ||
          property1 === "enforcement" ||
          property1 === "incident-monitoring-expand") && (
          <img
            className="line-2"
            alt="Line"
            src={
              property1 === "checkpoint-2"
                ? "/img/line-376-3.svg"
                : property1 === "enforcement-2"
                ? "/img/line-376-2.svg"
                : property1 === "EOAR"
                ? "/img/line-376-1.svg"
                : property1 === "check-point"
                ? "/img/line-376-7.svg"
                : property1 === "enforcement"
                ? "/img/line-376-6.svg"
                : "/img/line-376-4.svg"
            }
          />
        )}

        {["EOAR", "checkpoint-2", "enforcement-2"].includes(property1) && (
          <img className="line-3" alt="Line" src={property1 === "EOAR" ? "/img/line-377.svg" : "/img/line-377-1.svg"} />
        )}
      </div>
    </div>
  );
};

Menu.propTypes = {
  property1: PropTypes.oneOf([
    "incident-monitoring-expand",
    "enforcement-2",
    "check-point",
    "policy-and-control",
    "EOAR",
    "side-menu",
    "checkpoint-2",
    "enforcement",
    "compliance-moitoring",
  ]),
  iconsaxLinear: PropTypes.string,
  img: PropTypes.string,
  iconsaxLinear1: PropTypes.string,
  iconsaxLinear2: PropTypes.string,
  iconsaxLinear3: PropTypes.string,
  iconsaxLinear4: PropTypes.string,
  iconsaxLinear5: PropTypes.string,
  frame: PropTypes.string,
  iconsaxLinear6: PropTypes.string,
  iconsaxLinear7: PropTypes.string,
  iconsaxLinear8: PropTypes.string,
  iconsaxLinear9: PropTypes.string,
  iconsaxLinear10: PropTypes.string,
};
