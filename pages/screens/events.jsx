import React from "react";
import Image from "next/image";
import EventCard from "../../components/Event";
import { Element } from "react-scroll";
function Events() {
  const events = [
    { 
      index: 3,
      eventName: "Startup Socials",
      date: "7th April '23",
      imagePath: "/startupsocials.jpg",
      link: "https://unstop.com/p/startup-socials-e-summit-23-dtu-new-delhi-657365",
    },
    { 
      index: 1,
      eventName: "Designathon",
      date: "8th April '23",
      imagePath: "/designatthon.jpg",
      link: "https://unstop.com/p/nixi-design-a-thon-e-summit-23-dtu-new-delhi-658128",
    },
    { 
      index: 2,
      eventName: "Shark Tank",
      date: "8th April '23",
      imagePath: "/sharktank.jpg",
      link: "https://unstop.com/competitions/shark-tank-e-summit-23-dtu-new-delhi-652566",
    },
   
  ];
  return (
    <Element name = "events">
    <div className=" bg-[url('/events_bg.png')] bg-cover bg-center bg-scroll 2xl:container 2xl:mx-auto w-screen">
      <div className="bg-background/90 w-screen">
        <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Events
        </h1>
        <div className="place-items-center px-3 grid ">
          {events.map((e) => {
            const { index, eventName, date, imagePath, link } = e;
            return (
              <>
                <EventCard
                link={link}
                key={index}
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
