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
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" p-5 border-spacing-0 flex flex-row justify-between w-[100%] m-0 sticky">
      <div>
        <Image src="/ecell_logo_white.png" width={100} height={100} alt="" />
      </div>

      <ul className=" md:flex md:flex-row list-none">
        {options.map((val) => (
          <li key={val.title}>
            <Link
              activeClass="active"
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
  );
}

export default Navbar;

function Dropdown() {
  return (
    <div className=" flex justify-end  ">
      <ul className=" absolute ease-in duration-200">
        {options.map((val) => {
          return (
            <li key={val.title}>
              <Link
                activeClass="active"
                to={val.path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="my-2 hover:font-bold hover:ease-in hover:duration-100 hover:text-pink hover:rounded-md hover:cursor-pointer text-sm text-white"
              ></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
