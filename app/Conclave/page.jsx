import React from 'react'
import Image from "next/image"

export default function page() {
    return (
        <>
            <div className="w-screen h-auto py-4 fixed top-0 shadow-lg font-CyberSport shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10 z-[1000]">
                <div className="w-full h-full flex flex-row items-center justify-center md:justify-between m-auto px-[10px]">
                    <a href="/" className="h-auto w-full flex flex-row items-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={120}
                            height={80}
                            className="cursor-pointer hover:animate-slowspin mx-auto"
                        />
                    </a>
                </div>
            </div>
            <h1 className='text-center mt-24 text-5xl md:text-8xl xl:text-9xl w-full text-white py-4 font-Para'>ITINERARIES</h1>
            <p>ECell DTU extends a warm and exclusive invitation,inviting you to immerse yourself in the world ofentrepreneurship ON 28TH OF JANUARY 2024.
            </p>
            <p>Join us for an exploration of innovation,collaboration, and empowerment, where aspiringentrepreneurs from 30+ E Cell’s converge to shareideas, gain insights, and chart the course forfuture success. Your presence at E-Cell Conclaveis not just an invitation; it&lsquo;s an opportunity to bepart of a thriving community that celebrates thespirit of innovation and fosters the entrepreneurialmindset. We look forward to hosting you at thisenriching event, where possibilities unfold andconnections flourish.</p>
        </>
    )
}
