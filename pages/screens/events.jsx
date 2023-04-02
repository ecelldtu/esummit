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
      imagePath: "/startupsocials.png",
      link: "https://unstop.com/p/startup-socials-e-summit-23-dtu-new-delhi-657365",
    },
    { 
      index: 1,
      eventName: "Designathon",
      date: "8th April '23",
      imagePath: "/designathon.jpg",
      link: "https://unstop.com/p/nixi-design-a-thon-e-summit-23-dtu-new-delhi-658128",
    },
    { 
      index: 2,
      eventName: "Shark Tank",
      date: "8th April '23",
      imagePath: "/sharktank.jpg",
      link: "https://unstop.com/competitions/shark-tank-e-summit-23-dtu-new-delhi-652566",
    },
    { 
      index: 4,
      eventName: "Reel Quest",
      date: "8th April '23",
      imagePath: "/reelquest.png",
      link: "https://www.instagram.com/p/CqhzXpVJieB/?igshid=YmMyMTA2M2Y",
    },
    { 
      index: 5,
      eventName: "Hack-A-Thon",
      date: "8th April '23",
      imagePath: "/hackathonecell.png",
      link: "https://unstop.com/hackathons/web-30-hackathon-e-summit-23-dtu-new-delhi-659400",
    },
   
  ];
  return (
    <Element name = "events">
    <div className=" bg-[url('/events_bg.png')] bg-cover bg-center bg-scroll 2xl:container 2xl:mx-auto w-screen">
      <div className="bg-background/90 w-screen">
        <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Events
        </h1>
        <div className="place-items-center px-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
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
