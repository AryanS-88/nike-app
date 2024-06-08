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
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <PopularProduct />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <SuperiorQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section>
        <Specialoffer />
      </section>
      <section className="bg-pale-blue padding">
        <CutomerReview />
      </section>
      <Subscribe />
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
