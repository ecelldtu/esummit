import React from "react";
import Image from "next/image";

function Navbar() {
  const options = [
    "HOME",
    "ABOUT US",
    "ITINERARY",
    "EVENTS",
    "SPONSORS",
    "CONTACT",
  ];
  return (
    <nav className="transparent p-5 flex flex-row justify-between absolute w-full">
      <div>
        <Image src="/ecell_logo_white.png" width={100} height={100} alt="" />
      </div>

      <div className="flex flex-row">
        {options.map((val) => (
          <p className="text-white mx-4" key={options.indexOf(val)}>
            {val}
          </p>
        ))}
      </div>

      <div></div>
    </nav>
  );
}

export default Navbar;
  // <div className="flex flex-row bg-background">
    //   <div className="flex flex-col justify-between h-100 bg-background m-0">
    //     <h1 className = "text-white font-bold text-2xl">E-SUMMIT 23</h1>

    //     <p className = "text-white  text-xl">
    //       Entrepreneurship Cell organises North India`s biggest Entrepreneurship
    //       Summit 2023. It is a two day event wherein we start with
    //       Entrepreneurship events in the morning and Cultural nights in the
    //       evening.
    //     </p>

    //     <h3 className = "text-white font-bold text-2xl">
    //         4th-th February 2023
    //     </h3>
    //   </div>
    //   <div className="m-0 h-1000 w-1000" >
    //     <Image src="/celestial_and_space.png" height={1000}  width={1000} alt =""/>
    //   </div>
    // </div>
    <></>