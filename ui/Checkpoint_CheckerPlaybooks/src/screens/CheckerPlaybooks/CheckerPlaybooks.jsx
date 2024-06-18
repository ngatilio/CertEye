import React from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import "./style.css";

export const CheckerPlaybooks = () => {
  return (
    <div className="checker-playbooks">
      <div className="div-5">
        <div className="text-wrapper-4">AI Checkpoint</div>
        <div className="text-wrapper-5">/</div>
        <div className="text-wrapper-6">AI Ethics checker playbooks</div>
        <div className="overlap-2">
          <img className="element" alt="Element" src="/img/15.png" />
          <img className="element-2" alt="Element" src="/img/16.png" />
          <div className="frame-6">
            <div className="frame-7">
              <div className="rectangle" />
              <div className="text-wrapper-7">Success</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-2" />
              <div className="text-wrapper-7">Running</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-3" />
              <div className="text-wrapper-7">Failed</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-4" />
              <div className="text-wrapper-7">Skipped</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-5" />
              <div className="text-wrapper-7">Retry</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-6" />
              <div className="text-wrapper-7">Queued</div>
            </div>
            <div className="frame-7">
              <div className="rectangle-7" />
              <div className="text-wrapper-7">No-status</div>
            </div>
          </div>
          <img className="line-4" alt="Line" src="/img/line-4.svg" />
          <div className="JC">ID</div>
          <div className="JC-2">State</div>
          <div className="JC-3">Execution Date</div>
          <div className="JC-4">Start Date</div>
          <div className="JC-5">End Date</div>
          <div className="JC-6">Duration</div>
          <div className="text-wrapper-8">Execution log</div>
          <div className="text-wrapper-9">GPU Memory Usage</div>
          <div className="GPU-usage">GPU&nbsp;&nbsp;Usage</div>
          <button className="button">
            <div className="next-wrapper">
              <div className="next">EXECUTE</div>
            </div>
          </button>
          <div className="overlap-3">
            <div className="frame-8">
              <div className="overlap-4">
                <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
                <div className="group-18">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-10">load_training_data_to_s3</div>
                  </div>
                </div>
              </div>
              <div className="overlap-5">
                <div className="overlap-6">
                  <div className="overlap-7">
                    <img className="arrow-2" alt="Arrow" src="/img/arrow-19.svg" />
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-13.svg" />
                    <img className="arrow-4" alt="Arrow" src="/img/arrow-8.svg" />
                    <div className="group-19">
                      <div className="overlap-8">
                        <div className="text-wrapper-11">train_model</div>
                      </div>
                    </div>
                    <div className="group-20">
                      <div className="overlap-9">
                        <div className="text-wrapper-12">validate_model</div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-10">
                    <img className="arrow-5" alt="Arrow" src="/img/arrow-2.svg" />
                    <img className="arrow-6" alt="Arrow" src="/img/arrow-5.svg" />
                    <img className="arrow-7" alt="Arrow" src="/img/arrow-6.svg" />
                    <img className="arrow-8" alt="Arrow" src="/img/arrow-7.svg" />
                    <div className="group-21">
                      <div className="overlap-11">
                        <div className="text-wrapper-13">Preprocess_data</div>
                      </div>
                    </div>
                  </div>
                  <img className="arrow-9" alt="Arrow" src="/img/arrow-4.svg" />
                  <div className="overlap-12">
                    <img className="arrow-10" alt="Arrow" src="/img/arrow-11.svg" />
                    <img className="arrow-11" alt="Arrow" src="/img/arrow-9.svg" />
                    <img className="arrow-12" alt="Arrow" src="/img/arrow-10.svg" />
                    <div className="group-22">
                      <div className="overlap-11">
                        <div className="text-wrapper-13">tune_parameters</div>
                      </div>
                    </div>
                    <div className="group-23">
                      <div className="overlap-13">
                        <div className="text-wrapper-14">audit_checker</div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-14">
                    <img className="arrow-13" alt="Arrow" src="/img/arrow-12.svg" />
                    <div className="group-24">
                      <div className="overlap-15">
                        <div className="text-wrapper-15">security_checker</div>
                      </div>
                    </div>
                  </div>
                  <img className="arrow-14" alt="Arrow" src="/img/arrow-3.svg" />
                </div>
                <div className="group-25">
                  <div className="overlap-15">
                    <div className="text-wrapper-14">Privacy_checker</div>
                  </div>
                </div>
                <div className="group-26">
                  <div className="overlap-15">
                    <div className="text-wrapper-14">fairness_checker</div>
                  </div>
                </div>
              </div>
              <img className="arrow-15" alt="Arrow" src="/img/arrow-19.svg" />
              <img className="arrow-16" alt="Arrow" src="/img/arrow-15.svg" />
              <img className="arrow-17" alt="Arrow" src="/img/arrow-17.svg" />
              <div className="overlap-16">
                <img className="arrow-18" alt="Arrow" src="/img/arrow-18.svg" />
                <div className="overlap-17">
                  <img className="arrow-19" alt="Arrow" src="/img/arrow-16.svg" />
                  <div className="group-27">
                    <div className="overlap-18">
                      <div className="text-wrapper-16">performance_checker</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-17">download_model</div>
              <div className="text-wrapper-18">deploy_model</div>
              <div className="group-28">
                <div className="overlap-15">
                  <div className="text-wrapper-15">security_checker</div>
                </div>
              </div>
              <div className="overlap-19">
                <div className="ellipse" />
                <div className="rectangle-8" />
                <img className="arrow-20" alt="Arrow" src="/img/arrow-20.svg" />
                <img className="arrow-21" alt="Arrow" src="/img/arrow-21.svg" />
              </div>
            </div>
            <img className="ep-refresh" alt="Ep refresh" src="/img/ep-refresh.svg" />
          </div>
          <div className="frame-9">
            <div className="group-29">
              <div className="JC-7">123458</div>
              <div className="JC-8">
                17-07-2023
                <br />
                11:08:28 A.M
              </div>
              <div className="JC-9">
                17-07-2023
                <br />
                11:08:40 A.M
              </div>
              <div className="JC-10">
                17-07-2023
                <br />
                15:10:36 P.M
              </div>
              <div className="JC-11">02:40:36</div>
              <div className="add-new-button">
                <div className="content">
                  <div className="start-and-end">SUCCESS</div>
                </div>
              </div>
            </div>
            <img className="line-5" alt="Line" src="/img/line-5.svg" />
          </div>
          <div className="frame-10">
            <div className="group-29">
              <div className="JC-7">123458</div>
              <div className="JC-8">
                17-07-2023
                <br />
                11:08:28 A.M
              </div>
              <div className="JC-9">
                17-07-2023
                <br />
                11:08:40 A.M
              </div>
              <div className="JC-10">
                17-07-2023
                <br />
                15:10:36 P.M
              </div>
              <div className="JC-11">02:40:36</div>
              <div className="add-new-button">
                <div className="content">
                  <div className="start-and-end">SUCCESS</div>
                </div>
              </div>
            </div>
            <img className="line-5" alt="Line" src="/img/line-5.svg" />
          </div>
          <div className="frame-11">
            <div className="group-29">
              <div className="JC-7">123458</div>
              <div className="JC-8">
                17-07-2023
                <br />
                11:08:28 A.M
              </div>
              <div className="JC-9">
                17-07-2023
                <br />
                11:08:40 A.M
              </div>
              <div className="JC-10">
                17-07-2023
                <br />
                15:10:36 P.M
              </div>
              <div className="JC-11">02:40:36</div>
              <div className="add-new-button">
                <div className="content">
                  <div className="start-and-end">SUCCESS</div>
                </div>
              </div>
            </div>
            <img className="line-5" alt="Line" src="/img/line-5.svg" />
          </div>
          <div className="frame-12">
            <div className="group-29">
              <div className="JC-7">123458</div>
              <div className="JC-8">
                17-07-2023
                <br />
                11:08:28 A.M
              </div>
              <div className="JC-9">
                17-07-2023
                <br />
                11:08:40 A.M
              </div>
              <div className="JC-10">
                17-07-2023
                <br />
                15:10:36 P.M
              </div>
              <div className="JC-11">02:40:36</div>
              <div className="add-new-button">
                <div className="content">
                  <div className="start-and-end">SUCCESS</div>
                </div>
              </div>
            </div>
            <img className="line-5" alt="Line" src="/img/line-5.svg" />
          </div>
        </div>
        <Menu
          className="menu-instance"
          divClassName="menu-2"
          divClassNameOverride="menu-3"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear2="/img/iconsax-linear-arrowright2-4.svg"
          iconsaxLinear3="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear4="/img/iconsax-linear-arrowright2-7.svg"
          iconsaxLinear5="/img/iconsax-linear-building4.svg"
          iconsaxLinear6="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear7="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-arrowright2-7.svg"
          property1="check-point"
          settingsClassName="design-component-instance-node"
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
