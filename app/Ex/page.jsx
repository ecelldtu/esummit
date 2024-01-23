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
        { name: 'akshay kumar', title: 'Group President (Corporate Affairs), Godrej', image: "/images/ak.jpg" },
        { name: 'mahak', title: 'Deputy Director/DIG at Central Bureau of Investigation, India', image: "/images/ma.jpg" },
        { name: 'arnav', title: 'CTO Paytm', image: "/images/ar.png" },
        { name: 'jaskrit singh', title: 'CEO Springwel Mattress, Guardian Pharmacy and Bella Vita Luxury ', image: "/images/ja.jpg" },
        { name: 'manav gupta', title: 'Founder at Excitel Broadband', image: "/images/man.jpg" },
        { name: 'taranjot singh', title: 'Founder at Excitel Broadband', image: "/images/ta.png" },
        { name: 'purvesh gupta', title: 'Founder at Excitel Broadband', image: "/images/pr.jpg" },
        { name: 'devanshu saxena', title: 'Founder at Excitel Broadband', image: "/images/de.jpg" },
        { name: 'avnish', title: 'Founder at Excitel Broadband', image: "/images/av.jpg" },
        { name: 'anuj garg', title: 'Founder at Excitel Broadband', image: "/images/.jpg" },
        { name: 'balachandra pulavarthi', title: 'Founder at Excitel Broadband', image: "/images/.jpg" },
        { name: 'shashank tiwari', title: 'Founder at Excitel Broadband', image: "/images/.jpg" },
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
                <h1 className='text-center text-4xl mt-32 md:mb-12 md:text-7xl xl:text-8xl w-full text-white py-4 font-CyberGraph'>MENTORS</h1>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Dep.map((person, index) => (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                                <div className="relative m-4">
                                    <Image alt='' src={person.image} width={400} height={400} className='rounded-2xl mx-auto bg-black object-cover' />
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                                        <h1 className='font-Queensides text-xl text-white font-extrabold mb-1 ml-4 z-[400]'>{person.name}</h1>
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
            <div className="container p-4 text-white mx-4 pr-12 xl:pr-0 md:mx-20 xl:mx-12">
                <h1 className='text-white font-CyberGraph text-3xl md:text-6xl'>PROBLEM STATMENTS</h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">AI-based Cryptocurrency Recommendation Algorithm:</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>
                        Design an intelligent algorithm that leverages artificial intelligence to analyze historical data, market trends, and user preferences to provide accurate and personalized recommendations for investing in cryptocurrencies. The algorithm should adapt to dynamic market conditions and continuously improve its predictions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">Trending Cryptocurrency Front-End Application:</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>
                        Develop a user-friendly desktop or mobile application that visually displays real-time trends in the cryptocurrency market, similar to https://cryptobubbles.net/. The application should provide comprehensive information on trending cryptocurrencies, market capitalization, price movements, and other relevant data, enhancing user experience and facilitating informed decision-making.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">Real-World Asset Tokenisation Platform:</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>
                        Create a platform that enables the tokenization of real-world assets, allowing users to easily convert physical assets (real estate, art, commodities) into digital tokens on a blockchain. The platform should address regulatory compliance, provide a seamless user interface, and ensure transparent and secure transactions for both asset issuers and investors.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">Decentralized Social Media with Smart Contract Monetization:</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>
                        Design a decentralized social media platform that empowers users to control and monetize their content through smart contracts. Implement a system where content creators receive direct compensation based on engagement, and users can interact with content in a transparent and decentralized manner. Ensure privacy, censorship resistance, and seamless integration of smart contracts for secure transactions between users and content creators.
                    </p>
                </section>
            </div>
        </>
    )
}
