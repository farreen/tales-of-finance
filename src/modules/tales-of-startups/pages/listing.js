import React, { useState } from "react";
import "../../../common/styles/global.css";
// import Select from 'react-select';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/checkBox.css'
import filter from '../../../assets/image/filter.png'
import {
  Badge,
  Button,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { listData } from "../demo-data/demo-list-data";
import Form from 'react-bootstrap/Form';
import TofCustomCard from "../../../common/tof-custom-card/TofCustomCard";
import Masonry from "react-masonry-css";

const options = [
  {
    category: "fruit",
    items: ["apple", "orange", "lichi", "banana"]
  },
  {
    category: "vegetables",
    items: ["potato", "oninon", "brinjal", "chilli"]
  },
  {
    category: "cereals",
    items: ["pulse", "wheat", "rice", "etc"]
  },
  {
    category: "pulses",
    items: ["pulse1", "pulse2", "pulse3", "pulse4"]
  },
  {
    category: "nuts",
    items: ["walnut", "cashew", "almond", "pista"]
  },
  {
    category: "nutsA",
    items: ["walnut", "cashew", "almond", "pista"]
  },
  {
    category: "nutsB",
    items: ["walnut", "cashew", "almond", "pista"]
  },
  {
    category: "nutsC",
    items: ["walnut", "cashew", "almond", "pista"]
  },
]
const TalesOfStartupsListing = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => setOpenModal(!openModal);
  const [selectedOption, setSelectedOption] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    name,
    link,
    description,
    legal_name,
    headquarter,
    business_model,
    founding_date,
    employee_count,
    team_member,
    revenue_stream,
    client_segment,
    target_companies,
    target_geography,
    user_age,
    user_income,
    user_location,
  } = listData[0];
  const handleChange = (e) => {
    console.log("targets", e.target.name)
    const { name, checked } = e.target
    if (checked) {
      setSelectedOption([...selectedOption, name])
    } else {
      setSelectedOption(selectedOption.filter((e) => e !== name))
    }

  }
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
      <Container className="d-flex mb-4">
        {/* <Select
          value={selectedOption}
          onChange={(e) => handleChange(e)}
          options={options}
        />
         */}
        <Form>
          {
            options.map((item) => {
              return (
                <div className="checkBox ">
                  <Form.Group>
                    <Form.Check type={"checkbox"}>
                      <Form.Check
                        type={"checkbox"}
                        defaultChecked={false}
                        name={item.items}
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      />
                      <Form.Check.Label>{item.category}</Form.Check.Label>
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
      </Container>
      <Container>
        {selectedOption.map((e) => {
          return (
            <p>{e}</p>
          )
        })}
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Startups</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {
              options.map((item) => {
                return (
                  <div>
                    <Form.Group>
                      <Form.Check type={"checkbox"}>
                        <Form.Check
                          type={"checkbox"}
                          defaultChecked={false}
                          name={item.items}
                          onChange={(e) => {
                            handleChange(e)
                          }}
                        />
                        <Form.Check.Label>{item.category}</Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </div>
                )
              })
            }
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Container >
        {/* <Row> */}
        {/* <Col>
        </Col> */}
        {/* <Col> */}
        {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Headquarter</th>
                <th>Business Model</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((_i, idx) => (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{_i?.name}</td>
                  <td>{_i?.headquarter}</td>
                  <td>{_i?.business_model}</td>
                  <td className="d-flex flex-wrap justify-content-start align-items-center gap-2 cursor-pointer">
                    <Badge
                      bg="primary"
                      className="rounded-circle py-2"
                      onClick={modalHandler}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="#ffffff"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                      </svg>
                    </Badge>
                    <Badge bg="success" className="rounded-circle py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        fill="#ffffff"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}

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
        {/* <div className="d-flex flex-wrap"> */}
          {
            listData.map((items) => {
              return (
                <>
                <TofCustomCard items={items} />
                </>
              )

            })
          }
          {/* </div> */}
        </Masonry>
        {/* </Col> */}
        {/* <Col></Col> */}
        {/* </Row> */}
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
          {name && <h4>{name}</h4>}
          <Table hover>
            <tbody>
              {legal_name && (
                <tr>
                  <td className="fw-bold">Legal name</td>
                  <td>{legal_name}</td>
                </tr>
              )}
              {description && (
                <tr>
                  <td className="fw-bold">Description</td>
                  <td>{description}</td>
                </tr>
              )}
              {headquarter && (
                <tr>
                  <td className="fw-bold">Headquater</td>
                  <td>{headquarter}</td>
                </tr>
              )}
              {business_model && (
                <tr>
                  <td className="fw-bold">Business model</td>
                  <td>{business_model}</td>
                </tr>
              )}
              {founding_date && (
                <tr>
                  <td className="fw-bold">Founding date</td>
                  <td>{founding_date}</td>
                </tr>
              )}
              {employee_count && (
                <tr>
                  <td className="fw-bold">Employee count</td>
                  <td>{employee_count}</td>
                </tr>
              )}
              {team_member && (
                <tr>
                  <td className="fw-bold">Team member</td>
                  <td className="d-flex flex-column justify-content-start">
                    {team_member.map((_t) => (
                      <p>{_t.name}</p>
                    ))}
                  </td>
                </tr>
              )}
              {revenue_stream && (
                <tr>
                  <td className="fw-bold">Revenue stream</td>
                  <td>{revenue_stream}</td>
                </tr>
              )}
              {client_segment && (
                <tr>
                  <td className="fw-bold">Client segment</td>
                  <td>{client_segment}</td>
                </tr>
              )}
              {target_companies && (
                <tr>
                  <td className="fw-bold">Target companies</td>
                  <td>{target_companies}</td>
                </tr>
              )}
              {target_geography && (
                <tr>
                  <td className="fw-bold">Target companies</td>
                  <td>{target_geography}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default TalesOfStartupsListing;
