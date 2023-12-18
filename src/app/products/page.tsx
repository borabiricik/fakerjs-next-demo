import React from "react"
import ProductCard from "./components/ProductCard"

// products json like below:
//{
//     productId: faker.string.uuid(),
//     title: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     image: faker.image.url(),
//     price: faker.commerce.price(),
//   }

const products = [
  {
    productId: "f6ce0f00-5dbb-4ed3-bb87-ab01554b38ff",
    title: "Mandatory analyzing project",
    description:
      "Staff dog four movement live. Soldier care no stuff ok example. Medical determine while less leave thousand. Water eat total design program discussion. Good few ready guess under.",
    image: "https://placekitten.com/556/913",
    price: "77",
  },
  {
    productId: "659ab9f3-bf72-4177-b156-69c95d79cdf5",
    title: "Exclusive eco-centric core",
    description:
      "Cost and issue upon bar. Least without write continue on. Eye power radio idea ok notice seven produce. Save ten argue push near book tax. Put player sometimes.",
    image: "https://placekitten.com/556/913",
    price: "40",
  },
  {
    productId: "cca0cf05-2019-4526-832c-6417e6f3d8bc",
    title: "Triple-buffered tertiary leverage",
    description:
      "Me police have central door sometimes simply. Argue or score service political north gas. Speak drug color. Value hair growth assume. Indicate after mouth program air box market because.",
    image: "https://placekitten.com/556/913",
    price: "82",
  },
  {
    productId: "1e2a4614-cd8d-42d1-be01-aaefb5cd5160",
    title: "Organized bottom-line framework",
    description:
      "Try create tax program attention few hot. You evidence collection season way bill show. Music send food consider organization fire throw research.",
    image: "https://placekitten.com/556/913",
    price: "75",
  },
  {
    productId: "217baef1-d29d-419e-9707-a4451f78690c",
    title: "Switchable optimizing system engine",
    description:
      "Same crime mean. Newspaper chance difference population toward system result. Offer stock detail. Rise face through month. Democratic interesting have trip appear report news. Thus manager fund win.",
    image: "https://placekitten.com/556/913",
    price: "15",
  },
  {
    productId: "9347b59f-b691-4ce4-b864-dbe2809cb1c8",
    title: "Focused holistic contingency",
    description:
      "Sort edge student example forget. Also plan particularly this. Realize situation art. Gas page knowledge room model report. Chance agreement word less.",
    image: "https://placekitten.com/556/913",
    price: "68",
  },
  {
    productId: "08eac207-08af-4cab-bddb-9b6b0b919111",
    title: "Devolved global time-frame",
    description:
      "Approach century near want senior reality condition. Attorney morning may north election yet. White knowledge plant. Adult truth design stuff able. Always least woman local over husband realize.",
    image: "https://placekitten.com/556/913",
    price: "3,",
  },
  {
    productId: "343d2c06-bbb3-46d9-902c-d093fd733b6c",
    title: "Managed reciprocal service-desk",
    description:
      "Ahead let child speak mission. Tell condition stay action. Stay probably still sure almost. Argue back anything various remember break.",
    image: "https://placekitten.com/556/913",
    price: "19",
  },
  {
    productId: "c5ef3a4c-452d-461c-a0c2-49d33a48ffa4",
    title: "Profound discrete array",
    description:
      "Glass pay would everyone her new car. Prepare book church chance perhaps magazine. Peace past similar foot leg keep. Assume series road.",
    image: "https://placekitten.com/556/913",
    price: "62",
  },
  {
    productId: "8c5ee671-58f4-4e8e-b87c-818629eccdf8",
    title: "Compatible multimedia frame",
    description: "Tax board even power population arrive. Life hit break.",
    image: "https://placekitten.com/556/913",
    price: "36",
  },
  {
    productId: "cb200269-3aa3-435b-8126-167884027899",
    title: "Multi-layered 24hour synergy",
    description:
      "Talk include method morning likely face public. Forget fact man. Consumer purpose movie figure forget pay rest.",
    image: "https://placekitten.com/556/913",
    price: "46",
  },
]
const ProductsPage = () => {
  const currency = "$"
  return (
    <div className="grid grid-cols-4 gap-4 p-16">
      {products.map((product) => (
        <ProductCard currency={currency} key={product.productId} {...product} />
      ))}
    </div>
  )
}

export default ProductsPage
