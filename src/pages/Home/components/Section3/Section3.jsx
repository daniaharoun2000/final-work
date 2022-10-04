//Section 3 from Home Page by Dania Haroun !!!

import { Container } from "../../../../components";
import { Col, Row } from "react-bootstrap";

import Section3LeftPart from "./Section3LeftPart";
import Section3RightPart from "./Section3RightPart";
function Section3() {
  return (
    <div >
      <Container>
        <section>
          <div>
            <Row>
              <Col xxl={3} xl={4} className="d-none d-xl-block">
                <Section3LeftPart />
              </Col>
              <Col xxl={9} xl={8}>
                <Section3RightPart />
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
}
export default Section3;
