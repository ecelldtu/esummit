"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function Events() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const Dep = [
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
        { name: 'Rishi Aryan', href: '/', instagram: 'https://www.instagram.com/_rishi_aryan_/', linkedin: 'https://www.linkedin.com/in/rishi-aryan-52969a213/', image: 'https://pbs.twimg.com/profile_images/1635702166722838528/RvXEdABq_400x400.jpg' },
    ];

    return (
        <>
            <h1 className='text-center text-5xl md:text-8xl mt-16 md:mt-32 md:mb-12 xl:text-9xl w-full text-white py-4 font-CyberGraph'>EVENTS</h1>
            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 60 },
                }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                id='Events'
            >
                {Dep.map((person, index) => (
                    <div key={index} className='z-[500] max-w-sm rounded hover:scale-100 transition-all scale-90 overflow-hidden shadow-lg mx-auto'>
                        <div className='relative m-4 flex items-center align-middle justify-center px-auto'>
                            <Image alt='' src={""} width={400} height={400} className='mx-auto border-4 hover:border-violet-500 transiton-all border-white transition-all rounded-2xl bg-black object-cover' />
                            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end text-center'>
                                <a
                                    href={person.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-violet-700 hover:bg-violet-900 w-fit rounded-3xl px-6 py-2 font-Para text-xl text-white mb-4 mx-auto font-extrabold'
                                >
                                    COMING SOON
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
}
