import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] fixed top-0 shadow-lg font-CyberSport shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 z-[1000000]">
      <div className="w-full h-full flex flex-row items-center justify-center md:justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={80}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-auto md:mr-[220px] xl:mr-[420px] hidden md:flex h-full text-2xl flex-row items-center justify-start mx-auto">
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
