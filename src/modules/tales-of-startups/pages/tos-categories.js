
import React, { useState } from "react";
import "../../../common/styles/global.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from "react-bootstrap";
import { listData } from "../demo-data/demo-list-data";
import Form from 'react-bootstrap/Form';
import ToSCustomCard from "../../../common/tof-custom-card/ToSCustomCard";
import Masonry from "react-masonry-css";
import { industries } from "../demo-data/categories-demo-data"
const CategoriesListing = () => {
  // const [selectedOption, setSelectedOption] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleChange = (e) => {
  //   console.log("targets", e.target.name)
  //   const { name, checked } = e.target
  //   if (checked) {
  //     setSelectedOption([...selectedOption, name])
  //   } else {
  //     setSelectedOption(selectedOption.filter((e) => e !== name))
  //   }

  // }
  return (
    <>
      <Container className="alert alert-warning w-100">
        <h1 className="page-title">Tales of Startups</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </Container>
      {/* <Container className="d-flex mb-4">
        <Select
          value={selectedOption}
          onChange={(e) => handleChange(e)}
          options={options}
        />
        
        <Form>
          {
            industries.map((item) => {
              return (
                <div className="checkBox ">
                  <Form.Group>
                    <Form.Check type={"checkbox"}>
                      <Form.Check
                        type={"checkbox"}
                        defaultChecked={false}
                        name={item}
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      />
                      <Form.Check.Label>{item}</Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </div>
              )
            })
          }
        </Form>

        <Button variant="primary" onClick={handleShow}>
          <img src={filter} loading="lazy" alt="filter" height="20" width="20" fill="#FFF" />
          Filter
        </Button>
      </Container> */}
      {/* <Container>
        {selectedOption.map((e) => {
          return (
            <p>{e}</p>
          )
        })}
      </Container> */}

      {/* <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Startups</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {
              industries.map((item) => {
                return (
                  <div>
                    <Form.Group>
                      <Form.Check type={"checkbox"}>
                        <Form.Check
                          type={"checkbox"}
                          defaultChecked={false}
                          name={item}
                          onChange={(e) => {
                            handleChange(e)
                          }}
                        />
                        <Form.Check.Label>{item}</Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </div>
                )
              })
            }
          </Form>
        </Offcanvas.Body>
      </Offcanvas> */}

      <Container >
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            750: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {
            listData.map((item) => {
              return (
                <>
                  <ToSCustomCard item={item} />
                </>
              )

            })
          }
        </Masonry>
      </Container>
    </>
  );

};

export default CategoriesListing;
