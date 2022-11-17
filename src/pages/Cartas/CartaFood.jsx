import React from 'react'
import './Cartas.scss';
import cartaNormal from "../../assets/images/cartas/cartaNormal.jpg";

const CartaFood = () => {
  return (
    <section className='food'>
     <div className='food__container'>
          <img className="food__image" src={cartaNormal} alt={cartaNormal}></img>
    </div>
    </section>
  )
}

export default CartaFood