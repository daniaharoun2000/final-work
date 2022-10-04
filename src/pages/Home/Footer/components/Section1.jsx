//Section 1 from Footer by Dania Haroun !!!

import Container from "../../../../components/Container";

import {Row,Col} from "react-bootstrap";


function Section1() {
  return (
    <div >
      <div>
        <Container >
          <div className=" d-none d-sm-none d-md-block mt-5  ">
          <div className=" d-xxl-block d-none py-4">
          <div className="service-contain">   
              <div >    
                       <Row className="lineundersection py-4 ">

                <Col xxl={3} xl={3}>
                  <div className=" align-items-center d-flex me-0">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded "
                        alt=""
                      />
                    </div>

                     <div className="service-detail  mx-2">

                      <span>Every Fresh Products</span>
                      
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Free Delivery For Order Over $50</span>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Daily Mega Discounts</span>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box justify-content-start d-flex">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Best Price On The Market</span>
                    </div>
                  </div>
                </Col></Row>
              </div>
            </div>
          </div>

          <div className="  d-lg-block d-xl-block d-xxl-none py-4 ">
          
              <div  > 
                 <Row >   
                <Col xl={6} lg={6} md={6}>
                  <div >
                    <div className="d-flex justify-content-start align-items-center ">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2 ">

                      <span>Every Fresh Products</span>
                    </div>
                  </div></div>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <div >
                      <div className="d-flex justify-content-strat align-items-center ">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Free Delivery For Order Over $50</span>
                    </div></div>
                  </div>
                </Col> </Row>
                <Row className="lineundersection py-4 ">
                <Col  xl={6} lg={6} md={6}>
                  <div >  
                  <div className="d-flex justify-content-start align-items-center ">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">
                        

                      <span>Daily Mega Discounts</span>
                    </div>
                  </div></div>
                </Col>
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box justify-content-start d-flex">  
                  <div className="d-flex justify-content-center align-items-center ">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Best Price On The Market</span>
                    </div></div>
                  </div>
                </Col>
      
                </Row>
              </div>
           
          </div></div>
        </Container>
      </div>
    </div>
  );
}
export default Section1;
