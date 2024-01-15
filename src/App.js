import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Certifications from './components/certifications';
import Cvsamy from './components/cv';
import Veille_techno from './components/veille_techno';
import NotFound from './components/NotFound';
import Portfolio from './components/Portfolio';

// import routes and route
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Banner />} /> 
          <Route path="*" element={<Banner />} /> 
          <Route path="/about" element={<About />} /> 
          {/* <Services /> */}
          <Route path="/work" element={<Work />} /> 
          <Route path="/certifications" element={<Certifications />} /> 
          <Route path="/cv" element={<Cvsamy />} /> 
          <Route path="/veille_technologique" element={<Veille_techno />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <div className='h-[300px]'></div> 
    </div>
  );
};

export default App;
