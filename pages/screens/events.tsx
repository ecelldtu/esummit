import React from "react";
import Image from "next/image";
import EventCard from "../../components/Event";
function Events() {
  const events = [
    {
      eventName: "Event 1",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
    {
      eventName: "Event 2",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
    {
      eventName: "Event 3",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
    {
      eventName: "Event 4",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
    {
      eventName: "Event 5",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
    {
      eventName: "Event 6",
      date: "DD/MM/YY",
      imagePath: "/imagePath.png",
    },
  ];
  return (
    <div className="bg-[url('/events_bg.png')] bg-cover bg-scroll ">
      <div className="bg-background/90">
        <h1 className="ttext-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-pink p-5 pl-10">
          Events
        </h1>
        <div className="place-items-center  grid grid-cols-1 md:grid-cols-2 md:gap-2">
          {events.map((e) => {
            const { eventName, date, imagePath } = e;
            return (
              <>
                <EventCard
                  imagePath={imagePath}
                  date={date}
                  eventName={eventName}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
