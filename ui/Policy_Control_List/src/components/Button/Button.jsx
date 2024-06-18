/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ state, height, className, onClick, startAndEndClassName }) => {
  return (
    <div className={`button ${state} ${height} ${className}`} onClick={onClick}>
      <div className="content">
        <div className={`start-and-end ${startAndEndClassName}`}>
          {["save-secondary", "save"].includes(state) && <>Save</>}

          {state === "apply" && <>Apply</>}

          {["cancel", "filter-cancel"].includes(state) && <>Cancel</>}

          {state === "save-new" && <>Save &amp; Add New</>}

          {state === "save-clone" && <>Save &amp; Clone</>}

          {["add", "export", "import", "print-all", "print"].includes(state) && (
            <>
              <img
                className="add-icon"
                alt="Add icon"
                src={
                  state === "print-all"
                    ? "/img/printer-1.svg"
                    : state === "import"
                    ? "/img/iconsax-linear-importsquare.svg"
                    : state === "export"
                    ? "/img/iconsax-linear-exportsquare.svg"
                    : state === "print"
                    ? "/img/printer.svg"
                    : "/img/add-icon-1.svg"
                }
              />
              <div className="div">
                {state === "add" && <>Add</>}

                {state === "print-all" && <>Print All</>}

                {state === "import" && <>Import</>}

                {state === "export" && <>Export</>}

                {state === "print" && <>Print</>}
              </div>
            </>
          )}

          {state === "update" && <>Update</>}

          {state === "delete" && <>Delete</>}
        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  state: PropTypes.oneOf([
    "save-clone",
    "add",
    "print",
    "export",
    "update",
    "delete",
    "save-secondary",
    "print-all",
    "save",
    "import",
    "cancel",
    "apply",
    "save-new",
    "filter-cancel",
  ]),
  height: PropTypes.oneOf(["forty", "forty-six"]),
};
