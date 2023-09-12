import React, { useState } from 'react';
import "./styles/cardStyle.css";
import useRedirect from '../custom-hooks/useRedirect';

const CustomCard = ({ item }) => {
  console.log("data", item)

  const redirect = useRedirect();
  return (
    <div className='card-contanier' style={{ backgroundColor: item?.color }}
      onClick={() => redirect('tales-of-startups/category')}

    >
      <h6 className='card-title'>{item?.category}</h6>
      <p className='card-description'><h6>{item?.startupCount}</h6></p>
    </div>
  )
}

export default CustomCard