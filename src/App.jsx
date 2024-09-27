import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import CardsSection from './components/cardsSection/CardsSection'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <section className='bg-container'>

      <Navbar></Navbar>
      <Hero></Hero>
      </section>
      <CardsSection></CardsSection>
      <Footer></Footer>
      </>
  )
}

export default App
