"use client"
import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles
import './New.css'; // Import your custom styles

export default function New() {
  useEffect(() => {
    openPopup();
  }, []);

  const openPopup = () => {
    document.getElementById('popup-trigger').click();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Popup
      trigger={<button id="popup-trigger" className="button z-[500]" style={{ display: 'none' }}> Open Modal </button>}
      modal
      nested
    >
      {close => (
        <div className="modal-overlay" onClick={close}>
          <div className="modal bg-violet-900 px-12 py-4 rounded-3xl flex flex-col items-center">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header text-4xl md:text-8xl font-CyberSport text-white"> SHARK TANK IS LIVE!</div>
            <a href="https://unstop.com/competitions/shark-tank-e-summit-24-dtu-new-delhi-869828" className="w-fit font-Para mt-2 rounded-full py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">REGISTER NOW</a>
            <div className='flex flex-col items-center'>
              <div className="header text-4xl md:text-8xl font-CyberSport text-white mt-6"> EXECUTE 3.O IS LIVE</div>
              <a href="https://execute3.devfolio.co/" className="w-fit font-Para mt-2 rounded-full py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">REGISTER NOW</a>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
