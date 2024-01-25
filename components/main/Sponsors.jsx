"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"
import Marquee from 'react-fast-marquee';

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
        <Marquee className="py-2 flex gap-4 my-2" speed={180}>
          <Image alt="Devfolio" src="/logo/1.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/2.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/3.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/4.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/5.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Devfolio" src="/logo/6.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/7.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/8.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/9.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/10.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/11.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/12.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/13.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/14.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          {/* <Image alt="Polygon" src="/logo/15.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <Image alt="Polygon" src="/logo/16.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/17.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/18.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
        </Marquee>
      </div>
      <div className="h-16 flex items-center w-screen my-8">
        <Marquee className="py-2 flex gap-4 my-2" right direction='' speed={180}>
          <Image alt="Devfolio" src="/logo/19.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/20.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/21.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Devfolio" src="/logo/22.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/23.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/24.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Devfolio" src="/logo/25.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Replit" src="/logo/26.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/27.PNG" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/28.jpeg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          {/* <Image alt="Polygon" src="/logo/29.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" /> */}
          <Image alt="Polygon" src="/logo/30.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/31.jpg" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/32.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/33.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/34.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/35.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
          <Image alt="Polygon" src="/logo/36.png" width={128} height={128} className="h-32 my-2 w-32 object-contain mx-24" />
        </Marquee>
      </div>
    </motion.div>
  );
}
