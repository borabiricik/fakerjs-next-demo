import React from "react"
import ProductCard from "./components/ProductCard"
import { faker } from "@faker-js/faker"

// {
//   productId: "f6ce0f00-5dbb-4ed3-bb87-ab01554b38ff",
//   title: "Mandatory analyzing project",
//   description:
//     "Staff dog four movement live. Soldier care no stuff ok example. Medical determine while less leave thousand. Water eat total design program discussion. Good few ready guess under.",
//   image: "https://placekitten.com/556/913",
//   price: "77",
// }

const ProductsPage = () => {
  const createProducts = () => {
    return {
      productId: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
      price: faker.commerce.price(),
    }
  }
  const products = faker.helpers.multiple(createProducts, { count: 20 })
  const currency = "$"
  return (
    <div className="grid grid-cols-2 gap-4 p-16">
      {products.map((product) => (
        <ProductCard currency={currency} key={product.productId} {...product} />
      ))}
    </div>
  )
}

export default ProductsPage
