"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
export default function Quotes() {
   // Updated sponsor counts for specific years
   const yearSponsorCounts = {
    2025: Array.from({ length: 32 }, (_, index) => `/Sponsors/2025/${index + 1}.png`),
  };

  // Flatten the array of images and reverse it to show the most recent first
  const images = Object.values(yearSponsorCounts)
    .flat()
    .reverse();
  const imagesR = images.reverse();
  return (
    <div className="relative mt-32 md:mt-48 md:mb-36">
      <div className='font-Nova text-white text-4xl md:text-7xl font-semibold text-center' id='Sponsors'>
        SPONSOR
      </div>
      <div className="h-auto flex items-center w-screen my-8 font-DarkerBold">
        <Marquee className="py-2 flex gap-4 my-2" speed={180}>
          {images.map((image, index) => (
                      <div key={index} className="rounded overflow-hidden shadow-lg mx-auto mb-12">
                        <div className="relative w-32 h-32 m-2 md:w-64 md:h-64 flex items-center justify-center">
                          <Image
                            alt=""
                            src={image}
                            width={160}  // Set width for mobile
                            height={160} // Set height for mobile
                            className="rounded-2xl object-contain md:w-40 md:h-40" // Larger size on tablets/desktops
                          />
                        </div>
                      </div>
                    ))}
          {/* Repeat for all other logos */}
        </Marquee>
      </div>
      <div className="h-16 flex items-center w-screen my-8 font-DarkerBold">
        <Marquee className="py-2 flex gap-4 my-2" right direction='' speed={180}>
        {imagesR.map((image, index) => (
                      <div key={index} className="rounded overflow-hidden  mb-12">
                        <div className="relative w-32 h-32 m-2 md:w-64 md:h-64 flex items-center justify-center">
                          <Image 
                            alt=""
                            src={image}
                            width={160}  // Set width for mobile
                            height={160} // Set height for mobile
                            className="rounded-2xl object-contain md:w-40 md:h-40" // Larger size on tablets/desktops
                          />
                        </div>
                      </div>
                    ))}
        </Marquee>
      </div>
    </div>
  );
}
