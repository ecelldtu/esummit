'use client';
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import styles from './styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion2';

const Feedback = () => (
  <section className={`${styles.paddings}`} id="About">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 my-36`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold font-CyberGraph sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-4 text-white">
            About Us
          </h4>
        </div>

        <p className="mt-[24px] font-Para font-medium md:text-xl sm:leading-[45.6px] leading-[39.6px] text-white">
          E-Cell DTU presents its annual flagship event E-SUMMIT&apos;24! One of the biggest Entrepreneurship summits in India, E-Summit will bring to you a series of enthralling events, from panel discussions with distinguished dignitaries to exciting competitions like B-plan, Case study, hackathon, along with a spectacular band night and comedy night, the level of grandeur will be unparalleled!
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <video autoPlay muted loop>
          <source src="/heronew.mp4" type="video/mp4" className="rounded-2xl" />
        </video>
      </motion.div>
    </motion.div>
  </section>
);

export default dynamic(() => Promise.resolve(Feedback), { ssr: false });
