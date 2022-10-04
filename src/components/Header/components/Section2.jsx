//Section 2 by Dania Haroun !!!
//Sticky Header
import logo from "../images/1.png";
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import LocationBar from "./LocationBar";
import OffcanvasNavbar from "./OffcanvasNavbar"; //this is my navbar that will appeare when the page size is reduce
import Container from "../../Container";
import SearchBar from "./SearchBar";

function Section2() {
  /////////////----------------This is function for fixed the navbar when the user scrolled---------------------------/////////////////
  const [fix, setFix] = useState(false);
  function setFixed() {
    console.log("window", window.scrollY, fix);
    if (window.scrollY >= 43) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", setFixed);
  });//,[]
  //////////-----------------End of the function-----------------------------/////////////
  return (
    <div
      className={
        fix
          ? "bg-white  position-fixed top top-0  shadow-sm w-100 fixed-nav"
          : "bg-white "
      }
    >
      <div>
        <Container>
          <Row className="align-items-center  gx-2  py-2">
            <Col xl={2} md={4} xs={12}>
              <Row className="align-items-center justify-content-between gx-2 ">
                <Col md={2} xs={2} className="d-xl-none">
                  <OffcanvasNavbar />
                </Col>
                <Col xl={8} md={6} xs={3}>
                  <img
                    src={logo}
                    alt="logo"
                    className="align-items-center logoimagesection2header w-100"
                  />
                </Col>
                <Col md={3} xs={2} className="d-xl-none d-md-block d-none ">
                  <LocationBar />
                </Col>
                <Col xs={2} className="d-md-none">
                  <div className="d-flex justify-content-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xl={7} xs={0} className="d-none d-xl-block">
              <Row className="align-items-center gx-2 ">
                <Col xl={4} xs={8}>
                  <LocationBar />
                </Col>
                <Col xl={8} lg={0} className="d-none d-xl-block">
                  <div className="text-white  text-overflow-1 d-sm-none d-md-block">
                    <InputGroup>
                      <Form.Control
                        placeholder="I'm searching for...."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button id="button-addon2" className="searchicon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={3} xs={8} className="d-none d-md-block">
              <Row>
                <ul className="unstiled-list  p-0 d-flex  align-items-center justify-content-end w-100">
                  <Col xxl={1}xl={1}>
                    
                    <li className="m-0 d-xl-none d-block">
                      <SearchBar/>
                    </li>
                  </Col>
                  <li className="m-0 d-xl-none d-block px-3">
                    <span>|</span>
                  </li>
                  <Col xxl={2} xl={2}>
                    <li className="m-0 phoneli ">
                      <div className="d-flex align-items-center justify-content-center gap-2 ">
                        <div><a href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            className="feather feather-phone-call text-aa"
                          >
                            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg></a>
                        </div>
                        <div className="d-none d-lg-none d-xl-none d-xxxl-block">
                          <span className="text-aa">24/7 Delivery</span>
                          <h6>+91 888 104 2340</h6>
                        </div>
                      </div>
                    </li>
                  </Col>
                  <li className="m-0 px-3">
                    <span>|</span>
                  </li>
                  <Col xxl={1} xl={1}>
                    <li className="m-0"><a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart text-aa"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg></a>
                    </li>
                  </Col>
                  <li className="m-0 px-3">
                    <span>|</span>
                  </li>
                  <Col xxl={1} xl={1}>
                    <li className="m-0"><a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-cart text-aa"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg></a>
                    </li>
                  </Col>
                  <li className="m-0 px-3">
                    <span>|</span>
                  </li>
                  <Col xxl={2} xl={2}>
                    <li className="m-0 ">
                      <div className="d-flex align-items-center justify-content-center gap-1 ">
                        <div><a href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user text-aa"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg></a>
                        </div>
                        <div className="d-none d-lg-none d-xl-none d-xxxl-block">
                          <span className="text-aa">Hello,</span>
                          <h6>My Acount</h6>
                        </div>
                      </div>
                    </li>
                  </Col>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Section2;

//End of Section2 (Sticky Header)
