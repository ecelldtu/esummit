"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { HemisphereLight } from "three/src/Three.js";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 text-white mx-auto text-4xl md:text-7xl mb-8 mt-96 md:mt-48 md:mb-0 font-bold font-Nova">
        Past Speakers
      </h2>
      <a></a>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Co-Founder Zerodha",
    title: "Nikhil Kamath",
    src: "/Speaker_C/1.webp",
    content: "",
  },
  {
    category: "Entrepreneur & Content Creator",
    title: "Raj Shamani",
    src: "/Speaker_C/2.jpg",
    content: "",
  },
  {
    category: "Founder & CEO at Paytm",
    title: "Vijay Shekhar Sharma",
    src: "/Speaker_C/3.jpg",
    content: "",
  },
  {
    category: "Founder & CEO at PhysicsWallah",
    title: "Alakh Pandey",
    src: "/Speaker_C/4.jpeg",
    content: "",
  },
  {
    category: "Entrepreneur & Content Creator",
    title: "Ankur Warikoo",
    src: "/Speaker_C/10.jpeg",
    content: "",
  },
  {
    category: "Co-Founder & Ex-MD at BharatPe",
    title: "Ashneer Grover",
    src: "/Speaker_C/5.jpg",
    content: "",
  },
  {
    category: "IPS Officer",
    title: "Kiran Bedi",
    src: "/Speaker_C/7.jpg",
    content: "",
  },
  // {
  //   category: "Actress & Entrepreneur",
  //   title: "Parul Gulati",
  //   src: "/Speaker_C/6.jpg",
  //   content: "",
  // },
  // {
  //   category: "Senior Sports Journalist",
  //   title: "Vikrant Gupta",
  //   src: "/Speaker_C/8.jpeg",
  //   content: "",
  // }
];
