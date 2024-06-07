import React from 'react'
import CutomerReview from './compomnents/CutomerReview'
import Footer from './compomnents/Footer'
import Hero from './compomnents/Hero'
import Navbar from './compomnents/Navbar'
import PopularProduct from './compomnents/PopularProduct'
import Services from './compomnents/Services'
import Specialoffer from './compomnents/Specialoffer'
import Subscribe from './compomnents/Subscribe'
import SuperiorQuality from './compomnents/SuperiorQuality'

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PopularProduct />
      <SuperiorQuality />
      <Services />
      <Specialoffer />
      <CutomerReview />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
