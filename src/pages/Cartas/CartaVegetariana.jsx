import React from 'react'
import './Cartas.scss';
import cartaVegetariana from "../../assets/images/cartas/cartaVegetariana.jpg";

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