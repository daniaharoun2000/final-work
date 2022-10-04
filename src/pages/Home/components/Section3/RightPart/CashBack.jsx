//CashBack Section from Right Part on Home Page by Dania Haroun !!!

import Container from "../../../../../components/Container";
import { Col, Row } from "react-bootstrap";

function CashBack() {
  return (
    <div >
      <Container>
        <Row>
          <Col xl={12} className="py-4">
            <div className="imgbootstrap position-relative cashboxx ">
        

              <div className=" textforimage2 mt-1 align-items-center justify-content-center d-flex">
                <div>
                  <h3 className="fw-bold mb-2 cash-details text-overflow-1  text-badge">
                    Get $3 Cashback! Min Order of $30
                  </h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="coupon-code py-2 px-2 text-badge ">
                      Use Code : GROCERY1920
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CashBack;
