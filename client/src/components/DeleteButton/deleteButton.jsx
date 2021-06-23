import React from "react";

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
