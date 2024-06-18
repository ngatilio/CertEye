import React from "react";
import "./style.css";

export const ActionableItemsNrs = () => {
  return (
    <div className="actionable-items-NRS">
      <div className="dropdown-wrapper">
        <div className="dropdown">
          <div className="frame">
            <div className="div">
              <img className="edit" alt="Edit" src="/img/edit.svg" />
              <div className="location">Edit</div>
            </div>
            <div className="div">
              <img className="trash" alt="Trash" src="/img/trash-2.svg" />
              <div className="location">Delete</div>
            </div>
            <div className="delete">
              <img className="image" alt="Image" src="/img/image-3.png" />
              <div className="text-wrapper">GitHub</div>
            </div>
            <div className="delete">
              <img className="img" alt="Image" src="/img/image-4.png" />
              <div className="location">DVC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
