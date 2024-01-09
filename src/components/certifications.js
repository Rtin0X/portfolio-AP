import React from 'react';

// motion
import {motion} from 'framer-motion';
// variants
import { fadeIn } from '../variants';


import Nav from '../components/Nav';

const certifications = () => {
    return (
        <section className='py-16 lg:section'>
        <div className="container mx-auto pb-[200px]">
          <div className='flex flex-col lg:flex-row p-10'>
            {/* text */}
            <motion.div
              className='flex-1 flex justify-start items-center'
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}>
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'></h4>
                <h2 className='flex items-center text-[45px] lg:text-[90px] leading-none mb-12'>
                    Certifications 
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
        <Nav />
      </section>
    );
};

export default certifications;