import { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Test from './Test'

function App() {

  return (
    <>
      <section id='Home'>
        <Navbar />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Porfolio'>Parallax</section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id='Contact'>Contact</section>
      
    </>
  )
}

export default App
