import React from "react";
import "./style.css";

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="frame">
        <div className="div">
          <img className="iconsax-linear-eye" alt="Iconsax linear eye" src="/img/iconsax-linear-eye.svg" />
          <div className="location">View</div>
        </div>
        <div className="div">
          <img className="edit" alt="Edit" src="/img/edit.svg" />
          <div className="location">Edit</div>
        </div>
        <div className="div">
          <img className="trash" alt="Trash" src="/img/trash-2.svg" />
          <div className="location">Delete</div>
        </div>
      </div>
    </div>
  );
};
