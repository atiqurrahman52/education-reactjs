import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import { coursesData } from "../../data/home/coursesData";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
const Swip = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        grabCursor={true}
        spaceBetween={24}
        centeredSlides={false}
        loop={true}
        speed={1000}
        freeMode={true}
        // navigation={true}
        allowTouchMove={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {coursesData.map(({ id, img, author, price, title, ratings }) => (
          <SwiperSlide key={id} className="">
            <div className="">
              <Link
                to="/course-details"
                className="rounded-xl overflow-hidden shadow-[0_0_14px_rgba(175,175,175,0.16)] block"
              >
                <div className="mb-4">
                  <img className="w-full" src={img} alt="" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-4">
                    <ReactStars
                      size={14}
                      count={5}
                      edit={false}
                      value={ratings}
                      color="#FDAE53"
                      activeColor="#FDAE53"
                      emptyIcon={<i className="far fa-star" />}
                      filledIcon={<i className="fa fa-star" />}
                    />
                    <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary">
                      {ratings}
                    </p>
                  </div>

                  <h3 className="font-poppins font-medium text-base xl:text-lg leading-6 xl:leading-7 text-primary capitalize mb-2">
                    {title}
                  </h3>
                  <p className="font-poppins text-xs xl:text-sm leading-5 text-primary mb-3">
                    {author}
                  </p>
                  <p className="font-poppins font-medium text-xs xl:text-base leading-5 xl:leading-6 text-primary border-t-[1px] border-[#E5E5E5] pt-3">
                    ${price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CaretLeft size={24} className='' />
      <CaretRight size={24} className='' />
    </div>
  );
};

export default Swip;
