import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import{ motion }from "framer-motion";
import { NavVariants, SlideIn, StaggerContainer, TextVariant, TextContainer } from './../../utils/Motion';
// bg-[url('/crowd.png')] bg-cover bg-center bg-no-repeat bg-opacity-50 style={{ backgroundImage: `url(${backgroundImage})`,opacity: 1}}
export default function About() {
  return (
    <Element name = "about">
    
    <div className="bg-[url('/celestial_and_space.png')] bg-background/60 bg-cover bg-center bg-no-repeat w-screen min-h-fit py-12"  style={{ marginLeft: 0, overflow: "hidden" }} >
    

    <section class=" px-5 py-24 mx-auto section-no-overflow " style={{ height: "calc(100vh - 4rem)" }}>
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <div class="flex flex-col text-center w-full mb-12 ">
      <motion.div
            variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="">
 <div class="">
              <h1
              className="text-3xl lg:text-6xl font-bold leading-9 text-white dark:text-white pb-4    ">
             <h1 className="">
             <span>ABOUT US</span>
              
              
              
              </h1> 
              </h1>
              </div>
              <motion.p
              variants={TextVariant(0.6)}
              className="font-normal lg:text-l text-base leading-6 text-white dark:text-white w-4/5 text-center mx-auto my-4">
              E-Cell DTU presents its annual flagship event E-SUMMIT'23! One of the biggest Entrepreneurship summits in India, E-Summit will bring to you a series of enthralling events, from panel discussions with distinguished dignitaries to exciting competitions like B-plan, Case study, hackathon, along with a spectacular band night and comedy night, the level of grandeur will be unparalleled!
              </motion.p>
        </motion.div>

       <div className="video-container">
       <iframe
       width="560"
       height="315"
       src="https://www.youtube.com/embed/TQ1sUYDVRmY?controls=1&amp;start=38&autoplay=1&showinfo=0&controls=0"
       title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen
     ></iframe>
      </div>
      </div>
      
        
      </div>
    
  </section>
  </div>
    </Element>
  );
}