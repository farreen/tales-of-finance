import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Card from "./card";
import companyLogo from "../../assets/image/tales_of_finance_logo.png";

const CommonSwiper = (props) => {
  const { data, bgColor } = props;
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={`bg-${bgColor} my-2`}
    >
      <SwiperSlide className="px-2 my-2">
        <Card>
          <Card.Body className="d-flex justify-content-start align-items-center gap-2">
            <img
              src={companyLogo}
              loading="lazy"
              alt="navbar-logo"
              height="70"
              width="100"
              align="left"
            />
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h5 className="text-truncate">Title</h5>
              <p className="text-truncate m-0">Description</p>
            </div>
          </Card.Body>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default CommonSwiper;
