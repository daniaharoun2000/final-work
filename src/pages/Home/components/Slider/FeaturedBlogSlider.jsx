//Featured Blog Section from Right Part on Home Page by Dania Haroun !!!

import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "../../../../components";
import { Col, Row } from "react-bootstrap";

export default function FeaturedBlogSlider() {
  return (
    <>
      <div>
        <div>
          <Container>
            <div className=" py-4">
              <Row>
                <Col xl={12}>
                <div className="title title-flex py-4 ">
              <div>
                <h2>Featured Blog</h2>

                <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className=" icon-width" alt="featuredblog"
              />
            </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
            </div>
                  <Swiper
                  
                    spaceBetween={10}
                    // slidesPerView={7}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination, Navigation, Lazy]}
                    autoplay={{ delay: 2000 }}
                    lazy={true}
                    pagination={{
                      el: '.slider__pagination',
                      clickable: true,
                    }}
                    
                    loop={true}
                    breakpoints={{
                       320: {
                            slidesPerView:1,
                          },
                   
                      550: {
                        slidesPerView: 2,
                      },
                      
                  940:{
                    slidesPerView: 3,

                  },
                     1200:{
                        slidesPerView: 2,

                     },
                      1550: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide  >
                    <a
                             href="/"
                              className="category-box imgblog imghoveringin"
                              tabindex="-1"
                            > </a>

                            <a
                             href="/"
                              className="blog-detail"
                              tabindex="0"
                            >
                              <h6>20 March, 2022</h6>
                              <h5>Fresh Vegetable Online</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                    <a
                             href="/"
                              className="category-box imgblog2 imghoveringin"
                              tabindex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabindex="-1"
                            >
                              <h6>10 April, 2022</h6>
                              <h5>Fresh Combo Fruit</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                     <a
                             href="/"
                              className="category-box imgblog3 imghoveringin"
                              tabindex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabindex="0"
                            >
                              <h6>10 April, 2022</h6>
                              <h5>Nuts to Eat for Better Health</h5>
                            </a>
                    </SwiperSlide>
                    <div className="slider__controls">

<div className="slider__pagination"></div>


</div>
                  </Swiper>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
