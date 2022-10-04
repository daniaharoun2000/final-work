// Section4  on Home Page by Dania Haroun !!!

import { Container } from "../../../../components";
import { Col, Row } from "react-bootstrap";
function Newsletter() {
  return (
    <div >
   <Container>
    <div className="py-4">
    <Row><Col xl={12}>
                        <div className=" newsletterbg position-relative d-flex justify-content-center align-items-center" >
                            <div className="     textforimage2 mt-1 align-items-center justify-content-center d-flex">
                                <div >
                                <h2 className="text-badge textsizenewsletter">
                      Join our newsletter and get...
                    </h2>
                    <h5 className="text-yellow textsizenewsletter">
                      $20 discount for your first order
                    </h5>
                    <div >
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Email"
                      />
                      <button
                        onClick="location.href = 'shop-left-sidebar.html';"
                        className="btn mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white "
                      >
                      Subscribe
                      </button>
                                  </div>
                            </div>
               
                   </div> </div></Col></Row></div>
   </Container>
   </div>
  );
}
export default  Newsletter;