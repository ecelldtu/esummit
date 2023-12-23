"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image"

export default function Events() {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const Dep = [
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
        { name: 'COMING SOON', title: 'COMING SOON', image: "https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg" },
    ];
    return (
        <motion.div ref={ref}
            animate={controls}
            initial='hidden'
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
            }} className='mb-12'>
            <h1 className='text-center text-5xl mt-16 md:mt-32 md:mb-12  md:text-8xl xl:text-9xl w-full text-white py-4 font-CyberGraph'>PAST SPEAKERS</h1>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Dep.map((person, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <div className="relative m-4">
                                <Image alt='' src={""} width={400} height={400} className='rounded-2xl mx-auto bg-black object-cover' />
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                                    <h1 className='font-Queensides text-xl text-white font-extrabold mb-1 ml-4'>{person.name}</h1>
                                    <h2 className='font-Para font-bold text-xl text-violet-800 ml-4 mb-2'>{person.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </motion.div>
    )
}
