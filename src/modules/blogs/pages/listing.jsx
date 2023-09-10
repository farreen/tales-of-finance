import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blogsDummyData } from "../blog-data/blog-data";
import '../styles/blogStyles.css';

const BlogListing = () => {
  return (
    <>
      <Container className="my-4 w-100">
        <Row>
          {
            blogsDummyData.map((item, index) => (
              !(index % 2) ? (
                <>
                  <Col md={6} >
                    <Card className="shadow" >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        height={200}
                        width={200}
                      />
                    </Card>
                  </Col>
                  <Col md={6} className="mt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit ullam rem nemo dolores. Doloremque aliquam labore facere blanditiis corrupti odio dolorem, atque fuga sit, id doloribus non. Molestias, quos?</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6} className="mt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit vero ea debitis libero quod modi distinctio at consequatur labore, doloremque eius, dolore rerum quos rem adipisci cum. Corporis, adipisci!</p>
                  </Col>
                  <Col md={6}>
                    <Card className="shadow" >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        height={200}
                        width={200}
                      />
                    </Card>
                  </Col>
                </>
              )
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default BlogListing

