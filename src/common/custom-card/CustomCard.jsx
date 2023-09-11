import React, { useState } from 'react';
import "./styles/cardStyle.css";
import { navBarData } from '../../data/nav-bar-data';
import useRedirect from '../custom-hooks/useRedirect';

const CustomCard = ({ item }) => {
  console.log("data", item)

  const redirect = useRedirect();
  let talesOfStartups = "";
  let infographics = "";
  let blogs = "";
  navBarData.map((item) => {
    if (item?.path === "tales-of-startups") {
      return talesOfStartups = item?.path
    } else if (item?.path === "infographics") {
      return infographics = item?.path
    } else if (item?.path === "blogs") {
      return blogs = item?.path
    }
  })
  return (
    <div className='card-contanier' style={{ backgroundColor: item?.color }}
      onClick={() => redirect(talesOfStartups)}

    >
      <h6 className='card-title'>{item?.category}</h6>
      <p className='card-description'><h5>12K+</h5></p>
    </div>
  )
}

export default CustomCard