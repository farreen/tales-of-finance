import React, { useState } from 'react'
import "./styles/cardStyle.css"

const CustomCard = ({ item }) => {
  console.log("data", item)
  return (
    <div className='card-contanier' style={{ backgroundColor: item?.color }}>
      <h6 className='card-title'>{item?.category}</h6>
      <p className='card-description'><h5>12K+</h5></p>
    </div>
  )
}

export default CustomCard