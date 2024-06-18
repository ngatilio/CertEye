/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const AutopatchingEditor = ({ className }) => {
  return (
    <div className={`autopatching-editor ${className}`}>
      <div className="group">
        <p className="pipeline-name">
          <span className="text-wrapper">pipeline: &nbsp;&nbsp; name:&nbsp;&nbsp;</span>
          <span className="span">AutoPatchingYaml</span>
          <span className="text-wrapper"> &nbsp;&nbsp; ExecutionParam1: &nbsp;&nbsp;&nbsp;&nbsp; -gpu_enabled:</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper">true &nbsp;&nbsp;&nbsp;&nbsp; -max_pooling_size: </span>
          <span className="span">50</span>
          <span className="text-wrapper">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp; -caching_enabled: false &nbsp;&nbsp;&nbsp;&nbsp; -execution_mode:{" "}
          </span>
          <span className="span">silent</span>
          <span className="text-wrapper">
            {" "}
            &nbsp;&nbsp;Patch_twin: &nbsp;&nbsp;&nbsp;&nbsp;twin01: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
          </span>
          <span className="span">patch-twin01</span>
          <span className="text-wrapper">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- tags:
            [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;
          </span>
          <span className="span">fairness</span>
          <span className="text-wrapper">
            &#39;,
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;
          </span>
          <span className="span">transparency</span>
          <span className="text-wrapper">
            &#39; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            nrs_db: &#39;
          </span>
          <span className="span">abyec technologies</span>
          <span className="text-wrapper">
            &#39; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- policy:
            [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#39;
          </span>
          <span className="span">audit_policy</span>
          <span className="text-wrapper">
            &#39; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            data_attributes: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;
          </span>
          <span className="span">gender</span>
          <span className="text-wrapper">&#39;, &#39;</span>
          <span className="span">[M, F]</span>
          <span className="text-wrapper">
            &#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;
          </span>
          <span className="span">age</span>
          <span className="text-wrapper">&#39;,&nbsp;&nbsp; &#39;</span>
          <span className="span">[0..100]</span>
          <span className="text-wrapper">
            &#39;{"}"}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            model_attributes: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;
          </span>
          <span className="span">learning_rate</span>
          <span className="text-wrapper">&#39;, &#39;</span>
          <span className="span">[0..1]</span>
          <span className="text-wrapper">
            &#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;
          </span>
          <span className="span">loss</span>
          <span className="text-wrapper">&#39;, &#39;</span>
          <span className="span">[0..1]</span>
          <span className="text-wrapper">
            &#39;{"}"}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-ml_pipeline_name:
            [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;
          </span>
          <span className="span">data_collection</span>
          <span className="text-wrapper">&#39;, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;</span>
          <span className="span">data_preprocessing</span>
          <span className="text-wrapper">&#39;, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;</span>
          <span className="span">training</span>
          <span className="text-wrapper">
            &#39; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-num_replicas:{" "}
          </span>
          <span className="text-wrapper-2">05</span>
          <span className="text-wrapper">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emulator: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- image:{" "}
          </span>
          <span className="text-wrapper-3">ubuntu-image-x86_64</span>
          <span className="text-wrapper"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pem:</span>
          <span className="span"> ~/.env/test.pem</span>
          <span className="text-wrapper">
            {"  "}&nbsp;&nbsp;&nbsp;&nbsp; Patch_report: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- metadata:
            [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span className="span">
            {" "}
            {"{"}&#39;ID&#39;, &#39;int&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
            &#39;Testcase name&#39;, &#39;string&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"{"}&#39;Status&#39;, &#39;[Starting, Failed, Stopped, Pending]&#39;{"}"}
            , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;DateTime&#39;, &#39;dd-MM-YYYY
            hh:mm&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;OS&#39;,
            &#39;string&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;Ethical
            Twin&#39;, &#39;string&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}&#39;Data
            Attributes&#39;, &#39;list&#39;{"}"}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}
            &#39;Model Attributes&#39;, &#39;list&#39;{"}"}
          </span>
          <span className="text-wrapper">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] &nbsp;&nbsp;&nbsp;&nbsp;twin02:
            <br />
            <br />
            <br />
            <br />
          </span>
        </p>
      </div>
      <div className="rectangle-wrapper">
        <div className="rectangle" />
      </div>
    </div>
  );
};
