import React from 'react'
import "./styles/cardStyle.css"

const CustomCard = ({color}) => {
  console.log("colo", color)
  return (
    <div className='card-contanier' style={{backgroundColor: color}}>
        <h5 className='card-title'>Tales of Startup</h5>
        <h6 className='card-title'>Here are the lists of most exciting startups in each of the industry</h6>
        <p className='card-description'><h5>12K+</h5></p>
    </div>
  )
}

export default CustomCard