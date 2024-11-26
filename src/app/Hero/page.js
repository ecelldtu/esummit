// "use client"
// import dynamic from 'next/dynamic'
// import { useEffect, useState } from 'react';
// import Redirect from "../../components/Redirect"

// const Scene = dynamic(() => import('../../components/Scene'), {
//   ssr: false,
// })

// export default function Home() {
//   const [isRedirectVisible, setIsRedirectVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsRedirectVisible(false); // Hide the Redirect component after 5 seconds
//     }, 5000);

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <main className="relative h-screen">
//       {isRedirectVisible && <Redirect />} {/* Render Redirect based on visibility */}

//       <div className='h-screen' id='hero'>
//         <Scene />
//       </div>
//     </main>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

