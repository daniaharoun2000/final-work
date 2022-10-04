//Components Index by Dania Haroun !!!

import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import "./components/Section3/RightPart/TopSaveToday.scss";
import "./components/Section1/Section1.scss";
import "./components/Section2/Section2.scss";
import "./components/Section3/Section3LeftPart.scss";
import "./components/Section3/Section3RightPart.scss";
import React from "react";
import ScrollButton from "./components/ScrollButton";
import'./components/Slider/BowsebyCategoriesSlider.scss';
import "./components/Section3/RightPart/Fiftypercentoffer.scss";
import "./components/Section3/RightPart/CashBack.scss";
import "./components/Section3/RightPart/SummerProducts.scss";
import "./components/Section3/RightPart/SummerVEGETABLE.scss";
import "./components/Slider/OurBestSellerSlider.scss";
import "./components/Slider/FeaturedBlogSlider.scss";
import "./components/Section4/Newsletter.scss";
import Footer from "./Footer/index";
import "./Footer/Footer.scss";
import Cookies from "./components/Cookies/Cookies";
import "./components/Cookies/Cookies.scss";
import "./components/ScrollButton.scss";
import MobileMenu from "./components/MobileNavbar/MobileMenu";
import "./components/MobileNavbar/MobileMenu.scss";
import Newsletter from "./components/Section4/Newsletter";

function Home() {
  return (
    <div id="main-home" >
      <section>
        <Section1 />
      </section>
      <Cookies />
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
     
        <Newsletter />
     
      <section>
        <Footer />
      </section>
      <ScrollButton />
      <MobileMenu />
    </div>
  );
}

export default Home;
