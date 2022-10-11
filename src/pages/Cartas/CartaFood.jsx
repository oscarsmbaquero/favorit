import React from 'react'
import './Cartas.scss';
import cartaComida from "../../assets/images/cartas/comida.jpg";

const CartaFood = () => {
  return (
    <section className='sectionGastro'>
     <div className='container'>
          <img className="home__image" src={cartaComida} alt={cartaComida}></img>
    </div>
    </section>
  )
}

export default CartaFood