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
    <div className="bg-[url('/123STARS.jpg')] bg-cover bg-center bg-scroll 2xl:mx-auto">
      <div className="bg-background/70 w-screen">
        <h1 className="ttext-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-pink p-5 pl-10">
          Itenary
        </h1>

        {/*======================= day 1 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16 pt-8">Day 1</h1>
          <h1 className="text-2xl font-bold text-white pl-16 ">
            4th February 2023
          </h1>

          <VerticalTimeline className="mx-auto">
            <TimeLineElement
              icon={<GiInauguration/>}
              title="Inauguration-LDS Panel 1"
              date=""
            />

            <TimeLineElement
              icon={<SiLionair />}
              title="LDS Panel-2"
              date="2010 - 2011"
            />

            <TimeLineElement
              icon={<TbSocial />}
              title="Startup Social"
              date="2008 - 2010"
            />
            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series"
              date="2006 - 2008"
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents />}
              title="Society Events / Content Creator"
              date="April 2013"
            />
            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="November 2012"
            />
          </VerticalTimeline>
        </div>

        {/*======================= day 2 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16 pt-8">Day 2</h1>
          <h1 className="text-2xl font-bold text-white pl-16 ">
            5th February 2023
          </h1>

          <VerticalTimeline className="mx-auto">
          
            <TimeLineElement
              icon={<SiLionair />}
              title="Investors Clique - 2"
              date="10:30-12:00"
            />
            <TimeLineElement
              icon={<GiMagnifyingGlass />}
              title="Case Study"
              date="2008 - 2010"
            />

            <TimeLineElement
              icon={<BsShopWindow />}
              title=" Market Competition"
              date="2008 - 2010"
            />

            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series"
              date="April 2013"
            />

            <TimeLineElement
              icon={<VscSymbolEvent />}
              title="Content Creator"
              date="Novemeber 2012"
            />

            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="2002 - 2006"
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
