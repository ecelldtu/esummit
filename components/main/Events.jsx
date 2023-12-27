"use client"
import React, { useRef, useEffect } from 'react';
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
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
                    {galleryData.map((item, index) => (
                        <motion.div ref={ref}
                            animate={controls}
                            initial='hidden'
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 60 },
                            }} key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <Image width={400} height={400} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">{item.title}</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.description}</p>
                                <button className="rounded-full py-2 px-3.5 font-com text-base capitalize bg-violet-600 text-white shadow shadow-black/60">Know More</button>
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
        title: 'Beauty',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
        imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        title: 'Beyond Builder',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
        imageUrl: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
        title: 'Shooting Star',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.',
        imageUrl: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
];

export default GalleryComponent;
