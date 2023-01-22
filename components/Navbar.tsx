import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
const options = [
  { title: "HOME", path: "/" },
  { title: "ABOUT US", path: "about" },
  { title: "ITINERARY", path: "itenary" },
  { title: "EVENTS", path: "events" },
  { title: "SPONSORS", path: "about" },
  { title: "CONTACT", path: "footer" },
];

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "ABOUT US", path: "about" },
  { title: "ITINERARY", path: "itenary" },
  { title: "EVENTS", path: "events" },
  { title: "SPONSORS", path: "about" },
  { title: "CONTACT", path: "footer" },
]


function Navbar({navLinkId, scrollToId}) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="bg border-gray-200 px-2 flex flex-wrap items-center justify-between mx-auto sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="flex items-center h-6 mr-3 sm:h-9">
        <Image src="/ecell_logo_white.png" width={100} height={100} alt="" />
      </div>

      <ul className=" md:flex md:flex-row list-none">
        {options.map((val) => (
          <li
          activeclassName="active"
          key={val.title}>
            <Link
              
              to={val.path}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hidden md:flex hover:text-pink cursor-pointer  md:text-white md:mx-2 lg:mx-4 md:text-sm lg:text-xl ease-in duration-200"
            >{val.title}</Link>
          </li>
        ))}
      </ul>
      <div></div>
      <div className=" md:hidden">
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className={"text-white"}
        >
          {open ? (
            <AiOutlineArrowUp size={25} />
          ) : (
            <HiOutlineViewList size={25} />
          )}
        </button>
        {open ? <Dropdown /> : null}
      </div>
    </nav>
   </>
  );
}

export default Navbar;

function Dropdown() {
  return (

    <div className="flex justify-end">
      <ul className=" absolute ease-in duration-200 bg-pink py-1 px-1 leading-tight  rounded border-radius-90%  bg-pink text-base z-10 list-none divide-y divide-gray-100 rounded shadow ">
     {options.map((val) => {
          return (
            <li 
            activeClass="active"
            key={val.title}>
              <Link
                
                to={val.path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="dropdown-toggle px-6 p-4  text-white font-medium text-base
                leading-tight
                uppercase
               bg-gray-920
                rounded
                shadow-md
                hover:bg-pink2
                transition
                duration-150
                ease-in-out
                flex
                items-center
                whitespace-nowrap
              "
              >{val.title}</Link>
            </li>
          );
        })}
      </ul>

        </div>
    
      
  );
}