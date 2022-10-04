//Right Part of Section 3 from Home Page by Dania Haroun !!!
//here we will call multiple components to appear in this section , and these components are in (RightPart) folder 
//These components are : CashBack ,Fiftypercentoffer,SummerProducts,SummerVEGETABLE,TopSaveToday 
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
////start of Section3RightPart function///

function Section3RightPart() {

  return (
    <div >
      <Container>
                  {/* here we have a row with one col */}

        <Row>
          <Col xl={12}>
        <div className='py-2'>
          {/* here we will call multiple components to appear in this section , and these components are in (RightPart) folder  */}
        <TopSaveToday />
        <BowsebyCategoriesSlider />
        <Fiftypercentoffer />
        <FoodCupboardSlider />
        <CashBack />
        <SummerProducts />
        <OurBestSellerSlider />
        <SummerVEGETABLE />
        <FeaturedBlogSlider />
        </div>
          </Col>
          </Row>
      
      </Container>
    </div>
  );
}
export default Section3RightPart;//export Section3RightPart function to use it when It needed 
////End of Section3RightPart function///
