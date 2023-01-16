import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Navbar />

        <div className="flex flex-col h-[600px] transparent relative justify-around pl-12">
          <div className="h-[150px] " ></div>
          {
            // a div to get precise spacing
          }
          <h1 className="text-5xl lg:text-6xl font-bold text-white pl">
            E-SUMMIT 23’
          </h1>
          <p className=" pt-6 whitespace-normal  text-sm lg:text-base flex-wrap inline-block w-[400px] h-[181px] text-white">
            Entrepreneurship Cell organises North India’s Biggest
            Entrepreneurship Summit 2023. It is a two day event wherein we start
            with Entrepreneurship Events in the morning and Cultural nights in
            the evening.
          </p>
          <h4 className="text-2xl lg:text-4xl font-bold text-white">
            4th-5th February 2023
          </h4>
          <div className="h-[150px]"></div>
        </div>

        {/* <div className=" l-[1000px] absolute">
        <Image height={500} width={500} src="/celestial_and_space.png" alt="" />
      </div> */}
      </div>
      <div className="h-50 bg-pink w-full p-7 justify-around grid grid-cols-1 lg:grid-cols-3">
        <div className=" text-center p-2">
          <h2 className="font-bold text-white text-6xl">40000+</h2>
          <p className="text-white text-xl">Footfall</p>
        </div>
        <div className=" text-center p-2">
          <h2 className="font-bold text-white text-6xl ">12</h2>
          <p className="text-white text-xl">Competitions</p>
        </div>
        <div className=" text-center p-2">
          <h2 className="font-bold text-white text-6xl ">30+</h2>
          <p className="text-white text-xl">Speakers and Artists</p>
        </div>
      </div>
    </>
  );
}

export default Home;
