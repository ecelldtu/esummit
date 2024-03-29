"use client"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isBannerVisible, setBannerVisibility] = useState(true);

  const hideBanner = () => {
    setBannerVisibility(false);
  };

  return (
    <div className="w-screen h-auto py-4 fixed top-0 shadow-lg font-CyberSport shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10 z-[1000]">
      <div className={`w-full ${isBannerVisible ? '' : ''} h-full md:pr-[120px] lg:pr-[100px] xl:pr-[120px] flex flex-row items-center justify-center md:justify-between m-auto px-[10px]`}>
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={80}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-auto hidden md:flex h-full text-2xl flex-row items-center justify-start mx-auto">
          <div className="flex items-center justify-between uppercase w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#About" className="cursor-pointer mx-6 hover:text-violet-400 transition-all">
              About Us
            </a>
            <a href="#Itenary" className="cursor-pointer mx-6 hover:text-violet-400 transition-all">
              Itinerary
            </a>
            <a href="#Events" className="cursor-pointer mx-6 hover:text-violet-400 transition-all">
              Events
            </a>
            <a href="#Sponsors" className="cursor-pointer mx-6 hover:text-violet-400 transition-all">
              Sponsors
            </a>
            <a href="#Footer" className="cursor-pointer mx-6 hover:text-violet-400 transition-all">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
