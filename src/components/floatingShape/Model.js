"use client";
import React, { useEffect, useState, Suspense, useMemo } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform, motion } from 'framer-motion';
import { debounce } from 'lodash';

export default function Model({ mouse }) {
  const [activeShape, setActiveShape] = useState(1);
  const { nodes, materials } = useGLTF("/medias/new7.glb");

  const shapes = ["1", "3", "12", "9", "5", "11", "13", "4", "6", "10", "2", "7", "4", "8"];


  // Reduce the shapes displayed on mobile
  const getShapesToDisplay = useMemo(() => {
    const width = window.innerWidth;
    return width < 768 ? shapes.slice(0, 12) : shapes; // Display fewer shapes for mobile
  }, []);

  const [shapesToDisplay, setShapesToDisplay] = useState(getShapesToDisplay);

  useEffect(() => {
    const handleResize = debounce(() => {
      setShapesToDisplay(getShapesToDisplay());
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getShapesToDisplay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShape(prevShape => (prevShape === shapesToDisplay.length ? 1 : prevShape + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [shapesToDisplay]);

  return (
    <group scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]}> {/* Adjust scale for mobile */}
      {shapesToDisplay.map((shape, index) => (
        nodes[shape] ? (
          <Mesh
            key={shape}
            node={nodes[shape]}
            materials={materials}
            multiplier={1} // Reduce multiplier for better performance
            mouse={mouse}
            isActive={activeShape === index + 1}
          />
        ) : null
      ))}
    </group>
  );
}

function Mesh({ node, materials, multiplier, mouse, isActive }) {
  if (!node) return null;

  const { geometry, position, scale, rotation } = node;
  const a = multiplier / 2;

  // Optimize the mouse movement handling
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - a, rotation.x + a]);
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - a, rotation.y + a]);
  const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier, position.x + multiplier]);
  const positionY = useTransform(mouse.y, [0, 1], [position.y + multiplier, position.y - multiplier]);

  const meshMaterial = materials.Chess_White || materials.default;
  meshMaterial.transparent = true;
  meshMaterial.opacity = 1;

  const getRandomMultiplier = () => Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);

  return (
    <Float>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={meshMaterial}
        position={position}
        rotation={rotation}
        scale={scale}
        rotationY={rotationX}
        rotationX={rotationY}
        positionX={positionX}
        positionY={positionY}
        animate={{ rotateZ: isActive ? rotation.z + getRandomMultiplier() : 0 }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}

useGLTF.preload("/medias/new7.glb");
