
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'


function App() {

  return (
    <>
      <section id='Home'>
        <Navbar />
        <Hero />
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
