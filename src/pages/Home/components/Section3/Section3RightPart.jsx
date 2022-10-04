//Section 3 Right Part from Home Page by Dania Haroun !!!

import CountdownTimer from "../CountdownTimer";
import TopSaveToday from './RightPart/TopSaveToday';
import Container from "../../../../components/Container";
import { Row, Col } from "react-bootstrap";
import BowsebyCategoriesSlider from "../Slider/BowsebyCategoriesSlider";
import Fiftypercentoffer from "./RightPart/Fiftypercentoffer";
import FoodCupboardSlider from "../Slider/FoodCupboardSlider";
import CashBack from "./RightPart/CashBack";
import SummerProducts from "./RightPart/SummerProducts";
import OurBestSellerSlider from "../Slider/OurBestSellerSlider";
import SummerVEGETABLE from './RightPart/SummerVEGETABLE';
import FeaturedBlogSlider from "../Slider/FeaturedBlogSlider";
function Section3RightPart() {
  const THREE_DAYS_IN_MS = 333 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div >
      <Container><div className=" py-2"><Row>
          <Col xxl={6 }xl={6}xs={12} md={12}>   <div className="title title-flex">
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
        </div></Col>
         
     
       
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
        </Row></div>

        <TopSaveToday />
        <BowsebyCategoriesSlider />
        <Fiftypercentoffer />
        <FoodCupboardSlider />
        <CashBack />
        <SummerProducts />
        <OurBestSellerSlider />
        <SummerVEGETABLE />
        <FeaturedBlogSlider />
       
      </Container>
    </div>
  );
}
export default Section3RightPart;
