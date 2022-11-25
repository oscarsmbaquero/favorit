import React from 'react';
import './Cartas.scss';
import cartaVino from "../../assets/images/cartas/cartaVino.jpg";


const CartaVino = () => {
  return (
    <section className='beer'>
     <div className='beer__container'>
          <img className="beer__image" src={cartaVino} alt={cartaVino}></img>
    </div>
    </section>
  )
}

export default CartaVino