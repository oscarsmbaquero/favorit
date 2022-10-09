import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__contenedor">
        <div className="header__elementos">
          <div>
            <h2 className="header__logo">Favorit</h2>
          </div>
          <div className="header__menu">
            <ul className="header__ul">
              <li>
                <NavLink to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/gallery' style={{paddingLeft: 13, textDecoration: 'none'}}>Galeria</NavLink>
              </li>
              <li>
                <NavLink to='/location' style={{paddingLeft: 13, textDecoration: 'none'}}>Localización</NavLink>
              </li>
              <li>
                <NavLink to='/contact' style={{paddingLeft: 13, textDecoration: 'none'}}>Contacto</NavLink>
              </li>
              <li>
                <NavLink to='/reservas' style={{paddingLeft: 13, textDecoration: 'none'}}>Reservas</NavLink>
              </li>
              <li>
                <NavLink to='/login' style={{paddingLeft: 13, textDecoration: 'none'}}>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
