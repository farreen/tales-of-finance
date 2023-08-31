import React, { useState } from "react";
// import Card from "../../../common/components/card";
import Masonry from "react-masonry-css";
import "../../../common/styles/global.css";
import { Button, Card, Container, Modal } from "react-bootstrap";

const BlogListing = () => {
  return (
    <>
      <Container className="alert alert-success w-100">
        <h1 className="page-title">Blogs</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </Container>
      <Container className="w-100">
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_i) => (
            <Card className="bg-light cursor-pointer">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/200/300"
                  height={300}
                />
                <Card.Text className="text-truncate">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default BlogListing;
