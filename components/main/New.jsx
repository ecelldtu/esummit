"use client"
import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './New.css';

export default function New() {
  const triggerButtonRef = useRef(null);

  const openPopup = () => {
    triggerButtonRef.current.click();
  };

  return (
    <Popup
      trigger={
        <button
          ref={triggerButtonRef}
          className="button text-white fixed z-[800] rounded-full bg-violet-700 bottom-8 font-Para font-extrabold w-fit py-2 px-6 left-1/2 transform -translate-x-1/2"
        >
          LIVE EVENTS ⏰
        </button>
      }
      modal
      nested
      defaultOpen
      onOpen={openPopup}
    >
      {close => (
        <div className="modal-overlay z-[2000] scale-[80%] md:scale-90 top-[240px] bottom-8 font-Para font-extrabold w-fit py-2 px-6 left-1/2 transform -translate-x-1/2" onClick={close}>
          <div className="modal bg-violet-900 px-12 py-4 rounded-3xl flex flex-col items-center">
            <button className="close" onClick={close}>
              &times;
            </button>
            <h1 className="text-2xl font-extrabold font-Queensides text-white">LIVE NOW!</h1>
            <EventInfo title="SHARK TANK" link="https://unstop.com/competitions/shark-tank-e-summit-24-dtu-new-delhi-869828" />
            <EventInfo title="EXECUTE 3.0" link="https://execute3.devfolio.co/" />
            <EventInfo title="Autodesk Product Design Challange" link="https://unstop.com/hackathons/autodesk-product-design-challaenge-e-summit-24-dtu-new-delhi-873000" />
            <EventInfo title="B Plan" link="https://unstop.com/competitions/b-plan-e-summit-24-dtu-new-delhi-875437" />
          </div>
        </div>
      )}
    </Popup>
  );
}

const EventInfo = ({ title, link }) => (
  <div className="flex flex-row items-center ml-6">
    <div className="header font-light text-lg md:text-2xl font-Para text-white mt-1 uppercase">{title}</div>
    <a href={link} className="w-fit scale-[80%] ml-4 font-CyberGraph mt-2 rounded-full py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">
      REGISTER NOW
    </a>
  </div>
);