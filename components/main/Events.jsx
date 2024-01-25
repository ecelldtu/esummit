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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const myStyles = {
        height: '44px',
        width: '312px',
    };
    return (
        <div className='mb-12 md:mb-24 xl:mb-36 z-[500]' ref={ref}>
            <h1 className='text-center text-5xl md:text-8xl mb-12 md:mb-24 xl:text-9xl w-full text-white py-4 font-CyberGraph'>EVENTS</h1>
            <div className="flex h-auto items-center z-[500] justify-center">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {galleryData.map((item, index) => (
                        <motion.div
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
                                <a href={item.href} className="font-CyberGraph rounded-full my-2 py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">KNOW MORE</a>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        animate={controls}
                        initial='hidden'
                        transition={{ duration: 1 }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 60 },
                        }} className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-72 w-72 mx-auto">
                            <Image width={400} height={400} className="h-full rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/dj.jpg" alt={""} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-CyberSport my-2 text-4xl font-bold text-white">DJ VANMOONS</h1>
                            <p className="mb-3 text-lg md:text-2xl font-Para my-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>8 PM, 27 JAN
                            <p className="mb-3 text-lg md:text-2xl font-Para my-2 font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">OAT</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};

const galleryData = [
    {
        title: 'SHARK THANK',
        imageUrl: '/images/shark.jpg',
        href: "https://unstop.com/competitions/shark-tank-e-summit-24-dtu-new-delhi-869828",
        time: "11 AM, 28 JAN",
        location: "DTU CAMPUS"
    },
    {
        title: 'EXECUTE HACKATHON',
        imageUrl: '/images/hack.jpg',
        href: "/Ex",
        time: "11 AM, 28 JAN",
        location: "ONLINE AND DTU CAMPUS"
    },
    {
        title: 'Autodesk Product Design Challange',
        imageUrl: '/images/pro.jpg',
        href: "https://unstop.com/hackathons/autodesk-product-design-challaenge-e-summit-24-dtu-new-delhi-873000",
        time: "10 AM, 28 JAN ",
        location: "DTU MAIN CAMPUS"
    },
    {
        title: 'B PLAN',
        imageUrl: '/images/bplan.jpg',
        href: "https://unstop.com/competitions/b-plan-e-summit-24-dtu-new-delhi-875437/",
        time: "10 AM, 28 JAN",
        location: "ONLINE AND DTU CAMPUS"
    },
    {
        title: 'ECELL CONCLAVE',
        imageUrl: '/images/conclave.jpg',
        href: "/Conclave",
        time: " 10 AM - 4 PM, 28 JAN",
        location: "DTU MAIN CAMPUS"
    },
    {
        title: 'LDS SESSIONS',
        imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlZWNofGVufDB8fDB8fHww',
        href: "/LDS",
        time: "10:30 AM, 27 JAN",
        location: "BR AUDI"
    },
    {
        title: 'LDS WOMEN',
        imageUrl: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBzcGVha2VyfGVufDB8fDB8fHww',
        href: "/LDSW",
        time: "12 AM, 27 JAN",
        location: "BR AUDI"
    },
    {
        title: 'STARTUP SOCIAL',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl0Y2h8ZW58MHx8MHx8fDA%3D',
        href: "/",
        time: "11 AM, 28 JAN",
        location: "BR AUDI"
    },
];

export default GalleryComponent;