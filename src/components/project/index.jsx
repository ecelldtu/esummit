'use client'
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function index({project}) {

    const [isActive, setIsActive] = useState(false);

    const { title1, title2, src } = project;
    return (
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project}>
            <p className='font-Kalamayka text-4xl md:text-6xl text-white'>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <Image
                    src={`/medias/${src}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 60vw, 400px"
                    // These images are purely decorative in a hover preview.
                    aria-hidden="true"
                    className={styles.img}
                />
            </motion.div>
            <p className='font-Kalamayka text-4xl md:text-6xl text-white'>{title2}</p>
        </div>
    )
}
