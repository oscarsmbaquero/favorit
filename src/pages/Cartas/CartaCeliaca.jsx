import React from 'react'
import './Cartas.scss';
import cartaCeliaca from "../../assets/images/cartas/carta_celiaco_nueva.jpg";

const CartaCeliaca = () => {
  return (
    <section className='food'>
     <div className='food__container'>
          <img className="food__image" src={cartaCeliaca} alt={cartaCeliaca}></img>
    </div>
    </section>
  )
}

export default CartaCeliaca