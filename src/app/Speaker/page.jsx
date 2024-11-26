"use client"
import React from 'react'
import HyperText from '../../components/magicui/hyper-text'
import Image from "next/image"

export default function page() {

    const Dep = [
        { name: 'Alakh Pandey', title: 'CEO and Founder', image: '/Speakers/Alakh.jpeg' },
        { name: 'Ankur Warikoo', title: 'Entrepreneur and content creator', image: '/Speakers/Ankur.jpeg' },
        { name: 'Ashneer Grover', title: 'Former Managing Director of BharatPe', image: '/Speakers/Ashneer.jpg' },
        { name: 'Nikhil Kamath', title: 'Co-founder Zerodha', image: '/Speakers/Nikhil.webp' },
        { name: 'Raj Shamani', title: 'Founder House of X', image: '/Speakers/Raj.jpg' },
        { name: 'Vijay Shekhar Sharma', title: 'CEO Paytm', image: '/Speakers/Vijay.jpg' },
        { name: 'Parul Gulati', title: 'Founder Nish Hair', image: '/Speakers/Parul.webp' },
        { name: 'Vinod Dham', title: 'Founder of the Pentium Chip', image: '/Speakers/Vinod.jpg' },
        { name: 'Kiran Bedi', title: 'IPS Officer', image: '/Speakers/Kiran.jpg' },
        { name: 'Vijendra Singh', title: 'Interviewer', image: '/Speakers/Vijendra.jpeg' },
        { name: 'Vikrant Gupta', title: 'Managing Director Sports', image: '/Speakers/Vikrant.jpeg' },
        { name: 'Vandana Tolani', title: 'CEO Convanto Capital', image: '/Speakers/Vandana.jpeg' },
        { name: 'Bipin Kaul', title: 'Chief Business Officer, Paytm', image: '/Speakers/Bipin.jpeg' },
        { name: 'Utkarsh Garg', title: 'Head of Investment, Shiv Nadar Foundation', image: '/Speakers/Utkarsh.jpeg' },
        { name: 'Akhil Chaudhary', title: 'CEO and Managing Partner', image: '/Speakers/Akhil.png' },
        { name: 'Siddharth Gupta', title: 'Co-Founder and Director, Bistro57', image: '/Speakers/Siddharth.jpeg' },
        { name: 'Nitesh Singh', title: 'Co-founder BlueTea', image: '/Speakers/Nitesh.jpeg' },
        { name: 'Khalid Wani', title: 'KWCG', image: '/Speakers/Khalid.jpeg' },
        { name: 'Sudhir Kumar', title: 'CTO LLUMO AI', image: '/Speakers/Sudhir.jpeg' },
        { name: 'Ravi Mathur', title: 'Co-Founder Insurance Samadhan', image: '/Speakers/Ravi.jpg' },
        { name: 'Aayush Arora', title: 'Sr. Associate, Titan', image: '/Speakers/Aayush.png' }
    ];

    return (
        <div>
            <HyperText
                className="text-4xl md:text-7xl my-24 font-bold text-white font-Nova uppercase"
                text="PAST SPEAKERS"
            />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Dep.map((person, index) => (
                        <div key={index} className="max-w-xs w-full h-96 rounded-2xl my-4 overflow-hidden shadow-lg mx-auto">
                            <div className="relative w-full h-full">
                                <Image 
                                    alt={person.name} 
                                    src={person.image} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="bg-black" 
                                />
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                                    <h1 className='font-Nova text-xl uppercase text-white font-extrabold mb-1 ml-4 z-[400]'>{person.name}</h1>
                                    <h2 className='font-Darkerbold font-extrabold text-lg text-violet-400 z-[400] ml-4 mb-2'>{person.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
