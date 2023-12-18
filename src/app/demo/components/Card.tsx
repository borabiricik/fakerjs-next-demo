"use client"
import React from "react"
import ReactCreditCards from "react-credit-cards-2"
import "react-credit-cards-2/dist/es/styles-compiled.css"

type Props = {
  cvc: string
  expiry: string
  name: string
  number: string
}

const Card = (card: Props) => {
  return <ReactCreditCards {...card} />
}

export default Card
