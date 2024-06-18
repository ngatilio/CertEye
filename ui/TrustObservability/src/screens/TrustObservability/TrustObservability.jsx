import React from "react";
import { Header } from "../../components/Header";
import { LightDoughnutChart } from "../../components/LightDoughnutChart";
import { LightLineChart } from "../../components/LightLineChart";
import { Menu } from "../../components/Menu";
import "./style.css";

export const TrustObservability = () => {
  return (
    <div className="trust-observability">
      <div className="div-5">
        <div className="overlap-3">
          <div className="add-a-new-company">Trust Observability</div>
          <div className="widgets">
            <div className="data-details">
              <div className="content">
                <div className="content-2">
                  <div className="dot" />
                  <div className="text-wrapper-15">Data</div>
                </div>
                <div className="text-wrapper-16">10.33%</div>
                <div className="text-wrapper-17">High</div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="dot-2" />
                  <div className="text-wrapper-16">Unexplained Model</div>
                </div>
                <div className="text-wrapper-16">4.19%</div>
                <div className="text-wrapper-16">Medium</div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="dot-3" />
                  <div className="text-wrapper-15">Not Explainable Decisions</div>
                </div>
                <div className="text-wrapper-18">10.33%</div>
                <div className="text-wrapper-19">Low</div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="dot-4" />
                  <div className="text-wrapper-15">Unproper Logging</div>
                </div>
                <div className="text-wrapper-16">4.19%</div>
                <div className="text-wrapper-16">Critical</div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="dot-5" />
                  <div className="text-wrapper-15">Training</div>
                </div>
                <div className="text-wrapper-16">4.19%</div>
                <div className="text-wrapper-16">Medium</div>
              </div>
              <div className="content">
                <div className="content-2">
                  <div className="dot-6" />
                  <div className="text-wrapper-15">Deployment</div>
                </div>
                <div className="text-wrapper-16">10.33%</div>
                <div className="text-wrapper-17">Low</div>
              </div>
            </div>
            <div className="circle-bar-wrapper">
              <div className="circle-bar">
                <div className="overlap-group-4">
                  <img className="pie-chart" alt="Pie chart" src="/img/pie-chart-02.svg" />
                  <img className="pie-chart-2" alt="Pie chart" src="/img/pie-chart-03.svg" />
                  <img className="pie-chart-3" alt="Pie chart" src="/img/pie-chart-04.svg" />
                  <img className="pie-chart-4" alt="Pie chart" src="/img/pie-chart-05.svg" />
                  <img className="pie-chart-5" alt="Pie chart" src="/img/pie-chart-01.svg" />
                  <img className="pie-chart-6" alt="Pie chart" src="/img/pie-chart-07.svg" />
                  <img className="pie-chart-7" alt="Pie chart" src="/img/pie-chart-08.svg" />
                </div>
              </div>
            </div>
            <div className="card-info">
              <div className="card-title-2">Transparency Risks</div>
            </div>
          </div>
          <div className="chart-2">
            <div className="months">
              <div className="text-wrapper-20">01</div>
              <div className="text-wrapper-21">30</div>
              <div className="text-wrapper-22">20</div>
              <div className="text-wrapper-23">10</div>
              <div className="text-wrapper-24">40</div>
            </div>
            <div className="overlap-4">
              <div className="amount">
                <div className="text-wrapper-25">0</div>
                <div className="text-wrapper-26">50k</div>
                <div className="text-wrapper-27">100k</div>
                <div className="text-wrapper-28">500</div>
                <div className="text-wrapper-29">1M</div>
              </div>
              <div className="chart-lines">
                <img className="line-5" alt="Line" src="/img/line-6.svg" />
                <img className="line-6" alt="Line" src="/img/line-5.svg" />
                <img className="line-7" alt="Line" src="/img/line-4.svg" />
                <img className="line-8" alt="Line" src="/img/line-3-1.svg" />
                <img className="line-9" alt="Line" src="/img/line-2-1.svg" />
                <img className="line-10" alt="Line" src="/img/line-1-2.svg" />
              </div>
              <img className="lines" alt="Lines" src="/img/lines.png" />
            </div>
            <div className="identifiers">
              <div className="label">
                <div className="indentifier" />
                <div className="text-wrapper-30">Cumulative duration (hours)</div>
              </div>
              <div className="label-2">
                <div className="indentifier-2" />
                <p className="text-wrapper-30">Emission produced (Kg. Eq. CO2)</p>
              </div>
              <div className="label-3">
                <div className="indentifier-3" />
                <div className="text-wrapper-31">Energy consumed (kWh)</div>
              </div>
            </div>
            <div className="card-info-2">
              <p className="p">Carbon foot print per unit</p>
            </div>
          </div>
          <LightDoughnutChart className="light-doughnut-chart-instance" />
          <div className="chart-3">
            <div className="amounts">
              <div className="text-wrapper-32">0</div>
              <div className="text-wrapper-33">25k</div>
              <div className="text-wrapper-34">50k</div>
              <div className="text-wrapper-35">75k</div>
              <div className="text-wrapper-36">150k</div>
            </div>
            <div className="overlap-5">
              <div className="chart-lines-2">
                <img className="line-11" alt="Line" src="/img/line-1-1.svg" />
                <img className="line-12" alt="Line" src="/img/line-2.svg" />
                <img className="line-13" alt="Line" src="/img/line-3.svg" />
              </div>
              <div className="bars">
                <div className="overlap-group-5">
                  <div className="empty-bars">
                    <div className="empty-bar" />
                    <div className="empty-bar-2" />
                    <div className="empty-bar-3" />
                    <div className="empty-bar-4" />
                  </div>
                  <div className="bars-2">
                    <div className="bar" />
                    <div className="bar-2" />
                    <div className="bar-3" />
                    <div className="bar-4" />
                  </div>
                </div>
              </div>
              <div className="names-list">
                <div className="text-wrapper-37">ML Model Access</div>
                <div className="text-wrapper-38">Defence Evasion</div>
                <div className="text-wrapper-39">Initial Access</div>
                <div className="text-wrapper-40">ML Attack Staging</div>
              </div>
            </div>
            <img className="divider" alt="Divider" src="/img/divider.svg" />
            <div className="card-info-3">
              <p className="card-title-3">AI security risks per stage</p>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-41">AI Incidents</div>
              <div className="group-16">
                <div className="text-wrapper-42">1,275</div>
                <div className="group-17">
                  <div className="text-wrapper-43">+39%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown2-6.svg" />
                </div>
              </div>
            </div>
            <div className="frame-9">
              <div className="text-wrapper-41">Average Time To Detect</div>
              <div className="group-18">
                <p className="element-4">
                  <span className="span">43</span>
                  <span className="text-wrapper-44">min</span>
                </p>
                <div className="group-19">
                  <div className="text-wrapper-43">+29%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown2-5.svg" />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-41">Mean Time To Resolve</div>
              <div className="group-20">
                <p className="element-4">
                  <span className="span">1</span>
                  <span className="text-wrapper-44">hr </span>
                  <span className="span">21</span>
                  <span className="text-wrapper-44">m</span>
                </p>
                <div className="group-21">
                  <div className="text-wrapper-43">+29%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown-2.svg" />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-41">PII Exposure</div>
              <div className="group-22">
                <div className="text-wrapper-42">120.7</div>
                <div className="group-23">
                  <div className="text-wrapper-43">+37%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown2-1.svg" />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-41">Time Saved</div>
              <div className="group-24">
                <p className="element-4">
                  <span className="span">1</span>
                  <span className="text-wrapper-44">mo </span>
                  <span className="span">10</span>
                  <span className="text-wrapper-44">d</span>
                </p>
                <div className="group-25">
                  <div className="text-wrapper-43">+47%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown2-1.svg" />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-41">Dollars Saved</div>
              <div className="group-26">
                <div className="text-wrapper-45">$44,420</div>
                <div className="group-27">
                  <div className="text-wrapper-43">+57%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown2-1.svg" />
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-41">Fairness loss</div>
              <div className="group-28">
                <div className="text-wrapper-42">7.7k</div>
                <div className="group-29">
                  <div className="text-wrapper-43">+38%</div>
                  <img className="fe-drop-down" alt="Fe drop down" src="/img/fedropdown-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-46">Total Predictions</div>
              <div className="text-wrapper-47">18.53k</div>
            </div>
            <div className="frame-13">
              <div className="text-wrapper-46">Total Requests</div>
              <div className="text-wrapper-47">9.24k</div>
            </div>
            <div className="frame-14">
              <div className="group-30">
                <div className="text-wrapper-48">Requests Over&nbsp;&nbsp; 2000&nbsp;&nbsp;&nbsp;&nbsp; ms</div>
                <img className="ic-sharp-info" alt="Ic sharp info" src="/img/ic-sharp-info.svg" />
              </div>
              <div className="text-wrapper-47">1.49k</div>
            </div>
            <div className="frame-15">
              <div className="group-31">
                <div className="overlap-group-6">
                  <p className="div-6">
                    <span className="text-wrapper-49">Median</span>
                    <span className="text-wrapper-50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response Time (ms)</span>
                  </p>
                  <img className="vector" alt="Vector" src="/img/vector.svg" />
                </div>
                <img className="ic-sharp-info-2" alt="Ic sharp info" src="/img/ic-sharp-info.svg" />
              </div>
              <div className="text-wrapper-47">909</div>
            </div>
            <div className="frame-16">
              <div className="group-32">
                <div className="overlap-group-7">
                  <p className="div-6">
                    <span className="text-wrapper-51">Median&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="text-wrapper-50"> Execution Time (ms) </span>
                  </p>
                  <img className="vector-2" alt="Vector" src="/img/vector.svg" />
                </div>
                <img className="ic-sharp-info-3" alt="Ic sharp info" src="/img/ic-sharp-info.svg" />
              </div>
              <div className="text-wrapper-47">864</div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-18">
              <p className="text-wrapper-52">Median | Peak Load (calls/minute)</p>
              <div className="text-wrapper-53">1 |1</div>
            </div>
            <div className="frame-19">
              <div className="text-wrapper-54">Data Error Rate</div>
              <div className="text-wrapper-55">0.000%</div>
            </div>
            <div className="frame-20">
              <div className="group-33">
                <div className="overlap-group-8">
                  <div className="text-wrapper-56">System Error Rate</div>
                  <img className="ic-sharp-info-4" alt="Ic sharp info" src="/img/ic-sharp-info-2.svg" />
                </div>
              </div>
              <div className="text-wrapper-57">0.000%</div>
            </div>
            <div className="frame-21">
              <div className="group-34">
                <div className="text-wrapper-48">Consumers</div>
                <img className="ic-sharp-info-5" alt="Ic sharp info" src="/img/ic-sharp-info.svg" />
              </div>
              <div className="text-wrapper-58">1</div>
            </div>
            <div className="frame-22">
              <div className="group-35">
                <div className="text-wrapper-48">Cache Hit Rate</div>
                <img className="ic-sharp-info-6" alt="Ic sharp info" src="/img/ic-sharp-info.svg" />
              </div>
              <div className="text-wrapper-59">84.759%</div>
            </div>
          </div>
          <div className="overlap-6">
            <div className="group-36">
              <div className="overlap-7">
                <div className="overlap-8">
                  <img className="line-14" alt="Line" src="/img/line-387.svg" />
                  <img className="line-15" alt="Line" src="/img/line-380.svg" />
                  <img className="line-16" alt="Line" src="/img/line-381.svg" />
                  <img className="line-17" alt="Line" src="/img/line-382-9.svg" />
                  <img className="line-18" alt="Line" src="/img/line-383.svg" />
                  <div className="group-37">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">11:00 a.m</div>
                  </div>
                  <div className="group-38">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">12:00 p.m</div>
                  </div>
                  <div className="group-39">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">01:00 p.m</div>
                  </div>
                  <div className="group-40">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">02:00 p.m</div>
                  </div>
                  <div className="group-41">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">03:00 p.m</div>
                  </div>
                  <div className="group-42">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">04:00 p.m</div>
                  </div>
                  <div className="group-43">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">05:00 p.m</div>
                  </div>
                  <div className="group-44">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">06:00 p.m</div>
                  </div>
                  <div className="group-45">
                    <img className="line-19" alt="Line" src="/img/line-382.svg" />
                    <div className="text-wrapper-60">07:00 p.m</div>
                  </div>
                </div>
                <div className="overlap-9">
                  <div className="frame-23">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <div className="ellipse-3" />
                    <div className="ellipse-4" />
                    <div className="ellipse-5" />
                  </div>
                  <img className="line-20" alt="Line" src="/img/line-384.svg" />
                  <img className="line-21" alt="Line" src="/img/line-385.svg" />
                </div>
              </div>
              <div className="text-wrapper-61">Prediction Drift</div>
              <div className="text-wrapper-62">3500</div>
              <div className="text-wrapper-63">3000</div>
              <div className="text-wrapper-64">2500</div>
            </div>
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <div className="ellipse-8" />
            <div className="ellipse-9" />
            <div className="ellipse-10" />
            <div className="ellipse-11" />
          </div>
          <LightLineChart className="light-line-chart-t" />
          <div className="group-46">
            <div className="group-47">
              <div className="overlap-group-9">
                <div className="frame-24">
                  <div className="text-wrapper-65">Mean time to triage</div>
                  <div className="text-wrapper-47">0mins</div>
                </div>
              </div>
            </div>
            <div className="group-48">
              <div className="overlap-10">
                <div className="frame-25">
                  <div className="text-wrapper-65">Mean dwell time</div>
                  <div className="text-wrapper-47">17 mins</div>
                </div>
              </div>
            </div>
            <div className="group-49">
              <div className="overlap-11">
                <div className="frame-26">
                  <div className="text-wrapper-65">Mean time to respond</div>
                  <div className="text-wrapper-47">1h 13 mins</div>
                </div>
              </div>
            </div>
            <div className="group-50">
              <div className="overlap-12">
                <div className="frame-27">
                  <div className="text-wrapper-65">Mean time to detect</div>
                  <div className="text-wrapper-47">1h 35 mins</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-66">Performance</div>
          </div>
        </div>
        <Menu
          className="menu-instance"
          customerClassName="design-component-instance-node"
          customerClassNameOverride="menu-2"
          divClassName="menu-3"
          frame="/img/frame-128.svg"
          iconsaxLinear="/img/iconsax-linear-useroctagon.svg"
          iconsaxLinear1="/img/iconsax-linear-setting2.svg"
          iconsaxLinear2="/img/iconsax-linear-arrowright2-3.svg"
          iconsaxLinear3="/img/iconsax-linear-profile2user.svg"
          iconsaxLinear4="/img/iconsax-linear-arrowright2-2.svg"
          iconsaxLinear5="/img/iconsax-linear-arrowright2.svg"
          iconsaxLinear6="/img/iconsax-linear-building4.svg"
          iconsaxLinear7="/img/iconsax-linear-documenttext1.svg"
          iconsaxLinear8="/img/iconsax-linear-arrowright2.svg"
          iconsaxLinear9="/img/iconsax-linear-activity.svg"
          img="/img/iconsax-linear-arrowright2-4.svg"
          property1="side-menu"
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
