import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="banner">
    <div className="scrolling-text">
      <p className='message'>Consulta nuestra oferta gastronómica de navidad</p>
    </div>
  </div>
  );
};

export default Navbar;
