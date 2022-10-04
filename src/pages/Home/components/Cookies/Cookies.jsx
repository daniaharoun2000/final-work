//Cookies Box by Dania Haroun !!!

import { Container } from "../../../../components";
import { useState } from "react";

import { Col, Row, Button } from "react-bootstrap";

function Cookies() {
  const [hidecookiesbox, sethidecookiesbox] = useState(true);

  return (
    <div className={`lightbox ${hidecookiesbox ? "cookie-bar-box" : "hhide"}`}>
      <Container>
        <Row>
          <Col xl={12}>
            <div>
              <div className="cookie-box ">
                <div className="cookie-image align-items-center justify-content-center d-flex">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/cookie-bar.png"
                    alt=""
                  />
                  <h2>Cookies!</h2>
                </div>

                <div className="cookie-contain">
                  <h5 className="text-aa">
                    We use cookies to make your experience better
                  </h5>
                </div>
              </div>

              <div className="Button-group align-items-center justify-content-center d-flex">
                <Button className="cookiesbutton  align-items-center justify-content-center d-flex bg-badge text-dania">
                  Privacy Policy
                </Button>
                <Button
                  className="cookiesbutton   align-items-center justify-content-center d-flex bg-primary text-badge"
                  onClick={() => sethidecookiesbox(false)}
                >
                  OK
                </Button>
                {/* //onClick={closebutton} */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cookies;
