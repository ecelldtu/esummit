"use client";
import React from "react";
import { FocusRail, FocusRailItem } from "@/components/ui/focus-rail";

export default function PastSpeakers() {
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 text-white mx-auto text-4xl md:text-7xl mb-8 mt-[1040px] sm:mt-96 md:mb-12 font-bold font-Kalamayka uppercase">
        Past Speakers
      </h2>
      <FocusRail items={speakerItems} autoPlay={false} loop={true} />
    </div>
  );
}

const speakerItems: FocusRailItem[] = [
  {
    id: 1,
    title: "Nikhil Kamath",
    description: "Co-Founder Zerodha",
    imageSrc: "/Speaker_C/1.webp",
  },
  {
    id: 2,
    title: "Raj Shamani",
    description: "Entrepreneur & Content Creator",
    imageSrc: "/Speaker_C/2.jpg",
  },
  {
    id: 3,
    title: "Vijay Shekhar Sharma",
    description: "Founder & CEO at Paytm",
    imageSrc: "/Speaker_C/3.jpg",
  },
  {
    id: 4,
    title: "Alakh Pandey",
    description: "Founder & CEO at PhysicsWallah",
    imageSrc: "/Speaker_C/4.jpeg",
  },
  {
    id: 5,
    title: "Ankur Warikoo",
    description: "Entrepreneur & Content Creator",
    imageSrc: "/Speaker_C/10.jpeg",
  },
  {
    id: 6,
    title: "Ashneer Grover",
    description: "Co-Founder & Ex-MD at BharatPe",
    imageSrc: "/Speaker_C/5.jpg",
  },
  {
    id: 7,
    title: "Kiran Bedi",
    description: "IPS Officer",
    imageSrc: "/Speaker_C/7.jpg",
  },
];
