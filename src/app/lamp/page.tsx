"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Text from "./Text"

export default function LampDemo() {
    return (
        <LampContainer className="-py-24">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="-pt-24 bg-white font-DarkerBold py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-8xl"
            >
                See you soon! <br />
            </motion.h1>

        </LampContainer>
    );
}
