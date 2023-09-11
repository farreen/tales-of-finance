import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../assets/image/startup1.jpg';
import img2 from '../../assets/image/blog-img-1200x802.jpg';
import img3 from '../../assets/image/images.jpeg';
import img4 from '../../assets/image/istockphoto-1440513619-612x612.jpg';
import useRedirect from "../custom-hooks/useRedirect";
import { navBarData } from "../../data/nav-bar-data";
let targetUrl1 = "";
let targetUrl2 = "";
let targetUrl3 = "";
let targetUrl4 = "";
navBarData.map((item) => {
  if (item?.path === "tales-of-startups") {
    return targetUrl1 = item?.path
  } else if (item?.path === "infographics") {
    return targetUrl2 = item?.path
  } else if (item?.path === "blogs") {
    return targetUrl3 = item?.path
  } else if (item?.path === "glossary") {
    return targetUrl4 = item?.path
  }
})

let images = [
  { image: img1, targetUrl: targetUrl1 },
  { image: img2, targetUrl: targetUrl3 },
  { image: img3, targetUrl: targetUrl2 },
  { image: img4, targetUrl: targetUrl4 },
]


const FeaturedCarsoul = () => {
  const redirectTo = useRedirect();
  return (
    <Carousel fade >
      {images.map((_item, index) => (
        <Carousel.Item key={index + 1}>
          <img
            loading="lazy"
            className="d-block w-100 object-fit-cover"
            src={_item.image}
            alt="First slide"
            style={{ cursor: "pointer" }}
            onClick={() => redirectTo(_item?.targetUrl)}
            // width={100}
            height={400}
          />
          <Carousel.Caption>
            <h3>{_item.image} slide label</h3>
            <p className="text-truncate">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedCarsoul;
