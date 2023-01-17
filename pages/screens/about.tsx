import React from 'react'
import Image from "next/image";
// bg-[url('/crowd.png')] bg-cover bg-center bg-no-repeat bg-opacity-50 style={{ backgroundImage: `url(${backgroundImage})`,opacity: 1}}
export default function About() {
  return (
    <>
    <div className=" bg-[url('/crowd.png')] bg-cover bg-center bg-no-repeat bg-opacity-50">
  
  <div className=" 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 " >


        <div className=" flex flex-col lg:flex-row justify-between gap-8 " >
            
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                
                <h1 className="text-3xl lg:text-6xl font-bold leading-9 text-white dark:text-white pb-4   ">About Us</h1>
                <p className="text-poppins font-normal lg:text-xl text-base leading-6 text-white dark:text-white">
                    The Annual Flagship Extravaganza hosted by Entrepreneurship Cell of Delhi Technological University. E-Summit by E-Cell
DU is the largest entrepreneurship promoting event of Northern India. The event has served as host to some of the eminent personalities from myriad industries over the many years. It continues to cultivate and nurture numerous ideas every year, and provide an extraordinary platform putting forward the youth to exchange their ideas with the sharpest brains of the corporate world, giving them innumerous insights and lessons to raise their business acumen.</p>
            </div>
            <div className="w-400 lg:w-400">
                <img className="w-400 h-400  rounded-lg border-2 border-gray-500" src="/about.png" alt="" />
            </div>
        </div>

</div>
  
 
   
</div>
 
  </>
  )
}
