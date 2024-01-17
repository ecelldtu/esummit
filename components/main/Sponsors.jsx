"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"
import Marquee from 'react-fast-marquee';
import devfolio from "../../public/images/devfolio.png"
import polygon from "../../public/images/polygon.png"
import rep from "../../public/images/rep.png"

export default function Quotes() {

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 60 },
      }} className="mt-64 md:mt-80 mb-36 md:mb-48">
      <div className='text-white text-5xl md:text-8xl xl:text-9xl font-semibold text-center -mt-36 mb-12 md:mb-24 font-CyberGraph' id='Sponsors' >SPONSORS</div>
      <div className="h-auto flex items-center w-screen my-8">
        <Marquee className="py-2 flex gap-4" speed={180}>
          <Image alt="Devfolio" src={devfolio} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src={rep} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src={polygon} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Devfolio" src={devfolio} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src={rep} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src={polygon} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Devfolio" src={devfolio} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src={rep} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src={polygon} className="h-32 my-2 w-32 object-contain mx-24" />
        </Marquee>
      </div>
      <div className="h-16 flex items-center w-screen my-8">
        <Marquee className="py-2 flex gap-4" speed={180} direction="right">
          {/* <Image alt="" src={havells} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={igl} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={newdelhi} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={ntpc} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={one} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={ongc} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={unstop} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
          {/* <Image alt="" src={pvr} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <div className='text-white text-3xl font-Queensides mx-24'>COMING SOON</div>
        </Marquee>
      </div>
    </motion.div>
  );
}
