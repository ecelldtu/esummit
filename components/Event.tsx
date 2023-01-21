import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import {fadeIn} from "../pages/utils/motion"


function EventCard({
  index, 
  date,
  eventName,
  imagePath,
}: {
  index: number;
  date: string;
  eventName: string;
  imagePath: string;
}) {
  return (
    <div
    // variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className = "p-4 font-poppins flex flex-col items-center text-white text-poppins hover:text-pink ease-in duration-150 ">
      <h2 className="font-semibold text-2xl py-4 hover:text-pink ease-in duration-150">{eventName}</h2>
      <Image className = "rounded-lg w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 " src={imagePath} height={200} width={200} alt="" />
      <p className="hover:text-pink ease-in duration-150">{date}</p>
    </div>
  );
}

export default EventCard;
