import React,{useState, useEffect} from 'react';
import './Home.scss'
import  logo  from '../../assets/images/logoFavorit.jpeg';


const Home = () => {
  

  return (
   <>
    <div className='home'>
    <img className="logo" src={logo} alt="logo"></img>
    <p>Somos un gastrobar innovador, ofrecemos los mejores servicios para todo tipo de clientes. Cocina oriental, occidental y tradicional con cartas para vegetarianos y celíacos (platos sin gluten), también puedes disfrutar de nuestro delicioso café, vino y copas con tus familiares y amigos.</p>
          {/* <img className="home__image" src={fondo} alt="logo"></img> */}
    </div>
   
   </>
  )
}

export default Home