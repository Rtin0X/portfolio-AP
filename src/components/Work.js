import React from 'react';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// img
import Img1 from '../assets/location-app.png';
import Img2 from '../assets/cryptowatch-app.png';
import Img3 from '../assets/weather-app.png';

import Nav from '../components/Nav';
import {  NavLink } from 'react-router-dom';



const Work = () => {
  return (
  <section className='section' id='work'>
    <div className="container mx-auto pb-[100px]">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={ { once: false, amount: 0.3 } }
          >
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>Mes Projets <br /> récents</h2>
            <p className='max-w-sm mb-16'>Je développe mes projets avec une bibliothèque de Javascript appelé React JS et l'utilisation de Tailwind CSS pour le style. </p>
            <NavLink to='/portfolio' className='h-[40px] w-[125px] btn btn-sm flex justicy-center items-center mb-[10px]'>Tout Voir</NavLink>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
            {/* overlay */}
            <a href="https://location-app-sxki.onrender.com" target="_blank">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="img-project" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Location App</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>React JS & API Location</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={ { once: false, amount: 0.3 } }
          className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
            {/* overlay */}
            <a href="https://cryptowatch-moce.onrender.com/" target="_blank">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Crypto Watch</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>React JS & API Cryptomonnaies</span>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mt-[65px] cursor-pointer'>
            {/* overlay */}
            <a href="https://meteo-app-baqs.onrender.com" target='_blank'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            </a>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Meteo App</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>React JS & API Météo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Nav />
  </section>
  );
};

export default Work;
