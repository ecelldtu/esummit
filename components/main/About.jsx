import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import CountCard from "./CountCard";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

export const countCardData = [
  {
    title: `Footfall`,
    count: 60000,
  },
  {
    title: `Competitons`,
    count: 10,
  },
  {
    title: `Speakers and Artists`,
    count: 25,
  },
];



const Contact = () => {
  const renderCountCards = countCardData.map((countCard, index) => {
    return <CountCard countCard={countCard} key={index} />;
  });

  return (
    <div className="w-auto flex flex-col-reverse md:flex-row-reverse md:pr-4 xl:-pr-12 -my-24">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} className="w-full h-auto md:basis-3/5 my-auto">
        <div className="w-full flex flex-col justify-start font-CyberGraph">
          {renderCountCards}
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} className="md:basis-2/5 w-screen md:mx-auto h-[480px] md:h-[600px] xl:h-[640px] md:w-[600px] xl:w-[640px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");