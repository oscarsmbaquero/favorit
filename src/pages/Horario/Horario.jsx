import React from 'react'
import './Horario.scss';
import horario from "../../assets/images/horario.jpg";

const Horario = () => {
  return (
    <section className='horario'>
     <div className='horario__container'>
          <img className="horario__image" src={horario} alt={horario}></img>
    </div>
    </section>
  )
}

export default Horario