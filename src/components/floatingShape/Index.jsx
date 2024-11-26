'use client';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import { useMotionValue, useSpring } from "framer-motion";

export default function Index() {
  const [zoom, setZoom] = useState(12); // Default zoom level

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 })
  };

  const manageMouse = e => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    // Set zoom based on window size
    const updateZoom = () => {
      if (window.innerWidth < 768) {
        setZoom(13); // Zoom for small devices
      } else {
        setZoom(15); // Zoom for larger devices
      }
    };

    updateZoom(); // Set initial zoom
    window.addEventListener("resize", updateZoom); // Update zoom on resize
    window.addEventListener("mousemove", manageMouse);

    return () => {
      window.removeEventListener("resize", updateZoom);
      window.removeEventListener("mousemove", manageMouse);
    };
  }, []);

  return (
    <div style={{ opacity: 0.7 }} className='h-full'> {/* Set your desired opacity here */}
      <Canvas orthographic camera={{ position: [0, 0, 200], zoom: zoom }}>
        <ambientLight intensity={0.2} /> {/* Adjust intensity for minimal lighting */}
        <directionalLight position={[0, 0, 1]} intensity={0.3} /> {/* Minimal directional light */}
        <Model mouse={smoothMouse} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
