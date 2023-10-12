import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import './hero.scss'
import imagenHero from '../../assets/hero.png'
import imagenScroll from '../../assets/scroll.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_wrapper'>
        <div className='heroTextContainer'>
          <h2>Fulano Mengano</h2>
          <h1>Desarrollador Frontend UI Designe</h1>
          <div className='buttons'>
            <button>Ver Proyectos</button>
            <button>Contáctame</button>
          </div>
          <img src={imagenScroll} alt="scroll" />
        </div>
      </div>
      <div className='imageContainer'>
        <img src={imagenHero} alt="hero" />
      </div>
    </div>
  )
}

export default Hero