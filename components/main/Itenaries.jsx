"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const DayContainer = ({ day, date, data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay: 0.1 }}
      variants={containerVariants}
      className='flex flex-col w-full my-8 md:px-12'
      id='Itenary'
    >
      <motion.h1
        variants={itemVariants}
        className='font-CyberSport text-5xl md:text-6xl mx-8 md:mx-12'
      >
        {day}
      </motion.h1>
      <motion.h1
        variants={itemVariants}
        className='font-CyberSport text-3xl md:text-4xl mx-8 md:mx-12 my-4'
      >
        {date}
      </motion.h1>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 + index * 1 }}
          className='flex my-2 flex-col mx-4 md:mx-12 border-2 rounded-xl border-slate-200/30 py-4 px-2'
        >
          <div className='md:text-2xl font-extrabold font-Queensides my-2'>{item.title}</div>
          <div className='md:text-2xl font-extrabold font-CyberGraph my-2'>{item.time}</div>
          <div className='font-Para text-xl'>{item.description}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Iteneraries() {
  const day1Data = [
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
  ];

  const day2Data = [
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
    { title: 'COMING SOON', description: 'COMING SOON', time: 'COMING SOON' },
  ];

  return (
    <>
      <h1 className='text-center text-5xl md:text-8xl xl:text-9xl w-full text-white py-4 font-CyberGraph'>ITINERARIES</h1>
      <DayContainer day='DAY 1' date='27th January 2024' data={day1Data} />
      <DayContainer day='DAY 2' date='28th January 2024' data={day2Data} />
    </>
  );
}
