"use client";
import React from "react";
import HyperText from "../../components/magicui/hyper-text";
import Image from "next/image";

export default function Page() {
  // Updated sponsor counts for specific years
  const yearSponsorCounts = {
    2024: Array.from({ length: 42 }, (_, index) => `/Sponsors/2024/${index + 1}.png`),
    2022: Array.from({ length: 25 }, (_, index) => `/Sponsors/2022/${index + 1}.png`),
    2021: Array.from({ length: 9 }, (_, index) => `/Sponsors/2021/${index + 1}.png`),
    2020: Array.from({ length: 25 }, (_, index) => `/Sponsors/2020/${index + 1}.png`),
    // 2018: Array.from({ length: 7 }, (_, index) => `/Sponsors/2018/${index + 1}.png`),
    2015: Array.from({ length: 13 }, (_, index) => `/Sponsors/2015/${index + 1}.png`)
  };

  // Flatten the array of images and reverse it to show the most recent first
  const images = Object.values(yearSponsorCounts)
    .flat()
    .reverse();

  return (
    <div>
      <HyperText
        className="text-4xl md:text-7xl my-24 font-bold font-Nova text-white uppercase"
        text="PAST SPONSORS"
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg mx-auto bg-white/20 mb-12">
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
        </div>
      </div>
    </div>
  );
}
