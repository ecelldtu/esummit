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
      <Image className = "w-50 h-50" src={imagePath} height={200} width={200} alt="" />
      <p>{date}</p>
    </div>
  );
}

export default EventCard;
