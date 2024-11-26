"use client";
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, CameraControls } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

export default function Scene() {
    const [zoom, setZoom] = useState(60);

    useEffect(() => {
        const updateZoom = () => {
            if (window.innerWidth <= 768) { // Adjust this width for smaller screens
                setZoom(20); // Zoom level for smaller screens
            } else {
                setZoom(60); // Default zoom level for larger screens
            }
        };

        updateZoom(); // Initial check
        window.addEventListener('resize', updateZoom); // Update zoom on resize
        return () => window.removeEventListener('resize', updateZoom); // Cleanup event listener
    }, []);

    return (
        <Canvas orthographic style={{ background: 'black' }} camera={{ position: [0, 0, 1], zoom }}>
            <Model />
            <directionalLight intensity={3} position={[0, 0.1, 1]} />
            <Environment preset="city" />
        </Canvas>
    );
}
