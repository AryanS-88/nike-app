import React from 'react'

const ShoeCard = ({ imageURl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURl) {
      changeBigShoeImage(imageURl.bigShoe)
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageURl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imageURl.thumbnail}
          alt="Shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
