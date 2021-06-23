import React from "react";
import "./saveButton.css";

const SaveButton = ({ bookData, onSave }) => {
  return (
    <span
      onClick={() => onSave(bookData)}
      className="save-btn"
      role="button"
      tabIndex="0"
    >
      💾
    </span>
  );
};

export default SaveButton;
