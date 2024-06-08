import React from 'react'
import { products } from '../constants'
import PopularProductCard from './PopularProductCard'
import ShoeCard from './ShoeCard'

const PopularProduct = () => {
  return (
    <div>
      <section id="products" className="max-container max-sm:mt-12 padding">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="font-palanquin font-bold text-4xl">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-m flex flex-row">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
          <div className=" mt-16 grid lg:grid-cols-4 m:grod-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product) => (
              <PopularProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularProduct
