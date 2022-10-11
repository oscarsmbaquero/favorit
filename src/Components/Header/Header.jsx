import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    // <div className="header">
    //   <div className="header__contenedor">
    //     <div className="header__elementos">
    //       <div>
    //         <h2 className="header__logo">Favorit</h2>
    //       </div>
    //       <div className="header__menu">
    //         <ul className="header__ul">
    //           <li>
    //             <NavLink to='/' style={{color: 'whitesmoke', textDecoration: 'none'}}>Home</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to='/gallery' style={{color: 'whitesmoke', textDecoration: 'none'}}>Galeria</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to='/location' style={{color: 'whitesmoke', textDecoration: 'none'}}>Localización</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to='/contact' style={{color: 'whitesmoke', textDecoration: 'none'}}>Contacto</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to='/reservas' style={{color: 'whitesmoke', textDecoration: 'none'}}>Reservas</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to='/login' style={{color: 'whitesmoke', textDecoration: 'none'}}>Login</NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
      <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light m-4 rounded shadow">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">Navbar</a>
                  <button className="navbar-toggler" type="button"
                      data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/">Posts</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/">Profile</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </React.Fragment>
  );
};

export default Header;
