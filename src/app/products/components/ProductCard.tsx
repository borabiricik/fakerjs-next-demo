import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  image: string
  title: string
  description: string
  price: string
  currency: string
}

const ProductCard = ({ description, image, price, title, currency }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border border-gray-300 flex flex-col justify-between col-span-1">
      <Image
        src={image}
        alt="Product"
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-slate-600">
          {price} {currency}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Satın Al
        </button>
      </div>
    </div>
  )
}

export default ProductCard
