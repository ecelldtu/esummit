"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"
import Marquee from 'react-fast-marquee';
import adobe from "../../public/images/adobe.png"
import amar from "../../public/images/amar.png"
import ayouth from "../../public/images/ayouth.png"
import bombay from "../../public/images/bombay.png"
import coding from "../../public/images/coding.png"
import digit from "../../public/images/digit.png"
import sober from "../../public/images/sober.png"
import haldiram from "../../public/images/haldiram.png"
import havells from "../../public/images/havells.png"
import igl from "../../public/images/igl.png"
import newdelhi from "../../public/images/newdelhi.jpeg"
import ntpc from "../../public/images/ntpc.png"
import one from "../../public/images/one.png"
import ongc from "../../public/images/ongc.png"
import unstop from "../../public/images/unstop.png"
import pvr from "../../public/images/pvr.png"

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
          <Image alt="" src={adobe} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={amar} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={ayouth} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={bombay} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={coding} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={digit} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={sober} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={haldiram} className="h-32 my-2 w-32 object-contain mx-24" />
        </Marquee>
      </div>
      <div className="h-16 flex items-center w-screen my-8">
        <Marquee className="py-2 flex gap-4" speed={180} direction="right">
          <Image alt="" src={havells} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={igl} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={newdelhi} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={ntpc} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={one} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={ongc} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={unstop} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="" src={pvr} className="h-32 my-2 w-32 object-contain mx-24" />
        </Marquee>
      </div>
    </motion.div>
  );
}
