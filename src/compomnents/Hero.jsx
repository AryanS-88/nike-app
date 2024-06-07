import React from 'react'
import Button from '../compomnents/Button'
import ShoeCard from './ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants/index'
import { bigShoe1, bigShoe2 } from '../assets/images'
import { useState } from 'react'
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <div>
      <section className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span xl:bg-white xl:whitespace-nowrap relative z-11 pr-10>
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span>{' '}
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg sm:max-w-sm mt-6 mb-14">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop now" iconUrl={arrowRight} />
          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className=" text-4xl font-bold font-palanquin">
                  {stat.value}
                </p>
                <p className="text-slate-gray leading-7">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 felx justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg center ">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contatin relative
            z-10"
          />
          <div className="flex sm:gap-6 gap4 absolute -bottom-[5%] sm:left-[10%]">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imageURl={shoe}
                  changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
