import React from 'react';
// images
import Image from '../assets/pp.jpg';
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import Nav from '../components/Nav';

import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' >
      <div className="container mx-auto pt-[200px]">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>SAMY</motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>Je suis</span>
              <TypeAnimation sequence={[
                'Freelance',
                2000,
                'Developpeur Front-End',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Expérimenté de plusieurs années dans le développement web, je me suis spécialisé en tant que Développeur React JS.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <NavLink to='/contact' className='btn btn-sm flex justify-center items-center text-[15.5px]'>
                  Me contacter
              </NavLink>
              <NavLink to='/work' className='text-gradient btn-link flex justify-center items-center text-[15.5px]'>
                Mon portfolio
              </NavLink>
          
              
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/samy-hb-7220a6282/" target='_blank'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/Rtin0X" target='_blank'>
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}  className='hidden lg:flex flex-1 lg:h-[40vh] lg:w-[40vh] lg:flex lg:justify-center '>
            <img src={Image}  className="rounded-[400px]" alt="" />
          </motion.div>
        </div>
      </div>
      <Nav />
    </section>

  );
};

export default Banner;
