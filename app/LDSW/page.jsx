"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image"
import Hero from "../../components/main/Hero"
import Navbar from "../../components/main/Navbar"

export default function Events() {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const Dep = [
        { name: 'Anupriya Agarwal', title: 'Brand Strategist', image: "/images/anu.jpeg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "" },
    ];
    return (
        <>
            <Navbar />
            <motion.div
                animate={controls}
                initial='visible'
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 60 },
                }} className='mb-12'>
                <h1 className='text-center text-4xl mt-32 md:mb-12 md:text-7xl xl:text-8xl w-full text-white py-4 font-CyberGraph'>WOMEN LDS PANEL</h1>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Dep.map((person, index) => (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                                <div className="relative m-4">
                                    <Image alt='' src={person.image} width={400} height={400} className='rounded-2xl mx-auto bg-black object-cover' />
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                                        <h1 className='font-Queensides text-xl text-white font-extrabold mb-1 ml-4 z-[400]'>{person.name}</h1>
                                        <h2 className='font-Para font-extrabold text-xl text-violet-300 z-[400] ml-4 mb-2'>{person.title}</h2>
                                    </div>
                                    <style jsx>{`
                            .relative::after {
                              content: "";
                              position: absolute;
                              left: 0;
                              bottom: 0;
                              width: 100%;
                              height: 120px; /* Adjust the height of the shadow as needed */
                              background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
                            }
                          `}</style>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </motion.div>
        </>
    )
}
