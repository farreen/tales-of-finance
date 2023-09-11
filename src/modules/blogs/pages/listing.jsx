import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blogsDummyData } from "../blog-data/blog-data";
import '../styles/blogStyles.css';

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
                        height={300}
                        width={200}
                      />
                    </Card>
                  </Col>
                  <Col md={6} className="mt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit ullam rem nemo dolores. Doloremque aliquam labore facere blanditiis corrupti odio dolorem, atque fuga sit, id doloribus non. Molestias, quos?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquam excepturi doloremque placeat impedit temporibus fuga voluptate fugit nemo quidem facere aperiam veritatis ducimus voluptates, odit reiciendis aspernatur ipsa. Quibusdam?
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima maiores quia atque quidem non eaque voluptate, impedit asperiores? Molestias ut asperiores dolores aperiam suscipit doloribus reprehenderit rem, accusamus accusantium soluta
                    </p>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6} className="mt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit vero ea debitis libero quod modi distinctio at consequatur labore, doloremque eius, dolore rerum quos rem adipisci cum. Corporis, adipisci!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ea dolorum, praesentium eos eligendi rerum minus molestiae, soluta voluptate voluptas facere culpa id et repellat tenetur ut blanditiis autem error?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officia dolorem, illum atque nostrum numquam impedit molestiae similique rerum porro assumenda eum dolore! Quos voluptates nisi beatae fugit laborum obcaecati?
                    </p>
                  </Col>
                  <Col md={6}>
                    <Card className="shadow" >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        height={300}
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

