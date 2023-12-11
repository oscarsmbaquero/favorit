import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { FormattedMessage } from "react-intl";
import I18n from "../../context/i18n/I18n";
import navidad from "../../assets/images/regalos.png";
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
    <img src={navidad} alt={navidad} className='navidad'/>
    <p className='message'><FormattedMessage id="app.ofertaNavidadBanner"/></p>
    <img src={navidad} alt={navidad} className='navidad'/>
      {/* <p className='message'>Consulta nuestra oferta gastronómica de navidad</p> */}
    </div>
  </div>
  );
};

export default Navbar;
