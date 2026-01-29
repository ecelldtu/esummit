"use client"
import React from 'react'
import HyperText from '../../components/magicui/hyper-text'
import { FocusRail } from '../../components/ui/focus-rail'

export default function page() {

    const speakerItems = [
        { id: 1, title: 'Alakh Pandey', description: 'CEO and Founder', imageSrc: '/Speakers/Alakh.jpeg' },
        { id: 2, title: 'Ankur Warikoo', description: 'Entrepreneur and content creator', imageSrc: '/Speakers/Ankur.jpeg' },
        { id: 3, title: 'Ashneer Grover', description: 'Former Managing Director of BharatPe', imageSrc: '/Speakers/Ashneer.jpg' },
        { id: 4, title: 'Nikhil Kamath', description: 'Co-founder Zerodha', imageSrc: '/Speakers/Nikhil.webp' },
        { id: 5, title: 'Raj Shamani', description: 'Founder House of X', imageSrc: '/Speakers/Raj.jpg' },
        { id: 6, title: 'Vijay Shekhar Sharma', description: 'CEO Paytm', imageSrc: '/Speakers/Vijay.jpg' },
        { id: 7, title: 'Parul Gulati', description: 'Founder Nish Hair', imageSrc: '/Speakers/Parul.webp' },
        { id: 8, title: 'Vinod Dham', description: 'Founder of the Pentium Chip', imageSrc: '/Speakers/Vinod.jpg' },
        { id: 9, title: 'Kiran Bedi', description: 'IPS Officer', imageSrc: '/Speakers/Kiran.jpg' },
        { id: 10, title: 'Vijendra Singh', description: 'Interviewer', imageSrc: '/Speakers/Vijendra.jpeg' },
        { id: 11, title: 'Vikrant Gupta', description: 'Managing Director Sports', imageSrc: '/Speakers/Vikrant.jpeg' },
        { id: 12, title: 'Vandana Tolani', description: 'CEO Convanto Capital', imageSrc: '/Speakers/Vandana.jpeg' },
        { id: 13, title: 'Bipin Kaul', description: 'Chief Business Officer, Paytm', imageSrc: '/Speakers/Bipin.jpeg' },
        { id: 14, title: 'Utkarsh Garg', description: 'Head of Investment, Shiv Nadar Foundation', imageSrc: '/Speakers/Utkarsh.jpeg' },
        { id: 15, title: 'Akhil Chaudhary', description: 'CEO and Managing Partner', imageSrc: '/Speakers/Akhil.png' },
        { id: 16, title: 'Siddharth Gupta', description: 'Co-Founder and Director, Bistro57', imageSrc: '/Speakers/Siddharth.jpeg' },
        { id: 17, title: 'Nitesh Singh', description: 'Co-founder BlueTea', imageSrc: '/Speakers/Nitesh.jpeg' },
        { id: 18, title: 'Khalid Wani', description: 'KWCG', imageSrc: '/Speakers/Khalid.jpeg' },
        { id: 19, title: 'Sudhir Kumar', description: 'CTO LLUMO AI', imageSrc: '/Speakers/Sudhir.jpeg' },
        { id: 20, title: 'Ravi Mathur', description: 'Co-Founder Insurance Samadhan', imageSrc: '/Speakers/Ravi.jpg' },
        { id: 21, title: 'Aayush Arora', description: 'Sr. Associate, Titan', imageSrc: '/Speakers/Aayush.png' }
    ];

    return (
        <div>
            <HyperText
                className="text-4xl md:text-7xl my-24 font-bold text-white font-Kalamayka uppercase"
                text="PAST SPEAKERS"
            />
            <FocusRail 
                items={speakerItems} 
                autoPlay={false} 
                loop={true} 
            />
        </div>
    )
}
