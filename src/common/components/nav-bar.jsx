import React, { memo, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { navBarData } from "../../data/nav-bar-data";
import companyLogo from "../../assets/image/tales_of_finance_logo.png";
import GlobalSearch from "./global-search";
import useRedirect from "../custom-hooks/useRedirect";

const NavigationBar = () => {
  const redirectTo = useRedirect();
  const [show, setShow] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
    // useEffect(() => {}, []);
  const offCanvasShowControler = () => {
    if (isMobile) {
      setShow(!show);
    }
  };
  const getActiveNavItem = (navItem = "Home", path) => {
    console.log("inside func", path);
    setActiveNavItem(navItem);
    if (isMobile) {
      setShow(false);
    }
    redirectTo(path);
  };
  const expand = "lg";
  const order = isMobile ? "order-first" : "order-last";
  //   const order = "order-last";
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          {/* <Image src={companyLogo} height={50} alt="navbar-logo" /> */}
          <img src={companyLogo} loading="lazy" alt="navbar-logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={offCanvasShowControler} />
        <Navbar.Offcanvas
          placement="end"
          show={show}
          scroll={true}
          backdrop={true}
          onHide={offCanvasShowControler}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
                src={companyLogo}
                loading="lazy"
                alt="offcanvas-logo"
                height="50"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex justify-content-end flex-grow-1 pe-3 gap-2">
              {navBarData?.map((_nav_item) => (
                <Button
                  variant={`${
                    activeNavItem == _nav_item?.name
                      ? "primary"
                      : "outline-secondary"
                  } border-0`}
                  className={
                    activeNavItem == _nav_item?.name
                      ? "shadow"
                      : "bg-opacity-10"
                  }
                  key={_nav_item?.name}
                  onClick={() =>
                    getActiveNavItem(_nav_item?.name, _nav_item?.path)
                  }
                >
                  {_nav_item?.name}
                </Button>
              ))}
              <div
                className={`d-flex justify-content-center align-items-center ${order}`}
              >
                <GlobalSearch />
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default memo(NavigationBar);
