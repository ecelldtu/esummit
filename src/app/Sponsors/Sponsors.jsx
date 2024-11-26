"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Quotes() {

  return (
    <div className="relative mt-32 md:mt-48 md:mb-36">
      <div className='font-Nova text-white text-4xl md:text-7xl font-semibold text-center' id='Sponsors'>
        SPONSORS
      </div>
      <div className="h-auto flex items-center w-screen my-8 font-DarkerBold">
        <Marquee className="py-2 flex gap-4 my-2" speed={180}>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          {/* Repeat for all other logos */}
        </Marquee>
      </div>
      <div className="h-16 flex items-center w-screen my-8 font-DarkerBold">
        <Marquee className="py-2 flex gap-4 my-2" right direction='' speed={180}>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          <div className="h-32 my-2 w-32 flex items-center justify-center mx-24 text-white text-xl">Coming Soon</div>
          {/* Repeat for all other logos */}
        </Marquee>
      </div>
    </div>
  );
}
