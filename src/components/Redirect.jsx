import React from 'react';
import './Redirect.css'; // Import the CSS file

const RedirectingAnimation = () => {
  return (
    <div className="body bg-black z-100">
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="base">
        <span></span>
        <div className="face"></div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className='text-white mt-12 mr-2 w-[160px]'>Breaking the reality</h1>
    </div>
  );
};

export default RedirectingAnimation;
