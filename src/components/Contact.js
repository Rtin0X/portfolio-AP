import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// motion
import {motion} from 'framer-motion';
// variants
import { fadeIn } from '../variants';


import Nav from '../components/Nav';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyv0klc', 'template_5q9pq9o', form.current, 'z7j3m5YU1N2NO7vHx')
      .then((result) => {
          console.log(result.text);
          alert("Votre message a bien été envoyé !")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite, veuillez réessayer.")
          form.current.reset();
      });
  };
  

  return ( 

  <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto pb-[100px]">
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
            <h2 className='flex items-center text-[45px] lg:text-[90px] leading-none mb-12'>Me <br /> Contacter  </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form 
        ref={form} onSubmit={sendEmail}
        action='#'
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={ { once: false, amount: 0.3 } }>
          <input 
          autoComplete='off' 
          required
          name='name'
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type="text"
          placeholder='Nom' />
          <input 
          autoComplete='off'
          required 
          name='user_email'
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type="text"
          placeholder='Email' />
          <textarea 
          autoComplete='off' 
          required
          name='message'
          className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
          placeholder='Ecrire un message'></textarea>
          <button type='submit' className='btn btn-lg'>Envoyer</button>
        </motion.form>
      </div>
    </div>
    <Nav />
  </section>
  );
};

export default Contact;
