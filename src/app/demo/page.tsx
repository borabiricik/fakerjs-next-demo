import React from "react"
import Card from "./components/Card"
import { faker } from "@faker-js/faker"

// {
//   cvc: "123",
//   expiry: "12/34",
//   name: "Bora Biricik",
//   number: "1234 5678 1234 5678",
// }

const DemoPage = () => {
  const card = {
    cvc: faker.finance.creditCardCVV(),
    expiry: `${faker.date
      .future()
      .getMonth()
      .toString()
      .padStart(2, "0")}/${faker.date.future().getFullYear()}`,
    name: faker.person.fullName(),
    number: faker.finance.creditCardNumber().replaceAll("-", ""),
  }
  return (
    <div>
      <Card {...card} />
    </div>
  )
}

export default DemoPage
