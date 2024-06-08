import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="gap-2.5 py-5 text-slate-gray font-montserrat flex flex-row">
        <img src={star} alt="rating" width={24} height={24} />({rating})
      </div>
      <h3 className="text-2xl font-semibold font-palanquin leading-normal">
        {name}
      </h3>
      <p className="font-semibold text-2xl leading-normal font-montserat text-coral-red text-bold text-l">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
