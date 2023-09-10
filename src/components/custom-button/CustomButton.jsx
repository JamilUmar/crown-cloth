import React from 'react';

import './CustomButton.css';

// Ss

const CustomButton = ({ children, isGoogleSignin, ...others }) => {
  return (
    <button
      className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
