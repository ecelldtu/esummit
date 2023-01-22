import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { Element } from 'react-scroll';


const Sponsors = () => {
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
          speed:1500,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 1500,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          speed: 1500,
        }
      }
    ]
  };

  const Sponsors = [
    {img: "/about.png"},
    {img: "/events_bg.png"},
    {img: "/about.png"},
    {img: "/events_bg.png"},
    {img: "/about.png"},
    {img: "/events_bg.png"},
    {img: "/events_bg.png"},
    {img: "/about.png"},
    {img: "/events_bg.png"},
  ]
  return (
    <Element name = "sponsors">
<h1 className="font-poppins text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Past Sponsors
        </h1>
    <div className="w-9/10 flex flex-col">

    {/* ===============Row 1 ============== */}
    <Slider className="hidden md:flex" {...settings}>

    {
      Sponsors.map((image)=> {
        return (
          <Image
          key={image.img}
                width="300"
                height="300"
                src={image.img}
                alt=""
                className="w-400 lg:w-400 mx-auto m-3 p-3"
              />
        )
      })
    }
   
    </Slider>

   
{/* ===============Row 2 ============== */}
    <Slider className="hidden md:flex" {...settings}>

    {
      Sponsors.map((image)=> {
        return (
          <Image
          key={image.img}
                width="300"
                height="300"
                src={image.img}
                alt=""
                className="w-400 lg:w-400 mx-auto m-3 p-3"
              />
        )
      })
    }
   
    </Slider>

    </div>
    </Element>
  );
}

export default Sponsors
