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
        variants={containerVariants}
        className='font-CyberSport text-5xl md:text-6xl mx-8 md:mx-12'
      >
        {day}
      </motion.h1>
      <motion.h1
        variants={containerVariants}
        className='font-CyberSport text-3xl md:text-4xl mx-8 md:mx-12 my-4'
      >
        {date}
      </motion.h1>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className='flex my-2 flex-col mx-4 md:mx-12 border-2 rounded-xl border-slate-200/30 py-4 px-6'>
          <div className='text-xl md:text-4xl font-extrabold font-Queensides my-2'>{item.title}</div>
          <div className='text-2xl md:text-2xl font-extrabold font-CyberGraph my-2'>{item.time}</div>
          <div className='font-Para text-xl'>{item.description}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Iteneraries() {
  const day1Data = [
    { title: 'Inauguration - Lighting the Lamp', description: 'BR AUDI', time: '9:30 AM' },
    { title: 'VC Sir’s Address ', description: 'BR AUDI', time: '9:40 AM' },
    { title: 'Other Speeches', description: 'BR AUDI', time: '9:50 AM' },
    { title: 'Keynote (Mr. Akhil Chaudary)', description: 'BR AUDI', time: '10 AM' },
    { title: 'Adobe Design-a-thon', description: 'SPS', time: '10 AM' },
    { title: 'Autodesk Product Design Challenge', description: 'DOD', time: '10 AM' },
    { title: 'Marketing Maverick', description: 'SPS', time: '10 AM' },
    { title: 'Nrityangana', description: 'BR AUDI', time: '10:25 AM' },
    { title: 'LDS Panel 1', description: 'BR AUDI', time: '10:30 AM' },
    { title: 'Autodesk Speaker', description: 'BR AUDI', time: '11:30 AM' },
    { title: 'LDS Panel 2', description: 'BR AUDI', time: '12 PM' },
    { title: 'Amit FELMS', description: 'BR AUDI', time: '1 PM' },
    { title: 'Espresso with E-Cell (Vikrant Gupta)', description: 'BR AUDI', time: '1:15 PM' },
    { title: 'Espresso with E-Cell (Vijendra Chauhan)', description: 'BR AUDI', time: '2:15 PM' },
    { title: 'Students and Cyber Security', description: 'BR AUDI', time: '2:30 PM' },
    { title: 'Parchayyi Workshop ', description: 'BR AUDI', time: '3:15 PM' },
    { title: 'Keynote (Alakh Pandey)', description: 'OAT', time: '3:30 PM' },
    { title: 'Content Creator (Amit Bhadana)', description: 'OAT', time: '4:30 PM' },
    { title: 'Vibe Society Performance', description: 'OAT', time: '5:30 PM' },
    { title: 'Comedian - Gaurav Kapoor', description: 'OAT', time: '6 PM' },
    // { title: 'Chaar Hazaari Band', description: 'OAT', time: '7 PM' },
    { title: 'DJ VANMOON', description: 'OAT', time: '8 PM' },
  ];

  const day2Data = [
    { title: 'Espresso with E-Cell (Bipin Kaul)', description: 'BR AUDI', time: '10 AM' },
    { title: 'Hackathon - Pitching Round', description: 'EDUSAT LAB', time: '10 AM' },
    { title: 'E-Cell Conclave', description: 'ELECTRICAL BUILDING OUTSIDE', time: '10 AM' },
    { title: 'Startup Social', description: 'BR AUDI', time: '11 AM' },
    { title: 'Adobe Design-a-thon - Pitching Round', description: 'SPS', time: '11 AM' },
    { title: 'Autodesk Product Design Challenge - Pitching Round', description: 'DOD', time: '11 AM' },
    { title: 'Keynote (Khalid Wani)', description: 'BR AUDI', time: '12 PM' },
    { title: 'Startup Social ', description: 'SPS', time: '12 PM' },
    { title: 'Seminar (Zebpay)', description: 'BR AUDI', time: '12:30 PM' },
    { title: 'B-Plan ', description: 'EDUSAT LAB', time: '1 PM' },
    { title: 'Shark Tank', description: 'BR AUDI', time: '1:30 PM' },
    { title: 'Keynote (AT)', description: 'OAT', time: '2:30 PM' },
    { title: 'Bhangra DTU ', description: 'OAT', time: '4:15 PM' },
    // { title: 'Keynote (Amit Jain)', description: 'OAT', time: '4:30 PM' },
    // { title: 'Keynote (Aman Gupta)', description: 'OAT', time: '5:15 PM' },
    { title: 'Autodesk Award Winning Ceremony', description: 'BR AUDI', time: '5:30 PM' },
    { title: 'Content Creator (Barkha Singh)', description: 'OAT', time: '6 PM' },
    { title: 'Madhurima', description: 'OAT', time: '7 PM' },
    { title: 'Other Socities (Outside DTU)', description: 'OAT', time: '7:30 PM' },
    { title: 'NITHIKA GANDHI', description: 'OAT', time: '8 PM' },
  ];

  return (
    <>
      <h1 className='text-center text-5xl md:text-8xl xl:text-9xl w-full text-white py-4 font-CyberGraph'>ITINERARIES</h1>
      <DayContainer day='DAY 1' date='27th January 2024' data={day1Data} />
      <DayContainer day='DAY 2' date='28th January 2024' data={day2Data} />
    </>
  );
}
