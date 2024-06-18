import React from "react";
import "./style.css";

export const VirtualEmulation = () => {
  return (
    <div className="virtual-emulation">
      <div className="div">
        <div className="add-a-new-company">Add new</div>
        <div className="group">
          <div className="name-of-the-company">Enter VM Name</div>
          <div className="overlap-group">
            <div className="rectangle">
              <img className="vector" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="blinkbee">win-x64</div>
          </div>
        </div>
        <button className="button">
          <div className="overlap">
            <div className="cancel">CANCEL</div>
          </div>
        </button>
        <button className="overlap-wrapper">
          <div className="next-wrapper">
            <div className="next">SAVE</div>
          </div>
        </button>
        <div className="line-wrapper">
          <img className="line" alt="Line" src="/img/line-186.svg" />
        </div>
        <div className="start-and-end-wrapper">
          <div className="start-and-end">Select OS</div>
        </div>
        <div className="group-2">
          <div className="group-3">
            <div className="ellipse" />
          </div>
          <img className="image" alt="Image" src="/img/image-5.png" />
        </div>
        <div className="group-4">
          <div className="group-3" />
          <img className="img" alt="Image" src="/img/image-6.png" />
        </div>
        <div className="group-5">
          <div className="group-3" />
          <img className="image-2" alt="Image" src="/img/image-7.png" />
        </div>
        <div className="group-6">
          <div className="name-of-the-company">PEM Key</div>
          <div className="blinkbee-wrapper">
            <p className="text-wrapper">
              -----BEGIN RSA PRIVATE KEY----- MIIEpQIBAAKCAQEA3Tz2mr7SZiAMfQyuvBjM9Oi..Z1BjP5CE/Wm/Rr500P
              RK+Lh9x5eJPo5CAZ3/ANBE0sTK0ZsDGMak2m1g7..3VHqIxFTz0Ta1d+NAj
              wnLe4nOb7/eEJbDPkk05ShhBrJGBKKxb8n104o/..PdzbFMIyNjJzBM2o5y
              5A13wiLitEO7nco2WfyYkQzaxCw0AwzlkVHiIyC..71pSzkv6sv+4IDMbT/
              XpCo8L6wTarzrywnQsh+etLD6FtTjYbbrvZ8RQM..Hg2qxraAV++HNBYmNWs0duEdjUbJK+ZarypXI9TtnS4o1Ckj7POfljiQI..IBAFyidxtqRQyv5KrDkbJ+q+rsJxQlaipn2M4lGuQJEfIxELFDyd3XpxP..Un/82NZNXlPmRIopXs2T91jiLZEUKQw+n73j26adTbteuEaPGSrTZxBLR..yssO0wWomUyILqVeti
              -----END RSA PRIVATE KEY-----
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
