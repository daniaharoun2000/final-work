
import { NavLink } from "react-router-dom";
import {Row,Col,Navbar,NavDropdown,Dropdown,Button,Modal} from "react-bootstrap";
import React, { useState } from "react";
import Container from "../../Container";

//Section 3 by Dania Haroun !!!

function Section3() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bg-white">
      <div className="d-none d-lg-block ">
        <Container>
          <Row className="align-items-center justify-content-between  pt-3 ">
            <Col xl={2} md={3}><div className="d-flex justify-content-start">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-one"
                  className="AllCategories align-items-center justify-content-center d-flex "
                >
                      <div className="d-flex justify-content-center align-items-center p-1">
                    <div className="px-1">
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
                    className="AllCategoriesIcon "
                  >
                    <line x1="17" y1="10" x2="3" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="17" y1="18" x2="3" y2="18"></line>
                  </svg></div> <div className="px-1">
                  <span className="align-items-center justify-content-center d-flex ml-2">
                  
                    All Categories
                  </span></div></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/" >
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                      alt=""
                      className="section3lesicon me-2 me-2"
                    />
                   <span className="sectuin3allcatogtext "> Vegetables & Fruit</span> 
                  </Dropdown.Item>
                  <Dropdown.Item href="/">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                      alt=""
                      className="section3lesicon me-2"
                    />
                      <span className="sectuin3allcatogtext ">Beverages</span>  
                   
                  </Dropdown.Item>
                  <Dropdown.Item href="/">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                      alt=""
                      className="section3lesicon me-2"
                    />
                      <span className="sectuin3allcatogtext ">Meats &amp; Seafood</span>  
                   
                  </Dropdown.Item>
                                  </Dropdown.Menu>
              </Dropdown></div>
            </Col>
            <Col xl={8} md={7} className="d-none d-xl-block ">
              <Navbar >
                <Navbar.Toggle  />
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className="  gap-3 align-items-center  justify-content-center navsection3"
                >
                  <Row className="align-items-center justify-content-between ">
                    <Col xl={2}>
                      <NavDropdown id="nav-dropdown-dark-example" title="Home" >
                        <Row>
                          <div>
                            <ul className="unstyled">
                              <li>
                                <a href="/" className="dropdownitem">
                                  <img
                                    src="	https://themes.pixelstrap.com/fastkart/assets/images/theme/1.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light ">
                                    KartShop
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="  https://themes.pixelstrap.com/fastkart/assets/images/theme/2.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light ">
                                    SweetShop
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="  	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light ">
                                    Organic
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src=" 	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light ">
                                    SuperShop
                                  </span>
                                </a>
                              </li>
                              <li >
                                <a href="/" >
                                  <img
                                    src=" https://themes.pixelstrap.com/fastkart/assets/images/theme/5.jpg"
                                    alt="logo"
                                    className="imgg  imghovering"
                                  /> 
                                  <span className="text-dania fw-light ">
                                    Slicktech
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </Row>
                      </NavDropdown>
                    </Col>
                    <Col xl={3}>
                    
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Mega Menue"
                     
                    >
                     <div className="megabg dropdownsizee">
                        <Row>
                          <div>
                            <ul className="unstyled" >
                              <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Daily Vegetables
                                  </h5>  
                                        <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Beans &amp; Brinjals
                                  </a>
                     
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Cauliflower
                                  </a>

                                  <a
                                   href="/"
                                    className="dropdown-item"
                                  >
                                    Chilies, Garlic
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Vegetables &amp; Salads
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Gourd, Cucumber
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Herbs &amp; Sprouts
                                  </a>

                                  <a
                                    href="/"
                                    className="dropdown-item"
                                  >
                                    Lettuce &amp; Leafy
                                  </a>
                                </div>
                              </Col>

                              <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Baby Tender
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Beans &amp; Brinjals
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Cauliflower
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Chilies, Garlic
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Vegetables &amp; Salads
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Gourd, Cucumber
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Potatoes &amp; Tomatoes
                                  </a>

                                  <a
                                   href="/"
                                    className="dropdown-item"
                                  >
                                    Peas &amp; Corn
                                  </a>
                                </div>
                              </Col>
                              <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Exotic Vegetables
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Asparagus &amp; Artichokes
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Avocados &amp; Peppers
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Zucchini
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Celery, Fennel &amp; Leeks
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Chilies &amp; Lime
                                  </a>
                                </div>
                              </Col>
<Col xl={3}></Col>

                              {/* <div className="dropdown-column dropdown-column-img col-3"></div> */}
                            </ul>
                          </div>
                        </Row></div>
                   
                    </NavDropdown>
                  </Col>
                    <Col xl={2}>
                      <NavDropdown id="nav-dropdown-dark-example" title="Shop">
                        <NavDropdown.Item
                         href="/"
                          to="/contact"
                          as={NavLink}
                          
                        >
                          Shop Category Slider
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Category Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Banner
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Left Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop List
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Right Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Top Filter
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                
                    <Col xl={2}>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Product"
                      >
                        <NavDropdown.Item
                         href="/"
                          to="/contact"
                          as={NavLink}
                          
                        >
                          Product 4 Image
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Left Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Buttom Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Left
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Right Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Slider
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Sticky
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                  
                    <Col>
                      <Row className="align-items-center justify-content-between ">
                        <Col xl={3}>
                          <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Blog"
                          >
                            <NavDropdown.Item
                             href="/"
                              to="/contact"
                              as={NavLink}
                              
                            >
                              Blog Detail
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Blog Grid
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Blog List
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                        <Col xl={3}>
                          <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Pages"
                          >
                            <NavDropdown.Item
                             href="/"
                              to="/contact"
                              as={NavLink}
                              
                            >
                              404
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Cart
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Checkout
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Coming Soon
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Compare
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Faq
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Order Success
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Order Tracking
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              OTP
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Search
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              User Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Wishlist
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                        <Col xl={3}>
                          <Button className="contactbuttonsection3">
                            Contact
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col xl={2} md={2}>
              <div className=" d-flex justify-content-end">
                <Button
                  onClick={handleShow}
                  className=" m-0 p-0 DealTodaybutton text-center px-1  "
                >
                  <div className="d-flex justify-content-center align-items-center p-2">
                    <div className="px-1">
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
                        className="DealTodayIcon mx-1 "
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="px-1">
                      <span className="d-none d-xl-block ">
                        Deal Today
                      </span>
                    </div>
                  </div>
                </Button>
              </div>

              <Modal show={show} onHide={handleClose} className="modalstyle">
                <Modal.Header closeButton>
                  <Modal.Title>
                    Deal Today
                    <br />
                    <span className="text-aa fw-normal fs-6">
                      Recommended deals for you.
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalbody">
                  <div>
                    <ul className="  list-unstyled ">
                      <li className="mb-2 ">
                        <div className=" rounded-3 border border-white bg-gg d-flex  align-items-center  justify-content-center  ">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/10.png"
                            className="w-25 p-3 me-2 ms-2 "
                            alt=""
                          />

                          <a href="/" className="text-decoration-none ">
                            <h5 className="text-dania">
                              Blended Instant Coffee 50 g Buy 1 Get 1 Free
                            </h5>
                            <h6 className="text-dania">
                              $52.57 <del className="text-dd">57.62</del>
                              <span className="text-aa">500 G</span>
                            </h6>
                          </a>
                        </div>
                      </li>
                      <li >
                        <div className=" rounded-3 border border-white bg-pink d-flex gap-1 align-items-center  justify-content-center  ">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png"
                            className="w-25 mt-5 me-2 ms-2 p-3"
                            alt=""
                          />

                          <a href="/" className="text-decoration-none ">
                            <h5 className="text-dania">
                              Blended Instant Coffee 50 g Buy 1 Get 1 Free
                            </h5>
                            <h6 className="text-dania">
                              $52.57 <del className="text-dd">57.62</del>
                              <span className="text-aa">500 G</span>
                            </h6>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Section3;
