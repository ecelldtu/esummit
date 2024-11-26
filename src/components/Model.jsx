"use client";
import { useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei';
import React, { memo, useState, useEffect, useMemo } from 'react';
import { useThree } from '@react-three/fiber';

export default function Model() {
    const { viewport } = useThree();
    const { nodes } = useGLTF('/medias/shards.glb');
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scale = useMemo(() => viewport.width / 1.5, [viewport.width]);
    const rotation = isLargeScreen ? [0, 0, 0] : [0, 0, Math.PI / 2];

    return (
        <group scale={scale}>
            <group rotation={rotation}>
                {nodes.Scene.children.map((mesh, i) => (
                    <Mesh data={mesh} key={i} />
                ))}
            </group>
            <Font isLargeScreen={isLargeScreen} />
        </group>
    );
}

const Font = memo(({ isLargeScreen }) => {
    const [fontSizeTitle, setFontSizeTitle] = useState(0.1);
    const [fontSizeSubtitle, setFontSizeSubtitle] = useState(0.03);
    const [positionY, setPositionY] = useState({ title: 0, subtitle: -0.1, date: -0.2 });

    useEffect(() => {
        const updateFontSizeAndPosition = () => {
            const isMobile = window.innerWidth <= 768;
            setFontSizeTitle(isMobile ? 0.17 : 0.15);
            setFontSizeSubtitle(isMobile ? 0.06 : 0.03);
            setPositionY({
                title: isMobile ? 0.2 : 0,
                subtitle: isMobile ? -0.05 : -0.11,
                subtitle2: isMobile ? -0.1 : -0.11,
                date: isMobile ? -0.36 : -0.18,
            });
        };

        updateFontSizeAndPosition();
        window.addEventListener('resize', updateFontSizeAndPosition);
        return () => window.removeEventListener('resize', updateFontSizeAndPosition);
    }, []);

    const textOption = useMemo(() => ({
        color: "white",
        anchorX: "center",
        anchorY: "middle",
    }), []);

    return (
        <group>
            <Text
                position={[0, positionY.title, -0.1]}
                fontSize={fontSizeTitle}
                font="/fonts/Hero2.ttf"
                {...textOption}
            >
                E-SUMMIT 2025
            </Text>
            <Text
                position={[0, positionY.subtitle, -0.1]}
                fontSize={fontSizeSubtitle}
                font="/fonts/Nova.otf"
                {...textOption}
            >
                {isLargeScreen ? "NORTH INDIA'S BIGGEST ENTREPRENEURSHIP SUMMIT" : "NORTH INDIA'S BIGGEST"}
            </Text>
            {!isLargeScreen && (
                <Text
                    position={[0, positionY.subtitle2 - 0.05, -0.1]}
                    fontSize={fontSizeSubtitle}
                    font="/fonts/Nova.otf"
                    {...textOption}
                >
                    ENTREPRENEURSHIP SUMMIT
                </Text>
            )}
            <Text
                position={[0, positionY.date, -0.1]}
                fontSize={fontSizeSubtitle}
                font="/fonts/Nova.otf"
                {...textOption}
            >
                JANUARY 2025
            </Text>
        </group>
    );
});

const Mesh = memo(({ data }) => {
    const materialProps = useMemo(() => ({
        thickness: 0.275,
        ior: 1.8,
        chromaticAberration: 0,
        resolution: 0,
    }), []);

    return (
        <Float speed={2} rotationIntensity={3}>
            <mesh {...data}>
                <MeshTransmissionMaterial roughness={0} transmission={0.99} {...materialProps} />
            </mesh>
        </Float>
    );
});
