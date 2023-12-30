"use client"
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const GalleryComponent = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <h1 className='text-center text-5xl md:text-8xl mt-16 md:mt-32 md:mb-12 xl:text-9xl w-full text-white py-4 font-CyberGraph'>EVENTS</h1>
            <div className="flex h-auto items-center z-[500] justify-center">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {galleryData.map((item, index) => (
                        <motion.div ref={ref}
                            animate={controls}
                            initial='hidden'
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 60 },
                            }} key={index} className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-72 w-72 mx-auto">
                                <Image width={400} height={400} className="h-full rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.imageUrl} alt={""} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-CyberSport my-2 text-4xl font-bold text-white">{item.title}</h1>
                                <p className="mb-3 text-lg font-Para my-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.time}</p>
                                <p className="mb-3 text-lg font-Para my-2 font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.location}</p>
                                <a href={item.href} className="font-CyberGraph rounded-full my-2 py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">Know More</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>

    );
};

const galleryData = [
    {
        title: 'ECELL CONCLAVE',
        imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: "/Conclave",
        time: "28 JAN, 10 AM - 4 PM",
        location: "DTU MAIN CAMPUS"
    },
    {
        title: 'COMING SOON',
        imageUrl: '',
        href: "/",
        time: "COMING SOON",
        location: "COMING SOON"
    },
    {
        title: 'COMING SOON',
        imageUrl: '',
        href: "/",
        time: "COMING SOON",
        location: "COMING SOON"
    },
];

export default GalleryComponent;