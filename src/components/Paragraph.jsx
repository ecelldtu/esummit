import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.p 
      ref={container}         
      className="text-center max-w-[92%] md:max-w-[62%] my-10 md:my-12 text-base md:text-2xl mx-auto font-Kalamayka text-white leading-relaxed md:leading-[1.85] tracking-[0.01em] text-balance"
      style={{opacity}}
    >
      {paragraph}
    </motion.p>
  )
}