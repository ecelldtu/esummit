import React from "react";
import TimeLineElement from "./TimeLineElement";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  MdOutlineEmojiEvents,
  MdEmojiEvents,
} from "react-icons/md";
import {GiInauguration , GiBookCover , GiMagnifyingGlass} from "react-icons/gi"
import {TbSocial} from "react-icons/tb"
import { BiLaugh } from "react-icons/bi";
import { SiLionair } from "react-icons/si";
import { VscSymbolEvent } from "react-icons/vsc";
import { BsShopWindow } from "react-icons/bs";
const Itenary = () => {
  return (
    <div className="bg-[url('https://images.hdqwalls.com/wallpapers/planet-space-mars-4k-8l.jpg')] bg-cover bg-center bg-scroll 2xl:mx-auto">
      <div className="bg-background/70 w-screen">
        <h1 className="font-poppins text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Itenary
        </h1>

        {/*======================= day 1 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16 pt-8 font-poppins">Day 1</h1>
          <h1 className="font-poppins text-2xl font-bold text-white pl-16 ">
            4th February 2023
          </h1>

          <VerticalTimeline className="mx-auto"
          >
            <TimeLineElement
              icon={<GiInauguration/>}
              title="Inauguration-LDS Panel 1"
              date="10:30 - 12:00, BR Audi"
              
            />

            <TimeLineElement
              icon={<SiLionair />}
              title="LDS Panel-2"
              date="12:30 - 02:00, BR Audi"
            />

            <TimeLineElement
              icon={<TbSocial />}
              title="Startup Social"
              date="02:00 - 04:00"
            />
            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series"
              date="04:00 - 05:00, OAT"
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents />}
              title="Society Events / Content Creator"
              date="05:00 - 06:00, OAT"
            />
            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="06:00 Onwards, OAT"
            />
          </VerticalTimeline>
        </div>

        {/*======================= day 2 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-poppins font-bold text-white pl-16 pt-8">Day 2</h1>
          <h1 className="text-2xl font-poppins font-bold text-white pl-16 ">
            5th February 2023
          </h1>

          <VerticalTimeline className="mx-auto">
          
            <TimeLineElement
              icon={<SiLionair />}
              title="Investors Clique - 2"
              date="11:00 - 12:30"
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents/>}
              title="B - Plan"
              date="11:00 - 12:30"
            />
            <TimeLineElement
              icon={<GiMagnifyingGlass />}
              title="Case Study"
              date="11:00 - 12:30"
            />

            <TimeLineElement
              icon={<BsShopWindow />}
              title=" Market Competition"
              date="12:00 - 01:30"
            />

            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series - 2"
              date="04:00 - 05:00, OAT"
            />

            <TimeLineElement
              icon={<VscSymbolEvent />}
              title="Content Creator"
              date="05:00 - 06:00, OAT"
            />

            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="06:00 Onwards, OAT"
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
