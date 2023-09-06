import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import companyLogo from '../../assets/image/tales_of_finance_logo.png'
import { faFacebook, faInstagram, faLinkedin, faSquareThreads, faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="position-absolute w-100">
      <Row className="w-100 m-0 bg-primary p-3 bg-opacity-10 ">
        <Col className="mt-4">
          {/* <img src={companyLogo} loading="lazy" alt="navbar-logo" height="40" width="50" /> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias quod tempora sint eos, mollitia sapiente labore laboriosam voluptas consequatur ullam officia dignissimos doloremque fugiat, similique accusamus incidunt impedit eius!</p>
          <div className="d-flex gap-5 justify-content-center fs-1">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://www.instagram.com/talesoffinance/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://twitter.com/talesoffinance" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/talesoffiance/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://www.threads.net/@talesoffinance" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareThreads} />
            </a>
          </div>
        </Col>
        {/* <Col className="d-flex flex-column justify-content-center align-items-center">
          <h4>Categories</h4>
          <div>
            <div>
              Tales of Startups
            </div>
            <div>
              Infographics
            </div>
            <div>
              Glossary
            </div>
            <div>
              Blogs
            </div>
          </div>
        </Col> */}
        <Col className="d-flex flex-column justify-content-center align-items-center">
          {/* <h4>Contact us</h4> */}
          <div>
            <ul className=" fs-5 list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a className="text-decoration-none ps-2" href={`mailto:${'contact@talesoffinance.com'}`}>contact@talesoffinance.com</a>
              </li>

              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} />
                <a href="#" className="text-decoration-none ps-2"> 9874149305</a>
              </li>

              <li className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="#" className="text-decoration-none ps-2">Bengaluru, Karnataka.</a>
              </li>

            </ul>

          </div>
        </Col>
        <span className=" d-flex justify-content-center ">© 2021 Company, Inc. All rights reserved.</span>
      </Row>
    </div>
  );
};

export default Footer;