import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineViewList } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
const options = [
  "HOME",
  "ABOUT US",
  "ITINERARY",
  "EVENTS",
  "SPONSORS",
  "CONTACT",
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" p-5 border-spacing-0 flex flex-row justify-between w-[100%] absolute m-0">
      <div>
        <Image src="/ecell_logo_white.png" width={100} height={100} alt="" />
      </div>

      <div className=" md:flex md:flex-row">
        {options.map((val) => (
          <p
            className="hidden md:flex md:text-white md:mx-2 lg:mx-4 md:text-sm lg:text-xl ease-in duration-200"
            key={options.indexOf(val)}
          >
            {val}
          </p>
        ))}
      </div>
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
        <div>{open ? <Dropdown /> : <></>}</div>
      </div>
    </nav>
  );
}

export default Navbar;

function Dropdown() {
  return (
    <div className=" flex justify-end  ">
      <ul className=" absolute ease-in duration-200">
        {options.map((val) => {
          return (
            <p
              className="my-2 hover:font-bold hover:ease-in hover:duration-100  hover:rounded-md hover:cursor-pointer text-sm text-white"
              key={options.indexOf(val)}
            >
              {val}
            </p>
          );
        })}
      </ul>
    </div>
  );
}
