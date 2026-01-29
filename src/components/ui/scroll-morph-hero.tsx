"use client";

import React, { useEffect, useRef, useCallback } from "react";

// ==============================================
// ZERO STATE UPDATES DURING SCROLL
// Pure DOM manipulation for butter smooth 60fps
// ==============================================

const BASE_IMAGES = [
    "/images/main.jpg",
    "/images/11.jpg", 
    "/images/g32.png",
    "/images/10.jpg",
    "/images/g46.png",
    "/images/1.jpg",
    "/images/g41.png",
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export default function ScrollMorphHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const introTextRef = useRef<HTMLDivElement>(null);
    const arcTextRef = useRef<HTMLDivElement>(null);
    
    // Refs for animation state - NO REACT STATE
    const progressRef = useRef(0);
    const targetProgressRef = useRef(0);
    const rafIdRef = useRef(0);
    const isVisibleRef = useRef(false);
    const dimensionsRef = useRef({ width: 0, height: 0, isMobile: false });

    // Calculate positions for a given progress value
    const calculateCardTransform = useCallback((
        index: number, 
        progress: number,
        width: number, 
        height: number,
        isMobile: boolean,
        imageCount: number
    ) => {
        const centerX = width / 2;
        const centerY = height / 2;
        const cardW = isMobile ? 52 : 72;
        const cardH = isMobile ? 72 : 100;

        const morphT = clamp(progress, 0, 1);
        const rotateT = clamp(progress - 1, 0, 1);

        // Circle
        const circleRadius = Math.min(width, height) * (isMobile ? 0.30 : 0.26);
        const circleAngle = (index / imageCount) * Math.PI * 2 - Math.PI / 2;
        const circleX = Math.cos(circleAngle) * circleRadius;
        const circleY = Math.sin(circleAngle) * circleRadius;
        const circleRot = (circleAngle * 180) / Math.PI + 90;

        // Arc
        const arcRadius = Math.min(width * 0.9, height * 1.6);
        const spread = isMobile ? 90 : 100;
        const arcStart = -90 - spread / 2;
        const arcStep = spread / (imageCount - 1);
        const rotateOffset = rotateT * spread * 0.4;
        const arcAngle = arcStart + index * arcStep - rotateOffset;
        const arcRad = (arcAngle * Math.PI) / 180;
        const arcCenterY = height * (isMobile ? 0.36 : 0.22) + arcRadius;
        const arcX = Math.cos(arcRad) * arcRadius;
        const arcY = Math.sin(arcRad) * arcRadius + arcCenterY - centerY;
        const arcRot = arcAngle + 90;
        const arcScale = isMobile ? 1.35 : 1.45;

        // Interpolate
        const x = lerp(circleX, arcX, morphT);
        const y = lerp(circleY, arcY, morphT);
        const rot = lerp(circleRot, arcRot, morphT);
        const scale = lerp(1, arcScale, morphT);

        const tx = centerX + x - cardW / 2;
        const ty = centerY + y - cardH / 2;

        return `translate3d(${tx}px,${ty}px,0) rotate(${rot}deg) scale(${scale})`;
    }, []);

    // Animation loop - runs at 60fps, no React updates
    const animate = useCallback(() => {
        if (!isVisibleRef.current) {
            rafIdRef.current = requestAnimationFrame(animate);
            return;
        }

        const { width, height, isMobile } = dimensionsRef.current;
        if (width === 0) {
            rafIdRef.current = requestAnimationFrame(animate);
            return;
        }

        // Smooth interpolation (the secret sauce)
        progressRef.current = lerp(progressRef.current, targetProgressRef.current, 0.08);

        const progress = progressRef.current;
        const imageCount = isMobile ? 8 : 10;

        // Update cards directly via DOM
        cardsRef.current.forEach((card, i) => {
            if (card && i < imageCount) {
                const transform = calculateCardTransform(i, progress, width, height, isMobile, imageCount);
                card.style.transform = transform;
                card.style.opacity = "1";
            } else if (card) {
                card.style.opacity = "0";
            }
        });

        // Update text opacity directly
        if (introTextRef.current) {
            const opacity = Math.max(0, 1 - progress * 2.5);
            introTextRef.current.style.opacity = String(opacity);
        }
        if (arcTextRef.current) {
            const opacity = Math.max(0, Math.min(1, (progress - 0.7) * 3));
            arcTextRef.current.style.opacity = String(opacity);
            arcTextRef.current.style.transform = `translate3d(0,${(1 - opacity) * 20}px,0)`;
        }

        rafIdRef.current = requestAnimationFrame(animate);
    }, [calculateCardTransform]);

    // Setup effect - runs once
    useEffect(() => {
        const container = containerRef.current;
        const sticky = stickyRef.current;
        if (!container || !sticky) return;

        // Measure dimensions
        const updateDimensions = () => {
            dimensionsRef.current = {
                width: sticky.offsetWidth,
                height: sticky.offsetHeight,
                isMobile: window.innerWidth < 768,
            };
        };
        updateDimensions();

        // Intersection observer for visibility
        const observer = new IntersectionObserver(
            (entries) => {
                isVisibleRef.current = entries[0].isIntersecting;
            },
            { threshold: 0 }
        );
        observer.observe(container);

        // Scroll handler - just updates target, no state
        const onScroll = () => {
            const rect = container.getBoundingClientRect();
            const scrollHeight = container.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            targetProgressRef.current = clamp(scrolled / scrollHeight, 0, 1) * 2;
        };

        // Resize handler
        const onResize = () => {
            updateDimensions();
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize, { passive: true });
        onScroll();

        // Start animation loop
        rafIdRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            observer.disconnect();
            cancelAnimationFrame(rafIdRef.current);
        };
    }, [animate]);

    // Build images array (static, not reactive)
    const maxImages = 10;
    const images: string[] = [];
    for (let i = 0; i < maxImages; i++) {
        images.push(BASE_IMAGES[i % BASE_IMAGES.length]);
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full"
            style={{ height: "200vh" }}
        >
            <div
                ref={stickyRef}
                className="sticky top-0 left-0 w-full h-screen overflow-hidden"
                style={{ background: "transparent" }}
            >
                {/* Intro text */}
                <div
                    ref={introTextRef}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 px-4"
                    style={{ opacity: 1 }}
                >
                    <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-3">
                        Past Highlights
                    </h1>
                    <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                        Scroll to explore
                    </p>
                </div>

                {/* Arc text */}
                <div
                    ref={arcTextRef}
                    className="absolute top-[8%] left-0 right-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 px-4"
                    style={{ opacity: 0 }}
                >
                    <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                        Relive The Moments
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300 max-w-md leading-relaxed">
                        A glimpse into past editions of E-Summit.
                    </p>
                </div>

                {/* Cards - pre-rendered, updated via refs */}
                <div className="absolute inset-0">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            ref={(el) => { if (el) cardsRef.current[i] = el; }}
                            className="absolute will-change-transform"
                            style={{
                                width: 72,
                                height: 100,
                                borderRadius: 14,
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                                opacity: 0,
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                decoding="async"
                                style={{ borderRadius: 14 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
