import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Element } from "react-scroll";

const CurrentSponsors = () => {
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          speed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          speed: 1500,
        },
      },
    ],
  };


  const SponsorsRow1 = [
    { img: "/sponsors/1_DdRj3o7hpbNN6MllGJaktA.png" },
    { img: "/sponsors/774337-730329-icofof.jpg" },
    { img: "/sponsors/1583540113395.jpg" },
    { img: "/sponsors/1623588535920.jpg" },
    { img: "/sponsors/a40oglrdoyxf8t3vw5ap.webp" },
    { img: "/sponsors/Bosch-Logo-1981-2002.png" },
    { img: "/sponsors/coding-ninjas-logo-white.png" },
    { img: "/sponsors/download (1).jpg" },
    { img: "/sponsors/download (1).png" },
  ];

  const SponsorsRow2 = [
    { img: "/sponsors/0C7281B4-B7B5-40D4-B29E-27B58B796944 - Madhav Aggarwal.png" },
    { img: "/sponsors/download.png" },
    { img: "/sponsors/dukan.png" },
    { img: "/sponsors/Dx4I5Aan_400x400.jpg" },
    { img: "/sponsors/g8oubsl3purepi6ivqa6.webp" },
    { img: "/sponsors/gsvrp23vrur2hhwmlt670lxhbbgp.png" },
    { img: "/sponsors/HackerEarth_logo.png" },
    { img: "/sponsors/Havells-Logo.wine.png" },
    {
      img: "/sponsors/learning-while-travelling-salt-lake-city-sector-2-kolkata-educational-tour-operators-8xp4u-250.jpg",
    },
    { img: "/sponsors/parchhayi logo.jpeg" },
    { img: "/sponsors/picture.jpg" },
  ];
  return (
    <Element name="sponsors  ">
      <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
        Past Sponsors
      </h1>
      <div className=" bg-[url('/saturn.png')] bg-blend-overlay bg-background/75   bg-cover bg-center bg-no-repeat  w-screen w-9/10 flex flex-col">
        {/* ===============Row 1 ============== */}
        <Slider
          className="hidden md:flex md:justify-center md:items-center"
          {...settings}
        >
          {SponsorsRow1.map((image) => {
            return (
              <img
                key={image.img}
                width="600"
                height="600"
                src={image.img}
                alt=""
                className="w-400 lg:w-400 mx-auto m-3 p-3"
              />
            );
          })}
        </Slider>

        {/* ===============Row 2 ============== */}
        {/* <Slider className="hidden md:flex" {...settings}>
          {SponsorsRow2.map((image) => {
            return (
              <img
                key={image.img}
                width="600"
                height="600"
                src={image.img}
                alt=""
                className="w-400 lg:w-400 mx-auto m-3 p-3"
              />
            );
          })}
        </Slider> */}
      </div>
    </Element>
  );
};

export default CurrentSponsors;
