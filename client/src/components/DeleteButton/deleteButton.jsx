import React from "react";
import "./deleteButton.css";

const DeleteButton = ({ id, onDelete }) => {
  console.log(id);
  return (
    <span
      onClick={() => onDelete(id)}
      className="delete-btn"
      role="button"
      tabIndex="0"
    >
      ✗
    </span>
  );
};

export default DeleteButton;
