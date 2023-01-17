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
    <div className = "p-2 flex flex-col items-center text-white text-poppins">
      <h2>{eventName}</h2>
      <Image className = "w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80" src={imagePath} height={200} width={200} alt="" />
      <p>{date}</p>
    </div>
  );
}

export default EventCard;
