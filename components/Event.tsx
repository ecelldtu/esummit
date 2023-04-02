import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
// import { FadeIn } from './../pages/utils/motion';


function EventCard({
  index, 
  date,
  eventName,
  imagePath,
  link,
}: {
  index: number;
  date: string;
  eventName: string;
  imagePath: string;
  link: string,
}) {
  return (
    <div
    // variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className = "p-4  flex flex-col items-center text-white hover:text-pink ease-in duration-150 ">
      <h2 className="font-semibold text-2xl py-4 hover:text-pink ease-in duration-150">{eventName}</h2>
      <Image 
      onClick={()=>window.open(`${link}`,'_blank')}
      className = "rounded-lg w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain" src={imagePath} height={200} width={200} alt="" />
      <p className="hover:text-pink ease-in duration-150">{date}</p>
      <button
      onClick={()=>window.open(`${link}`,'_blank')}
      className="bg-gradient-to-r from-pink to-pink2 hover:bg-white hover:bg-gradient-to-l hover:from-pink hover:to-pink2 text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Register
      </button>
    </div>
  );
}

export default EventCard;
