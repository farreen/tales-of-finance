import React from "react";
import FeaturedCarsoul from "../../../common/components/featured-carousel";
import CommonSwiper from "../../../common/components/common-swiper";
import { Badge, Card, Container, Table } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomCard from "../../../common/custom-card/CustomCard";

// Import Swiper styles
import "swiper/css";
// import Card from "../../../common/components/card";
import { listData } from "../../tales-of-startups/demo-data/demo-list-data";
const HomePage = () => {
  return (
    <>
      <FeaturedCarsoul />

      <Container className="my-4 w-100">
        <div className="alert alert-info">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Tales of Startup</h1>
            <Badge bg="primary" className="d-flex gap-2">
              View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#ffffff"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Badge>

          </div>
          <p>
            Here are the lists of most exciting startups in each of the industry{" "}
          </p>

          <div className="d-flex flex-wrap">
            {
              listData.slice(0, 6).map((item, index) => {
                return (
                  <CustomCard item={item} />
                )
              })
            }
          </div>
        </div>

      </Container>
      <Container className="my-4 w-100">
        <div className="alert alert-info">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Infographics</h1>
            <Badge bg="primary" className="d-flex gap-2">
              View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#ffffff"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Badge>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <Swiper
            spaceBetween={10}
            // slidesPerView={4}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={`my-2`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_i) => (
              <SwiperSlide className="px-2 my-2 cursor-pointer">
                {/* <Card>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/200/300"
                    height={200}
                    width={100}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-truncate">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card> */}
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://picsum.photos/200/300"
                    alt="Card image"
                    height={300}
                    width={100}
                  />
                  <div className="overlay pt-2 px-2 rounded-3">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <Container className="my-4 w-100">
        <div className="alert alert-success">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Blogs</h1>
            <Badge bg="primary" className="d-flex gap-2">
              View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#ffffff"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Badge>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <Swiper
            spaceBetween={10}
            // slidesPerView={4}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={`my-2`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_i) => (
              <SwiperSlide className="px-2 my-2 cursor-pointer">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/200/300"
                    height={200}
                    width={100}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-truncate">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      {/* <CommonSwiper bgColor="primary" />
      <CommonSwiper bgColor="warning" />
      <CommonSwiper bgColor="success" /> */}
    </>
  );
};

export default HomePage;
