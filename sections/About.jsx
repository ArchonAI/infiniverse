'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Metaverse</span> refers 
        to a collective virtual shared space, merging physical and virtual 
        reality, where users can interact with each other and digital environments 
        in real time. It's often depicted as an  {' '}
        <span className="font-extrabold text-white">
          immersive, interconnected digital universe
        </span>{' '}
          that encompasses various virtual worlds, augmented reality experiences, and other digital spaces.{' '}
        <span className="font-extrabold text-white">Infiniverse</span> allows each user to
        create, share and experience their own versions of the Metaverse. Our scope is bound only by your imagination - 
        resulting in an {' '}
        <span className="font-extrabold text-white"> infinite </span> number of universes and possibilities.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;