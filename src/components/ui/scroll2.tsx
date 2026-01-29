"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
    text: string;
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll2({
    text,
    default_velocity = 5,
    className,
}: VelocityScrollProps) {
    const reduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const [isLowPower, setIsLowPower] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (typeof navigator === "undefined") return;
        const nav = navigator as any;
        const deviceMemory: number | undefined = nav?.deviceMemory;
        const cores: number | undefined = nav?.hardwareConcurrency;
        setIsLowPower(
            (typeof deviceMemory === "number" && deviceMemory <= 4) ||
                (typeof cores === "number" && cores <= 4)
        );
    }, []);

    function ParallaxText({
        children,
        baseVelocity = 100,
        className,
    }: ParallaxProps) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef<HTMLDivElement>(null);
        const textRef = useRef<HTMLSpanElement>(null);

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && textRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const textWidth = textRef.current.offsetWidth;
                    const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
                    setRepetitions(newRepetitions);
                }
            };

            calculateRepetitions();

            window.addEventListener("resize", calculateRepetitions);
            return () => window.removeEventListener("resize", calculateRepetitions);
        }, [children]);

        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
        const shouldAnimate = !reduceMotion;
        const mobileMultiplier = isMobile ? 0.55 : 1;
        const lowPowerMultiplier = isLowPower ? 0.6 : 1;
        const effectiveVelocity = shouldAnimate
            ? baseVelocity * mobileMultiplier * lowPowerMultiplier
            : 0;

        // Pause animation when not visible (Apple-style optimization)
        const [isVisible, setIsVisible] = useState(true);
        const wrapperRef = useRef<HTMLDivElement>(null);
        
        useEffect(() => {
            const el = wrapperRef.current || containerRef.current;
            if (!el) return;
            
            const observer = new IntersectionObserver(
                (entries) => setIsVisible(entries[0].isIntersecting),
                { threshold: 0.1 }
            );
            observer.observe(el);
            return () => observer.disconnect();
        }, []);

        useEffect(() => {
            if (!shouldAnimate) {
                baseX.set(0);
            }
        }, [shouldAnimate, baseX]);

        const directionFactor = React.useRef<number>(1);
        useAnimationFrame((t, delta) => {
            // Don't animate if not visible or shouldn't animate
            if (!shouldAnimate || !isVisible) return;
            let moveBy = directionFactor.current * effectiveVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div
                className="w-full overflow-hidden whitespace-nowrap"
                ref={(el) => {
                    (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                    (wrapperRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                }}
            >
                <motion.div className={cn("inline-block", className)} style={{ x }}>
                    {Array.from({ length: repetitions }).map((_, i) => (
                        <span
                            key={i}
                            ref={i === 0 ? textRef : null}
                            className="mx-12 md:mx-24"  // Add gap between each repeating element
                        >
                            {children}{" "}
                        </span>
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <section className="relative w-full my-6">
            <ParallaxText baseVelocity={-default_velocity} className={className}>
                {text}
            </ParallaxText>
        </section>
    );
}
