import React from "react"
import Card from "./components/Card"

const DemoPage = () => {
  const card = {
    cvc: "123",
    expiry: "12/34",
    name: "Bora Biricik",
    number: "1234 5678 1234 5678",
  }
  return (
    <div>
      <Card {...card} />
    </div>
  )
}

export default DemoPage
