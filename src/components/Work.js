import React from 'react';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

import Nav from '../components/Nav';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className="container mx-auto pb-[200px]">
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
            <button className='btn btn-sm'>Voir tout</button>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Projet 1</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={ { once: false, amount: 0.3 } }
          className='flex-1 flex flex-col gap-y-10 '>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Project 2</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Project 3</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
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
