import React from 'react'
import './Cartas.scss';
import ofertaNavidad from "../../assets/images/cartas/menu_navidad.jpg";

const CartaFood = () => {
  return (
    <section className='food'>
     <div className='food__container'>
          <img className="food__image" src={ofertaNavidad} alt="ofertaNavidad"></img>
    </div>
    </section>
  )
}

export default CartaFood