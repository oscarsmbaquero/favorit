import React from 'react'
import './Cartas.scss';
import cartaVegetariana from "../../assets/images/cartas/carta_vegetariana_nueva.jpg";

const CartaVegetariana = () => {
  return (
    <section className='food'>
     <div className='food__container'>
          <img className="food__image" src={cartaVegetariana} alt={cartaVegetariana}></img>
    </div>
    </section>
  )
}

export default CartaVegetariana