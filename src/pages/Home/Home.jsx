import React,{useState, useEffect} from 'react';
import './Home.scss'
import  fondo  from '../../assets/images/bar1.jfif';

const Home = () => {
  
  
  return (
   
    <div className='home'>
          <img className="home__image" src={fondo} alt="logo"></img>
    </div>
   
  )
}

export default Home