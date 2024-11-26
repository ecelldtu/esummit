"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string[]; // Array of strings for three lines of text
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  text = ["BIG TEXT", "MEDIUM TEXT", "MEDIUM TEXT"],
  duration = 1500,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.map(t => t.split("")));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.join(" ").length) {
          setDisplayText((t) =>
            t.map((line, lineIdx) =>
              line.map((letter, i) =>
                letter === " "
                  ? letter
                  : i <= interations.current
                    ? text[lineIdx][i]
                    : alphabets[getRandomInt(26)]
              )
            )
          );
          interations.current = interations.current + 0.25;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.join(" ").length * 10),
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div className="overflow-hidden py-4 flex flex-col space-y-4 cursor-default scale-100" onMouseEnter={triggerAnimation}>
      <AnimatePresence mode="wait">
        {displayText.map((line, lineIdx) => (
          <div key={lineIdx} className="flex flex-wrap space-x-1 justify-center max-w-full">
            {line.map((letter, i) => (
              <motion.h1
                key={i}
                className={cn(
                  lineIdx === 0
                    ? "text-3xl md:text-5xl lg:text-9xl font-extrabold font-Nova text-[#eb9617]" // Large text for first line
                    : "text-lg md:text-2xl lg:text-4xl font-extrabold -mb-1 md:mb-0 font-Vin text-[#eb9617]", // Medium text for other lines, now bold
                  letter === " " ? "w-auto mx-[8px]" : "", // Increase spacing between words
                  className
                )}
                {...framerProps}
              >
                {letter}
              </motion.h1>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
