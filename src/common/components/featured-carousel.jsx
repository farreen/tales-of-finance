import React from "react";
import { Carousel } from "react-bootstrap";
import img from '../../assets/image/featured-carousel-demo-image.png'

const FeaturedCarsoul = () => {
  return (
    <Carousel fade>
      {[1, 2, 3, 4].map((_item, index) => (
        <Carousel.Item key={index + 1}>
          <img
            loading="lazy"
            className="d-block w-100"
            src={img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{_item} slide label</h3>
            <p className="text-truncate">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedCarsoul;
