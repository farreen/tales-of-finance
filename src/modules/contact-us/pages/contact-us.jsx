import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faSquareThreads,
} from "@fortawesome/free-brands-svg-icons";
// import contactImg from '../../../assets/image/tof-image.webp'
import companyLogo from "../../../assets/image/tales_of_finance_logo.png";
import contactUsImg from "../../../assets/image/contactUsImg.png";
const ContactUs = () => {
  return (
    <div className="container">
      <div className=" d-flex flex-column justify-content-center align-items-center">
        {/* <img src={companyLogo} loading="lazy" alt="navbar-logo" height="80" width="150" /> */}
        &nbsp;
        <h1>Get in touch !</h1>
        <img src={contactUsImg} height={400} width={400} className="mx-auto" />
        <p>
          {" "}
          <h6 className="d-flex flex-column">
            Our Customer Support Center is your one-stop destination for all
            app-related inquiries. Whether it's troubleshooting, billing
            concerns, or general assistance, our team is committed to providing
            you with the best support experience.
          </h6>
        </p>
      </div>

      <div className="row mt-5 ">
        <div className=" d-flex justify-content-start w-100 col-6">
          <ul className="d-flex justify-content-center mx-auto gap-4 align-items-center list-unstyled">
            <li className="mb-4">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                className="text-decoration-none ps-2"
                href={`mailto:${"contact@talesoffinance.com"}`}
              >
                contact@talesoffinance.com
              </a>
            </li>

            <li className="mb-4">
              <FontAwesomeIcon icon={faPhone} />
              <a href="#" className="text-decoration-none ps-2">
                {" "}
                9874149305
              </a>
            </li>

            <li className="mb-4">
              <FontAwesomeIcon icon={faLocationDot} />
              <a href="#" className="text-decoration-none ps-2">
                Bengaluru, Karnataka.
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          {/* <img className="w-100" src={contactImg} alt="contact-us" /> */}
        </div>

        {/*------------------------ FORM AREA -------------------*/}

        {/* <div className="col-md-6">
          <h4>Send message</h4>
          <form onSubmit="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div> */}
      </div>

      {/* <div className="d-flex gap-5 justify-content-center mt-5 fs-1">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://www.instagram.com/talesoffinance/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://twitter.com/talesoffinance"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/talesoffiance/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://www.threads.net/@talesoffinance"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSquareThreads} />
        </a>
      </div> */}
    </div>
  );
};

export default ContactUs;
