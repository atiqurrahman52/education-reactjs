import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import ReactStars from "react-rating-stars-component";
import { coursesData } from "../../data/home/coursesData";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
const ShortCourses = () => {
  return (
    <div className="container">
      <div class="py-8 xl:py-16 gap-6 xl:gap-8 mb-5">
        <h1 class="font-poppins text-2xl xl:text-3xl leading-8 xl:leading-10 text-primary text-center capitalize mb-6 xl:mb-8">
          Learn a New Skill in
          <span class="font-semibold"> short courses </span>
        </h1>

        <div className="relative">
          <Swiper
            slidesPerView="auto"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
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
            Pagination={true}
            allowTouchMove={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation, Pagination]}
            className="courseSlider !px-2 !py-10"
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".coursePrev-btn",
              nextEl: ".courseNext-btn",
            }}
            // modules={[Pagination]}
          >
            {coursesData.map(({ id, img, author, price, title, ratings }) => (
              <SwiperSlide key={id}>
                <div>
                  {/* <div className=""> */}
                  <Link
                    to="/course-details"
                    className="rounded-xl overflow-hidden shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_rgba(145,158,171,0.2)] block"
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

          <button className="md:block xs:hidden coursePrev-btn z-50 absolute top-1/2 -left-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
            <CaretLeft size={18} weight="bold" className="text-success" />
          </button>
          <button className="md:block xs:hidden courseNext-btn z-50 absolute top-1/2 -right-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
            <CaretRight size={18} weight="bold" className="text-success" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortCourses;
