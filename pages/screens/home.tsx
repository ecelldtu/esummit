import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
function Home() {
  return (
    <Element name="home">
      <div className=" bg-url['/celestial_and_space.png']   md:bg-transparent max-w-full aspect-auto ">
        {/* laptop view landing page */}
        <div className=" flex-row hidden md:flex font-poppins">
          <div className="flex flex-row justify-between w-full">
            <div className=" flex flex-col lg:h-[550px] mx-auto transparent relative justify-between px-auto pr-3">
              <div className="h-[150px] "></div>

              <h1 className="text-5xl lg:text-6xl mx-auto font-bold text-white pl ease-in duration-200">
                E-SUMMIT 23’
              </h1>
              <p className=" pt-6 break-normal text-sm lg:text-base flex-wrap inline-block w-[300px] h-[181px] text-white ease-in duration-200">
                Entrepreneurship Cell organises North India’s Biggest
                Entrepreneurship Summit 2023. It is a two day event wherein we
                start with Entrepreneurship Events in the morning and Cultural
                nights in the evening.
              </p>
              <h4 className="text-2xl lg:text-4xl hover:text-pink font-bold text-white ease-in duration-200">
                4th-5th February 2023
              </h4>
              <div className="h-[150px]"></div>
            </div>
          </div>

          <div className=" h-full">
            <img className="h-full " src="/celestial_and_space.png" alt="" />
          </div>
        </div>

        {/* mobile view landing page */}
        <div className="flex-row md:hidden flex bg-[url('/celestial_and_space.png')] bg-center bg-cover">
        <div className="flex flex-row justify-between w-full">
            <div className=" flex flex-col lg:h-[550px] mx-auto transparent relative justify-between px-auto pr-3">
              <div className="h-[150px] "></div>

              <h1 className="text-5xl lg:text-6xl mx-auto font-bold text-white pl ease-in duration-200">
                E-SUMMIT 23’
              </h1>
              <p className=" pt-6 break-normal text-sm lg:text-base flex-wrap inline-block w-[300px] h-[181px] text-white ease-in duration-200">
                Entrepreneurship Cell organises North India’s Biggest
                Entrepreneurship Summit 2023. It is a two day event wherein we
                start with Entrepreneurship Events in the morning and Cultural
                nights in the evening.
              </p>
              <h4 className="text-2xl lg:text-4xl hover:text-pink font-bold text-white ease-in duration-200">
                4th-5th February 2023
              </h4>
              <div className="h-[150px]"></div>
            </div>
          </div>
        </div>

        <div className="m-0 h-30 w-screen md:h-40 lg:h-50 bg-gradient-to-tr from-pink1 to-pink2  p-7 justify-around grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ease-in duration-200">
          <div className=" text-center md:p-2">
            <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl">
              <CountUp start={0} end={40000} duration={2.25} /> +
            </h2>
            <p className="text-white text-2xl">Footfall</p>
          </div>
          <div className=" text-center md:p-2">
            <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl ">
              <CountUp start={0} end={12} duration={2} /> +
            </h2>
            <p className="text-white text-2xl">Competitions</p>
          </div>
          <div className=" text-center md:p-2">
            <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl ">
              <CountUp start={0} end={30} duration={2} /> +
            </h2>
            <p className="text-white text-2xl">Speakers and Artists</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Home;
