import React, { useState } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import { demoGlossaryList } from "../demo-data/demo-data-list";

const GlossaryListing = () => {
  const [activeTab, setActiveTab] = useState("startup-glossary");
  return (
    <>
      <Container className="alert alert-primary w-100">
        <h1 className="page-title">Glossary</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </Container>
      <Container className="alert alert-info p-0 w-100">
        <ul className="nav nav-pills nav-fill gap-2">
          <li className="nav-item cursor-pointer">
            <a
              className={`nav-link ${
                activeTab == "startup-glossary" ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActiveTab("startup-glossary")}
            >
              Startup Glossary
            </a>
          </li>
          <li className="nav-item cursor-pointer">
            <a
              className={`nav-link ${
                activeTab == "web3-glossary" ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActiveTab("web3-glossary")}
            >
              Web3 Glossary
            </a>
          </li>
          <li className="nav-item cursor-pointer">
            <a
              className={`nav-link ${
                activeTab == "sustainability-glossary" ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActiveTab("sustainability-glossary")}
            >
              Sustainability Glossary
            </a>
          </li>
        </ul>
      </Container>
      <Container className="p-0 w-100">
        {demoGlossaryList.map((_item) => (
          <>
            <h2>#{_item.letter}</h2>
            {_item.list.map((_i) => (
              <Card className="my-2">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                  <Card.Title>{_i.name}</Card.Title>
                  <Card.Text>{_i.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        ))}
      </Container>
    </>
  );
};

export default GlossaryListing;
