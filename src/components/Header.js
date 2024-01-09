import React from 'react';
// images
import Logo from '../assets/logo.svg';



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
        <a href='/contact' className='btn btn-sm flex justify-center items-center'>
          Me contacter
        </a>
      </div>
    </div>
  </header>
  );
};

export default Header;
