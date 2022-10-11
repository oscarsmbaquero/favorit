import React from 'react';
import './Cartas.scss';
import cartaCerveza from "../../assets/images/cartas/cervezas.jpg";


const CartaCervezas = () => {
  return (
    <section className='sectionCervezas'>
     <div className='container'>
          <img className="home__image" src={cartaCerveza} alt={cartaCerveza}></img>
    </div>
    </section>
  )
}

export default CartaCervezas