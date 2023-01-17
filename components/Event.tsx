import React from "react";
import Image from "next/image";
function EventCard({
  date,
  eventName,
  imagePath,
}: {
  date: string;
  eventName: string;
  imagePath: string;
}) {
  return (
    <div className = "p-2  flex flex-col items-center text-white text-poppins hover:text-pink ease-in duration-150 ">
      <h2 className="font-semibold text-2xl py-4 hover:text-pink ease-in duration-150">{eventName}</h2>
      <Image className = "w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 " src={imagePath} height={200} width={200} alt="" />
      <p className="hover:text-pink ease-in duration-150">{date}</p>
    </div>
  );
}

export default EventCard;
