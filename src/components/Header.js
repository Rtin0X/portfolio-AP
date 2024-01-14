import React from 'react';
// images
import Logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

import Banner from './Banner';

const Header = () => {
  return ( 
  <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          {/* <img src={Logo} alt="" /> */}
        </a>
        {/* button */}
        <button onClick={Banner} className='btn btn-sm flex justify-center items-center'>
          Me contacter
        </button>
        
      </div>
    </div>
  </header>
  );
};

export default Header;
