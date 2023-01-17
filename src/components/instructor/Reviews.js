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
import { reviewsData } from "../../data/instructor/reviewsData";
const Reviews = () => {
  return (
    <div className="container">
     
        <div class="gap-4 xl:gap-8 py-6 xl:py-10">
          
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
          {reviewsData.map(({ id, img, details, designation,author, title, ratings }) => (
            <SwiperSlide key={id} className="">
             <div class="bg-[#F9F9F9]">
          <div class="container max-w-[1416px]">
            <div class="">
             
                {/* <div class="swiper quotationSwiper"> */}
                  {/* <div class="swiper-wrapper"> */}

                    <div class="swiper-slide flex flex-col xl:flex-row items-center gap-6 py-6 xl:py-16">
                      <div class="relative flex-shrink-0">
                        <div>
                          <img
                            class="rounded-[20px] w-full xl:w-[526px] h-full xl:h-[426px]"
                            src={img}
                            alt=""
                          />
                        </div>
                        <div class="absolute bottom-6 pl-8">
                          <p
                            class="font-poppins font-semibold text-xs xl:text-lg leading-5 xl:leading-6 text-white"
                          >
                           {author}
                          </p>
                          <p
                            class="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-[#9DA6BA]"
                          >
                           {designation}
                          </p>
                        </div>
                      </div>
                      <div class="space-y-4 xl:space-y-8 pl-6">
                        <div>
                          <img src="../assets/images/svg/quotation.svg" alt="" />
                        </div>
                        <div>
                          <p class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-10 text-[#090914]">
                           {title}
                          </p>
                        </div>
                        <div>
                          <p class="font-poppins text-xs xl:text-base leading-4 xl:leading-8 text-[#52525B] ">
                           {details}
                          </p>
                        </div>
                        <div class="flex items-center gap-2">
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
                          4.6
                        </p>
                        </div>
                      </div>
                    </div>
                    
                
                  {/* </div> */}
                  {/* <div class="swiper-button-next nextbtn"></div> */}
                  {/* <div class="swiper-button-prev prevbtn"></div> */}
                {/* </div> */}
              </div> 
            </div>
          </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
    </div>
  );
};

export default Reviews;
