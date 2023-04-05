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
        <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
        Itinerary
        </h1>

        {/*======================= day 1 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16">Day 1</h1>
          <h1 className="text-2xl font-bold text-white pl-16 py-4">
            7th April 2023
          </h1>

          <VerticalTimeline className="mx-auto"
          >
            <TimeLineElement
              icon={<GiInauguration/>}
              title="Inauguration-LDS Panel 1 "
              date="10:30 - 12:00, BR Audi"
              description="Day 1 begins with the leadership and disruption series wherein speakers, entrepreneurs, leaders, and all those who made an impact with glorious achievements in their spectrum of work share their career journey to inspire the attendees. Top industrialists of our country impart various tips and techniques that the youth may utilize to make it big in their careers.
              "
              
              
            />

            <TimeLineElement
              icon={<SiLionair />}
              title="LDS Panel-2"
              date="12:30 - 02:00, BR Audi"
              description="Futuristic Innovations : Applications of Web 3.0, NFTs and Crypto
              "
            />

            <TimeLineElement
              icon={<SiLionair />}
              title="Web 3.0 - Summit"
              date="2:00 - 5:00"
              description="Future is shaped by visionaries, in this time of advancements listen to a panel of esteemed 
              "
            />

            <TimeLineElement
              icon={<TbSocial />}
              title="Startup Social"
              date="02:00 - 04:00"
              description="Esteemed speakers from various fields, unicorn startup founders, venture capitalists and top notch industrialists presented their perspective on the ‘ingredients it takes to make unicorns’. The panel discussion encompasses esteemed speakers and their views on redefining leadership in the disruptive era."
            />
            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series"
              date="04:00 - 05:00, OAT"
              description=" The event is an exclusive occasion where the crème de la crème shall convene at the DTU campus, with the sole intent of imparting their invaluable insights in the domain of business and technology. The coveted speakers regale the audience with their prodigious life journeys, detailing their tribulations and triumphs, culminating in their resounding success and unassailable fame."
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents />}
              title="Society Events / Content Creator"
              date="05:00 - 06:00, OAT"
              description=""
            />
            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="06:00 Onwards, OAT"
              description="To conclude Day 1 of E-Summit on a lighter note, the Comedy Night will be held. The evening begins with a short performance of a local comedian followed by the main act and concludes with an improv session with some of the top improv artists of the industry. We have had the pleasure of having numerous top comedians of India, such as Biswa Kalyan Rath, Kenny Sebastien, and Abhishek Upmanyu who have performed and exhilarated the audience with their wit and humor."
            />
          </VerticalTimeline>
        </div>

        {/*======================= day 2 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16">Day 2</h1>
          <h1 className="text-2xl font-bold text-white pl-16 py-4">
            8th April 2023
          </h1>

          <VerticalTimeline className="mx-auto">
          
            <TimeLineElement
              icon={<SiLionair />}
              title="Shark Tank"
              date="11:00 - 2:00"
              description="Day 2 marks the beginning of the most ideal showcase event that provides an avenue to thousands of startup enthusiasts to exhibit their business acumen, creativity, and innovation - The UDAAN Startupthon. One of the flagship events of E-Cell DTU, it aims to promote the spirit of Entrepreneurship.
              "
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents/>}
              title="Designathon"
              date="11:00 - 2:00"
              description="A competition for creative minds to showcase their design skills and come up with innovative solutions to real-world problems. The competition is a test of creativity, market awareness, and presentation skills. "
            />
            <TimeLineElement
              icon={<GiMagnifyingGlass />}
              title="B - Plan"
              date="11:00 - 1:00"
              description="Business Plan competition is a competition for budding entrepreneurs to showcase their business acumen and problem solving skills."
            />

            <TimeLineElement
              icon={<BsShopWindow />}
              title="Hackathon"
              date="11:00 - 2:00"
              description="To all the geeks with a knack of problem - solving, this is the event for you. The event is a test of your logical and analytical skills being put to a test to innovate and come up with a business solution."
            />

            <TimeLineElement
              icon={<GiBookCover />}
              title="Entrepreneuship Redefined"
              date="03:00 - 04:00"
              description="Amidst a line-up of speakers with great experience and expertise in their respective fields, the event will be graced by the presence of business tycoons and entrepreneurs who have made it big in their respective fields. The event will be a platform for the attendees to interact with the speakers and gain valuable insights."
            />

            <TimeLineElement
              icon={<VscSymbolEvent />}
              title="Lecture Series"
              date="04:00 - 05:00"
              description="A panel of business and corporate minds who have made it big in their respective fields will be present to share their experiences and insights with the attendees. The event will be a platform for the attendees to interact with the speakers and gain valuable insights."
              
            />

            <TimeLineElement
              icon={<BiLaugh />}
              title="Content Creator"
              date="05:00 - 06:00 "
              description="Content is the new Oil. With new geenration, new industries are coming up and it is an opportunity for you to understand how prominent content creators are making it big in the industry. "
            />

<TimeLineElement
              icon={<BiLaugh />}
              title="Singer"
              date="06:00 Onwards"
              description="Wrapping the e-summit with a beautifull note, we have a singer who will be performing and an experience to remember. "
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
