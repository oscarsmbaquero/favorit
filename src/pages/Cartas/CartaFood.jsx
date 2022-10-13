import React from 'react'
import './Cartas.scss';
import cartaComida from "../../assets/images/cartas/comida.jpg";

const CartaFood = () => {
  return (
    <section className='food'>
     <div className='food__container'>
          <img className="food__image" src={cartaComida} alt={cartaComida}></img>
    </div>
    </section>
  )
}

export default CartaFood