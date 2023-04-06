import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Element } from "react-scroll";

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

  // const SponsorsRow1 = [
  //   { img: "https://drive.google.com/uc?export=view&id=1_S3vP2t3fyD-qLl3h032KOOEwHHPPRZa" },
  //   { img: "https://drive.google.com/uc?export=view&id=1-guOLcsHvbbG-NBoJnPq5KvV0Ssfd4xd" },
  //   { img: "https://drive.google.com/uc?export=view&id=1Cn0EpXT8aITW4cCnXkFl4zD0znhHiu8l" },
  //   { img: "https://drive.google.com/uc?export=view&id=1hZVZnPPwS1V6muATcQT4d2fUN-HDQ9Qb" },
  //   { img: "https://drive.google.com/uc?export=view&id=1o_4RwhltKiNBsPK_h4uBq5FHaIzsqo89" },
  //   { img: "https://drive.google.com/uc?export=view&id=1e-LjkafIRHGMxHpWw2cyKZrAKGpI4QK2" },
  //   { img: "https://drive.google.com/uc?export=view&id=1NOxH-lo06pFMNOVR-cO4_1uYU0er3ktA" },
  //   { img: "https://drive.google.com/uc?export=view&id=1ofkwURbfEXS2uHzGNES9bxnnJnFmh9TG" },
  //   { img: "https://drive.google.com/uc?export=view&id=1hO4ZQ_Rkkp7C0f1Zw1i2p6UVK5FP1VN6" },

  // ];
  const SponsorsRow1 = [
    { img: "/sponsor/0C7281B4-B7B5-40D4-B29E-27B58B796944 - Madhav Aggarwal.png" },
    { img: "/sponsor/2ED3D778-F7D8-4E37-9841-D79FD6E9AA3F - Apara Maity.jpeg" },
    { img: "/sponsor/3AD0C1CA-10D5-436C-B1CB-37BDE5AF100F - Apara Maity.jpeg" },
    { img: "/sponsor/0307501C-9386-4F3D-A267-F38292BE2B46 - Apara Maity.jpeg" },
    { img: "/sponsor/1676886021-91f4f523c333760d - Madhav Aggarwal.webp" },
    { img: "/sponsor/1674700874431 - Anshul s.png" },
    { img: "/sponsor/Adobe-logo - Madhav Aggarwal.png" },
    { img: "/sponsor/AU LOGO (1)_page-0001 - Rishabh Chandra.jpg" },
    { img: "/sponsor/Ayouthveda logo - Akash Jindal.png" },
    { img: "/sponsor/download - Utkarsh Sharma.png" },
    { img: "/sponsor/GMC LogoS - Utkarsh Roy.png" },
    // 
    { img: "/sponsor/IGL LOGO - Utkarsh Roy.png" },
    { img: "/sponsor/images - Madhav Aggarwal.png" },
    { img: "/sponsor/images (1) - Utkarsh Sharma.png" },
    { img: "/sponsor/tracker- Madhav Aggarwal.webp" },
  ];
  // const SponsorsRow2 = [
  //   { img: "https://drive.google.com/uc?export=view&id=1MbXQahRojb3QUOON4uW22FTuDHOigIQ9" },
  //   { img: "https://drive.google.com/uc?export=view&id=10QG1DUPnc_q9KcVpWtp64YKpn_RMv8DD" },
  //   { img: "https://drive.google.com/uc?export=view&id=12zGeMY5GpPl-MavYRu4f2k_-2wcU9dlJ" },
  //   { img: "https://drive.google.com/uc?export=view&id=1iyJ5elf2unxGca9l0KnJf1cy4vyJhzpm" },
  //   { img: "https://drive.google.com/uc?export=view&id=1BDrt5ovYtFgqsNgaIXuX3_7kH7pGzoBE" },
  //   { img: "https://drive.google.com/uc?export=view&id=1L39ENgeiFQCN8hU6oMUdb5OHVgsMm6uH" },
  //   { img: "https://drive.google.com/uc?export=view&id=1kugNbsu-xmnDE6MbKz_kwDxYny5Hi73q" },
  //   { img: "https://drive.google.com/uc?export=view&id=10laVJnviufJ5ifNSUNVom-ssBSmk_fbb" },
  //   { img: "https://drive.google.com/uc?export=view&id=1TfJ5FLDdvWAVr_yzugt7eloV8WoykvG7" },
  //   { img: "https://drive.google.com/uc?export=view&id=1sEtueZQtY4V-AMHCIx_HEUZIu_swQITb" },
  //   { img: "https://drive.google.com/uc?export=view&id=1uBIk24kdUImC5S26iBjvlhXzR7b8ootd" },

  // ];
  const SponsorsRow2 = [
    { img: "/sponsor/National_Internet_Exchange_of_India_logo.svg - Madhav Aggarwal.png" },
    { img: "/sponsor/new-logo-zeeve (1) - Utkarsh Roy.png" },
    { img: "/sponsor/PrepInsta_Logo - Madhav Aggarwal.png" },
    { img: "/sponsor/Sober logo - Akash Jindal.jpeg" },
    { img: "/sponsor/stackos logo - Utkarsh Roy.png" },
    { img: "/sponsor/WhatsApp Image 2023-04-04 at 22.25.55 - Utkarsh Roy.jpeg" },
    { img: "/sponsor/Wox Logo - Akash Jindal.jpeg" },
    { img: "/sponsor/pcmb logo - Akash Jindal.jpg" },
    {
      img: "/sponsor/Sober logo - Akash Jindal.jpeg",
    },
    { img: "/sponsor/2ED3D778-F7D8-4E37-9841-D79FD6E9AA3F - Apara Maity.jpeg" },

  ];
  return (
    <Element name="sponsors">
      <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
        Sponsors
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
        <Slider className="hidden md:flex" {...settings}>
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
        </Slider>
      </div>
    </Element>
  );
};

export default Sponsors;
