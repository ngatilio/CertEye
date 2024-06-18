/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const YamlFile = ({
  className,
  text = "&nbsp;&nbsp;AIEthicsCheckerYaml",
  text1 = "fairness_checker",
  text2 = " “fairness_checker.py”",
  text3 = "audit_checker",
}) => {
  return (
    <div className={`YAML-file ${className}`}>
      <div className="group">
        <div className="text-wrapper">pipeline:</div>
        <p className="name">
          <span className="span">name:</span>
          <span className="text-wrapper-2">{text}</span>
        </p>
        <div className="div">parameters:</div>
        <div className="text-wrapper-3">PipelineParam1 :</div>
        <p className="type-int">
          <span className="span">type:</span>
          <span className="text-wrapper-2"> int</span>
        </p>
        <div className="text-wrapper-4">default: 5</div>
        <div className="text-wrapper-5">data_references:</div>
        <div className="text-wrapper-6">input :</div>
        <p className="datastore">
          <span className="span">datastore:</span>
          <span className="text-wrapper-2"> datablobstore</span>
        </p>
        <p className="path-on-datastore">
          <span className="span">path_on_datastore :</span>
          <span className="text-wrapper-7">&nbsp;&nbsp;</span>
          <span className="text-wrapper-8"> “dataset.csv”</span>
        </p>
        <div className="text-wrapper-9">steps:</div>
        <div className="fairness-checker">{text1}</div>
        <p className="runconfig-yaml">
          <span className="span">runconfig:</span>
          <span className="text-wrapper-7">&nbsp;</span>
          <span className="text-wrapper-8"> “~/yaml/default_runconfig.yml”</span>
        </p>
        <p className="pool-id-fairnesspool">
          <span className="span">pool_id : </span>
          <span className="text-wrapper-8">&nbsp;&nbsp;“FairnessPool”</span>
        </p>
        <div className="text-wrapper-10">create_pool: true</div>
        <p className="executable-fairness">
          <span className="span">executable: </span>
          <span className="text-wrapper-8">{text2}</span>
        </p>
        <p className="source-directory">
          <span className="span">source_directory :&nbsp;&nbsp; </span>
          <span className="text-wrapper-8">“~/scripts/mlpipeline”</span>
        </p>
        <div className="allow-reuse-false">allow_reuse:&nbsp;&nbsp;false</div>
        <div className="text-wrapper-11">inputs :</div>
        <div className="text-wrapper-12">input :</div>
        <p className="source-input">
          <span className="span">source: </span>
          <span className="text-wrapper-2">input</span>
        </p>
        <div className="text-wrapper-13">outputs :</div>
        <div className="text-wrapper-14">output :</div>
        <p className="destination-output">
          <span className="span">destination:</span>
          <span className="text-wrapper-2"> output</span>
        </p>
        <p className="p">
          <span className="span">datastore: </span>
          <span className="text-wrapper-2">datalobstore</span>
        </p>
        <div className="audit-checker">{text3}</div>
      </div>
    </div>
  );
};

YamlFile.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
