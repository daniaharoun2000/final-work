import Container from "../../../components/Container";

import {Row,Col,Button} from "react-bootstrap";

import "./AddButton.scss";
function AddButton() {
  return (
    <div>
      <Container>
        <Row>
        
            <Button className="bg-cat buttonclass mt-2">
          <Col xl={6} xs={6}><div className="justify-content-end d-flex"> Add</div></Col>   
         <Col xl={6} xs={6}>
           <div className="d-flex justify-content-end align-items-end "> <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bg-badge text-primary   plusbutton"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg></div></Col>   
            </Button>
         
        </Row>
      </Container>
    </div>
  );
}
export default AddButton;
