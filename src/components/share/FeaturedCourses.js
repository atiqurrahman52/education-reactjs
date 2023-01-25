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
import { featuredCoursesData } from "../../data/home/featuredCoursesData";
const FeaturedCourses = () => {
  return (
    <div className="container">
      {/* <div class="py-8 xl:py-16 gap-6 xl:gap-8 mb-5">
        <h1 class="font-poppins text-2xl xl:text-3xl leading-8 xl:leading-10 text-primary text-center capitalize mb-6 xl:mb-8">
          Learn a New Skill in
          <span class="font-semibold">short courses </span>
        </h1> */}
        <div class="gap-4 xl:gap-8 py-6 xl:py-10">
            <h1
              class="font-poppins text-base xl:text-3xl leading-6 text-primary capitalize text-center mb-4 xl:mb-8"
            >
              <span class="font-semibold">Featured Course </span> this month
            </h1>
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
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
          {featuredCoursesData.map(({ id, img, details, newprice,oldprice, title, ratings }) => (
            <SwiperSlide key={id} className="">
              <div
                    class="swiper-slide flex flex-col xl:flex-row items-center"
                  >
                    <Link
                      to="/course-details"
                      class="block space-y-4 xl:w-1/2"
                    >
                      <h3
                        class="font-poppins font-medium text-base xl:text-2xl leading-6 xl:leading-9 text-primary capitalize"
                      >
                       {title}
                      </h3>
                      <div class="flex items-center gap-2 mb-">
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

                        <p
                          class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary"
                        >
                         {ratings}
                        </p>
                      </div>
                      <p
                        class="font-poppins font-normal text-sm xl:text-base leading-5 xl:leading-6 text-gray"
                      >
                        {details}
                      </p>
                      <p
                        class="text-success font-poppins font-semibold text-xl xl:text-3xl leading-7 xl:leading-10"
                      >
                        ${newprice}.00
                        <span
                          class="line-through text-[#9DA6BA] font-poppins font-medium text-base xl:text-2xl leading-6 xl:leading-9 ml-4"
                          >${oldprice}.00</span
                        >
                      </p>

                      <button
                        class="inline-block bg-success py-2.5 xl:py-3 px-6 xl:px-7 rounded-lg text-white"
                      >
                        Free Preview
                      </button>
                    </Link>

                    <div class="xl:w-1/2">
                      <img
                        class="w-full"
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <CaretLeft size={24} className="" />
        <CaretRight size={24} className="" /> */}
      </div>
    </div>
  );
};

export default FeaturedCourses;
