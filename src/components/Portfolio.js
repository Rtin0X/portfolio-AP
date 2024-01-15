import React from 'react';
import Nav from './Nav';

import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

import Img1 from '../assets/location-app.png';
import Img2 from '../assets/cryptowatch-app.png';
import Img3 from '../assets/weather-app.png';
import Img4 from '../assets/cinema-app.png';
import Img5 from '../assets/fs-agency.png';
import Img6 from '../assets/cooking-app.png';
import Img7 from '../assets/quizz-app.png';
import Img8 from "../assets/country-app.png";


const Portfolio = () => {
    return (
        <section className='h-[3100px] m-20'>
            <motion.h1 
            className='h2 leading-tight text-accent p-[55px] flex justify-center'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={ { once: false, amount: 0.3 } }>
                Tous mes projets
            </motion.h1>
            <div class="mx-auto grid w-full grid-cols-1 gap-8 pt-2 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } }>
                    <a
                    href="https://location-app-sxki.onrender.com" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
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
                                <span className='text-3xl text-white'>React JS & API Location </span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } }>
                    <a
                    href="https://cryptowatch-moce.onrender.com" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://cryptowatch-moce.onrender.com" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>Crypto Watch App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>React JS & API Cryptomonnaies</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } }>
                    <a
                    href="https://meteo-app-baqs.onrender.com/" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://meteo-app-baqs.onrender.com" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Meteo App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>React JS & API Météo</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } } >
                    <a
                    href="https://cinema-app-xc50.onrender.com" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://cinema-app-xc50.onrender.com" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>Cinema App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                            <span className='text-3xl text-white'>React JS & API Cinéma</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } } >
                    <a
                    href="https://fs-agency.onrender.com/" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://fs-agency.onrender.com/" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>FS Agency App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                            <span className='text-3xl text-white'>React JS & Framer Motion</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } } >
                    <a
                    href="https://country-app-e4wi.onrender.com" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://country-app-e4wi.onrender.com/" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img8} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>Country App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                            <span className='text-3xl text-white'>React JS & API Country</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } } >
                    <a
                    href="https://cooking-app-ptxc.onrender.com/" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://cooking-app-ptxc.onrender.com/" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img6} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>Cooking App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                            <span className='text-3xl text-white'>React JS & API Recettes</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={ { once: false, amount: 0.3 } } >
                    <a
                    href="https://quizz-app-d6ov.onrender.com" target="_blank"
                    class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl:mt-[75px] lg:mt-[5px] cursor-pointer'>
                            {/* overlay */}
                            <a href="https://quizz-app-d6ov.onrender.com" target="_blank">
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            </a>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img7} alt="img-project" />
                            {/* pretitle */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-gradient'>Quizz App</span>
                            </div>
                            {/* title */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                            <span className='text-3xl text-white'>Javascript</span>
                            </div>
                        </div>
                    </a>
                </motion.div>
                


            </div>
            <div className='flex justify-center'>
                <Nav />
            </div>
        </section>
    );
};

export default Portfolio;<h1>Mon Portfolio</h1>