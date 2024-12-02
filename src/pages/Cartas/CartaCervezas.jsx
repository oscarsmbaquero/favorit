import React from 'react';
import './Cartas.scss';
import cartaCerveza from "../../assets/images/cartas/nueva_carta_cerveza.jpg";


const CartaCervezas = () => {
  return (
    <section className='beer'>
     <div className='beer__container'>
          <img className="beer__image" src={cartaCerveza} alt={cartaCerveza}></img>
    </div>
    </section>
  )
}

export default CartaCervezas