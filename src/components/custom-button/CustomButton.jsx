import React from "react";

import "./CustomButton.css";

const CustomButton = ({ children, ...others }) => {
  return (
    <button className="custom-button" {...others}>
      {children}
    </button>
  );
};

export default CustomButton;
