// 'use client';

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import{ motion }from "framer-motion";
import {Audiowide} from '@next/font/google'
import { NavVariants, SlideIn, StaggerContainer, TextVariant, TextContainer } from './../../utils/Motion';



// function Home() {
//   return (
//     <Element name="home" className="">
//       <div className=" bg-url['/celestial_and_space.png'] md:bg-transparent max-w-full aspect-auto">
//         {/* laptop view landing page */}
//         <div className=" flex-row hidden md:flex ">
//           <div className="flex flex-row justify-between w-full bg-background/60">
//             <motion.div
//             variants={StaggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.25 }}
//             className=" flex flex-col lg:h-[550px] mx-auto transparent relative justify-between px-auto pr-3
//             ">
//               <div className="h-[150px] "></div>

//               <h1 className="  text-8xl text-white pl ease-in duration-200">
//                 E-SUMMIT 23’
//               </h1>
//               <motion.p
//               variants={TextVariant(0.8)}
//               className=" pt-6 break-normal  text-xl tracking-wide flex-wrap inline-block w-[600px] h-[181px] text-white ease-in duration-200">
//                 Entrepreneurship Cell organises North India’s Biggest
//                 Entrepreneurship Summit 2023. It is a two day event wherein we
//                 start with Entrepreneurship Events in the morning and Cultural
//                 nights in the evening.
//               </motion.p>
//               <motion.h4
//               variants={TextVariant(0.8)}
//               className=" font-poppins mt-10 text-2xl lg:text-4xl hover:text-pink font-bold text-white ease-in duration-200">
//                 7th-8th April, 2023
//               </motion.h4>
              
//               <div className="h-[150px]"></div>
//             </motion.div>
//           </div>

//           <div className=" h-full">
//             <img className="h-full " src="/celestial_and_space.png" alt="" />
//           </div>
//         </div>

//         {/* mobile view landing page */}
//         <div className="flex-row md:hidden flex bg-[url('/celestial_and_space.png')] bg-center bg-cover">
//         <div className="flex flex-row justify-between w-full bg-background/60">
//             <motion.div
//             variants={TextContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.25 }}
//             className=" flex flex-col lg:h-[550px] mx-auto transparent relative justify-between px-auto pr-3">
//               <div className="h-[150px] "></div>

//               <motion.h1
//               variants={TextVariant(0.5)}
//               className="font-poppins text-5xl lg:text-6xl mx-auto font-bold text-white pl ease-in duration-200">
//                E-SUMMIT 23’
//               </motion.h1>
//               <motion.p
//               variants={TextVariant(1)}
//               className="font-poppins pt-6 break-normal lg:text-2xl md:text-2xl sm:text-xl flex-wrap inline-block w-[300px] h-[181px] text-white ease-in duration-200">
//                 Entrepreneurship Cell organises North India’s Biggest
//                 Entrepreneurship Summit 2023. It is a two day event wherein we
//                 start with Entrepreneurship Events in the morning and Cultural
//                 nights in the evening.
//               </motion.p>
//               <motion.h4
//               variants={TextVariant(1)}
//               className="font-poppins text-2xl lg:text-4xl hover:text-pink font-bold text-white ease-in duration-200">
//               7th-8th April, 2023
//               </motion.h4>
              
             
//               <div className="h-[150px]"></div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="m-0 h-30 w-screen md:h-40 lg:h-50 bg-gradient-to-tr from-pink1 to-pink2  p-7 justify-around grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ease-in duration-200">
//           <div className=" text-center md:p-2">
//             <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl">
//               <CountUp start={0} end={40000} duration={2.25} /> +
//             </h2>
//             <p className="text-white text-2xl">Footfall</p>
//           </div>
//           <div className=" text-center md:p-2">
//             <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl ">
//               <CountUp start={0} end={12} duration={2} /> +
//             </h2>
//             <p className="text-white text-2xl">Competitions</p>
//           </div>
//           <div className=" text-center md:p-2">
//             <h2 className="font-bold text-white text-5xl m-1 md:text-3xl lg:text-6xl ">
//               <CountUp start={0} end={30} duration={2} /> +
//             </h2>
//             <p className="text-white text-2xl">Speakers and Artists</p>
//           </div>
//         </div>
//     </Element>
//   );
// }

// export default Home;

// // // <motion.h4  variants={TextVariant(0.8)} className=" font-poppins  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-10 text-xl mt-5 lg:text-3xl hover:text-pink font-bold text-white ease-in duration-200">&quot; AIM FOR THE MOON, 
// // //               <br></br>IF YOU MISS,<br></br> YOU MAY REACH THE STARS &quot;</motion.h4>


// // // //mobile view
// // // <motion.h4
// // //               variants={TextVariant(0.7)}
// // //               className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-100 mt-5 text-xl lg:text-4xl hover:text-pink font-bold text-white ease-in duration-200">
// // //               &quot; AIM FOR THE MOON, 
// // //               <br></br>IF YOU MISS,<br></br> YOU MAY REACH THE STARS &quot;
// // //               </motion.h4>

// import React from "react";

const HomePage = () => {
  return (<>
    <div className="video-container bg-background/50 max-h-[800px] ">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="video"
    src="/bgvideo.mp4"
  />
  <div className="content max-h-[800px] pt-0">
    <Element name="home" className="">
      <div className=" ">
        {/* desktop view */}
        <div className="hidden md:flex">
          <div className="flex flex-row justify-between w-full h-screen">
            <motion.div
              variants={StaggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex flex-col lg:h-[550px] mx-auto transparent relative justify-between px-auto pr-3"
            >
              <div className="h-[150px]"></div>
              <div className="container">
                <h1 className=" text-8xl mt-20   text-white pl ease-in duration-200">
                  E-SUMMIT '23
                </h1>

                <motion.p
                  variants={TextVariant(0.8)}
                  className="pt-6 break-normal text-2xl tracking-wide flex-wrap inline-block text-white ease-in duration-200"
                >
                  North India’s Biggest Entrepreneurship Summit 2023. 
                </motion.p>
                <motion.h4
                  variants={TextVariant(0.8)}
                  className=" mt-10 text-2xl lg:text-4xl  font-bold text-white ease-in duration-200"
                >
                  7th-8th April, 2023
                </motion.h4>
              </div>

              <div className="h-[150px]"></div>
            </motion.div>
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden px-6  pt-20 flex-col justify-center items-center w-screen h-screen">
        <div className="max-w-screen-md ml-0 mx-auto">

        <h1 className=" text-center mt-20  text-4xl lg:text-9xl text-white pl ease-in duration-200">
          E-SUMMIT 23’
        </h1>
      
        <motion.p
          variants={TextVariant(0.8)}
          className="pt-6 break-normal text-lg lg:text-2xl tracking-wide flex-wrap inline-block text-white ease-in duration-200 text-center"
        >
          North India’s Biggest Entrepreneurship Summit 2023. 
        </motion.p>
        <motion.h4
          variants={TextVariant(0.8)}
          className=" mt-9 text-center text-xl lg:text-2xl  font-bold text-white ease-in duration-200"
        >
          7th-8th April, 2023
        </motion.h4>
      </div>
      </div>
      </div>
    </Element>
  </div>
</div>

    
   
      
<div className="m-0 h-auto w-screen md:h-40 lg:h-50 bg-gradient-to-tr from-pink1 to-pink2  p-7 justify-around flex flex-col md:flex-row ease-in duration-200">
<div className=" text-center md:p-2">
  <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl m-1">
    <CountUp start={0} end={40000} duration={6} /> +
  </h2>
  <p className="text-white text-xl md:text-2xl">Footfall</p>
</div>
<div className=" text-center md:p-2">
  <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl m-1">
    <CountUp start={0} end={12} duration={5} /> +
  </h2>
  <p className="text-white text-xl md:text-2xl">Competitions</p>
</div>
<div className=" text-center md:p-2">
  <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl m-1">
    <CountUp start={0} end={30} duration={5} /> +
  </h2>
  <p className="text-white text-xl md:text-2xl">Speakers and Artists</p>
</div>
</div>

</>
  
  );
};

export default HomePage;