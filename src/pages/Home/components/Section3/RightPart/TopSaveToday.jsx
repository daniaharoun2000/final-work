//TopSaveToday Section from Right Part on Home Page by Dania Haroun !!!
import CountdownTimer from '../../CountdownTimer';
import { Col, Row } from "react-bootstrap";
import Rating from "../../Rating";
import AddButton from "../../AddButton";
import { Container } from "../../../../../components";
function TopSaveToday() {
  
  const THREE_DAYS_IN_MS = 333 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    
    <div >
      <Container>
        <div className='py-2'>
      <Row>
          <Col xxl={6 }xl={6}xs={12} md={12}> 
            <div className="title title-flex">
          <div >
            <h2>Top Save Today</h2>

            <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className=" icon-width" alt="img"
              />
            </span>
           
            <p>
              Don't miss this opportunity at a special discount just for this
              week.
            </p>
          </div>
        </div>
        </Col>
         
     
       
          <Col xxl={6} xl={6} xs={12} md={12}  className="d-flex justify-content-end mb-2 ">
            <div className=" align-items-center  justify-content-center d-flex bg-dd text-badge border border-light rounded timeboxsection3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="timingsvg mx-2 "
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="  name align-items-center justify-content-center d-flex">Expires in :</span>

              <CountdownTimer targetDate={dateTimeAfter333Days} />
            </div>
          </Col>
        </Row>
        <Row className=" row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-2">
       
          {/* react gutters */}
          <Col className="p-3 border cardhovering  ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png"
              className="w-100  margintoptodayimage ml-2 mr-2 imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Fantasy Crunchy Choco Chip Cookies</h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
           <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png"
              className="w-100  margintoptodayimage  imghovering  "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Peanut Butter Bite Premium Butter Cookies 
                                                        </h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2 ">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/5.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                        </h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering position-relative ">
          <div className="label-tag">
                                                    <span>NEW</span>
                                                </div>
            <div>
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/7.png"
                className="w-100  margintoptodayimage  imghovering  topsavetodayimages2"
                alt=""
              />
            </div>

            <a href="/" tabindex="0">
              <h6 className="name">healthy Long Life Toned Milk 1 L</h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Cold Brew Coffee Instant Coffee 50 g</h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering position-relative">
          <div className="label-tag">
                                                    <span>NEW</span>
                                                </div>
            <div>
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png"
                className="w-100  margintoptodayimage  imghovering "
                alt=""
              />
            </div>

            <a href="/" tabindex="0">
              <h6 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar 
                                                          
                                                        </h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/6.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Neu Farm Unpolished Desi Toor Dal 1 kg</h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/9.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Raw Mutton Leg, Packaging 5 Kg</h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/8.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Dog Treats Natural Yak Milk Bars For Small Dogs
                                                         </h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
          <Col className="p-3 border cardhovering ">
            <img
              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/10.png"
              className="w-100  margintoptodayimage  imghovering "
              alt=""
            />

            <a href="/" tabindex="0">
              <h6 className="name">Blended Instant Coffee 50 g Buy 1 Get 1 Free
                                                        </h6>
            </a>

            <h5 className="sold text-content">
              <span className="text-primary price">$26.69</span>
              <del className="dell">28.56</del>
            </h5>

            <div className=" mt-2">
              <Rating />
            </div>
            <AddButton/>
          </Col>
        </Row>
        </div>
      </Container>

    </div>
  );
}
export default TopSaveToday;
