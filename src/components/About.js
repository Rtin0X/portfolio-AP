import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

import  Imgpp  from '../assets/Imgpp.jpg';

import Nav from '../components/Nav';


const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto pb-[250px]">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={ { once: false, amount: 0.3 } }
        className='flex-1 bg-contain bg-no-repeat h-[640px]'><img src={Imgpp} className='h-full brightness-50 border border-[4px] border-[#b936ee] rounded' alt="img-pp" /></motion.div>
        {/* text */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={ { once: false, amount: 0.3 } }
        className='flex-1'>
          <h2 className='h2 text-accent'>à Propos </h2>
          <h3 className='h3 mb-4'>Je suis Développeur Front-End avec plus de 3 ans d'expérience.</h3>
          <p className='mb-6'>Jeune étudiant en informatique et développeur front-end passionné, j'ai débuté mon chemin dans le monde de la création de sites web à travers des formations en ligne autodidactes. Initié aux bases fondamentales avec HTML & CSS, j'ai rapidement élargi des compétences en explorant SASS pour optimiser mes styles. Ma curiosité m'a ensuite conduit à plonger dans l'univers dynamique de JavaScript, une étape cruciale pour un développeur qui a pavé ma voie à une spécialisation dans React. Fort de mon parcours, j'ai affiné des compétences en responsive ainsi qu'une expérience utilisateur interactive faisant de mon portfolio une vitrine éloquente de mon expertise en développement front-end.</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                +
                {
                  inView ?
                  <CountUp start={0} end={3} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Années <br />d'expériences
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  +
                {
                  inView ?
                  <CountUp start={0} end={15} duration={3} /> : null}
                  
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projets <br />accomplis
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                +
                {
                  inView ?
                  <CountUp start={0} end={3} duration={3} /> : null}
                  
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clients <br />satisfaits 
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <a href='/contact' className='btn btn-sm flex justify-center items-center text-[15.5px]'>
              Me contacter
            </a>
            <a href='/work' className='text-gradient btn-link flex justify-center items-center text-[15.5px]'>
              Mon portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    <Nav />
  </section>
  
  );
};
  

export default About;
