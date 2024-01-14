import React from 'react';

// import icons 
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquareText, BsAmazon, BsApple} from 'react-icons/bs';

import { FaRegAddressCard } from "react-icons/fa6";

import { FaComputer } from "react-icons/fa6";

import { GrCertificate } from "react-icons/gr";

import { NavLink } from "react-router-dom";





const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px]mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
        <NavLink to='/' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </NavLink>
        <NavLink to='/about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </NavLink>
        {/* <NavLink to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </NavLink> */}
        <NavLink to='/work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase />
        </NavLink>
        {/* <NavLink to='/certifications' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <GrCertificate />
        </NavLink> */}
        {/* <NavLink to='/cv' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <FaRegAddressCard />
        </NavLink> */}
        {/* <NavLink to='/veille_technologique' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <FaComputer />
        </NavLink> */}
        <NavLink to='/contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquareText />
        </NavLink>
      </div>      
    </div>
  </nav>
  );
};

export default Nav;
