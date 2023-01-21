import React from "react";
import Image from "next/image";
import EventCard from "../../components/Event";
import { Element } from "react-scroll";
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
    <Element name = "events">
    <div className="bg-[url('/events_bg.png')] bg-cover bg-center bg-scroll 2xl:container 2xl:mx-auto w-screen">
      <div className="bg-background/90 w-screen">
        <h1 className="ttext-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Events
        </h1>
        <div className="place-items-center  grid grid-cols-1 lg:grid-cols-2 md:gap-2">
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
    </Element>
  );
}

export default Events;
