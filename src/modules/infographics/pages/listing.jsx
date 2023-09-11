import React, { useState } from "react";
// import Card from "../../../common/components/card";
import Masonry from "react-masonry-css";
import "../../../common/styles/global.css";
import { Button, Card, Container, Modal } from "react-bootstrap";
import '../styles/infographic-styles.css'
import '../../../common/custom-button/custom-btn.css'
const InfographicsListing = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => setOpenModal(!openModal);
  return (
    <>
      <Container className="alert alert-info w-100">
        <h1 className="page-title">Infographics</h1>
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
            default: 2,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_i) => (
            <Card className="cursor-pointer boxShadow" onClick={modalHandler}>
              <Card.Img
                variant="top"
                src="https://picsum.photos/200/300"
                height={300}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="text-truncate">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <div className="view-btn d-flex justify-content-center align-items-center gap-2 ">
                view
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  fill="#ffffff"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </Card>
          ))}
        </Masonry>
      </Container>
      <Modal
        show={openModal}
        onHide={modalHandler}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Card className="cursor-pointer">
            <Card.Img
              variant="top"
              src="https://picsum.photos/200/300"
              height={500}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
             
            </Card.Body>
          </Card>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfographicsListing;
