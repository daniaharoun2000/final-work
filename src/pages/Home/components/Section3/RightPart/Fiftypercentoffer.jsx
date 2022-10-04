//Fiftypercentoffer Section from Right Part on Home Page by Dania Haroun !!!

import { Row, Col } from "react-bootstrap";
import Container from "../../../../../components/Container";

function Fiftypercentoffer() {
  return (
    <div>
      <Container>
        <Row>
          <Col xl={6} md={6}>
            <div className=" coverimageonefifty banner-contain mt-1 ">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/9.jpg"
                className="d-none"
                alt=""
              />
              <div className=" p-4 ">
                <div>
                  <h3>50% offer</h3>
                  <h4 className=" fw-normal  mb-1 text-primary">
                    Testy Mushrooms
                  </h4>
                  <button className="btn  mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={6} md={6}>
            <div className=" coverimagetwofifty banner-contain mt-1">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/10.jpg"
                className="d-none"
                alt=""
              />
              <div className=" p-4 ">
                <div>
                  <h3>50% offer</h3>
                  <h4 className=" fw-normal  mb-1 text-primary">
                    Testy Mushrooms
                  </h4>
                  <button className="btn  mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white ">
                    Shop Now 
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Fiftypercentoffer;
