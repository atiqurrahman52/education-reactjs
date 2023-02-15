import { Briefcase, CaretLeft, CaretRight, FileHtml } from "phosphor-react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { popularCoursesData } from "../../data/home/popularCoursesData";

const PopularCourse = () => {
  const [tabData, setTabData] = useState(popularCoursesData[0].items);

  const SwiperLayout = ({ children }) => {
    return (
      <Swiper
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
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={false}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        speed={1500}
        loopFillGroupWithBlank={true}
        // navigation={true}
        // pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper courseSlider px-2 !py-5"
        // className="courseSlider !px-2 !py-10"
        // pagination={{
        //   dynamicBullets: true,
        // }}
        navigation={{
          prevEl: ".coursePrev-btn",
          nextEl: ".courseNext-btn",
        }}
      >
        {children}
      </Swiper>
    );
  };

  return (
    <div>
      {/* <div className="max-w-lg mx-auto relative"> */}
      <div className="max-w-[999px]  mx-auto relative">
        <SwiperLayout>
          {popularCoursesData.map((item, i) => {
            return (
              <SwiperSlide
                onClick={() => setTabData(popularCoursesData[i].items)}
                key={i}
                className=""
              >
                {/* <div className="flex justify-center cursor-pointer"> */}
                <div className="px-2 lg:px-0">
                 
                  {/* <button className="flex items-center justify-center gap-4 p-4 rounded-[10px] border border-black/10 w-full font-poppins text-xs xl:text-base text-disable"> */}
                  {/* <button className="flex items-center py-4 px-5 gap-4 rounded-[10px] border border-black/10 w-80 
                  font-poppins text-xs xl:text-base text-disable">
                  <span>{item.icon}</span> {item.name}
                  </button> */}
                  <p className="flex justify-center cursor-pointer gap-4 py-3 border border-[#F0F0F0] rounded-lg text-disable text-sm lg:text-base px- mx-">  <span className="text-disable">{item.icon}</span> {item.name} </p>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperLayout>

        <button className="md:block xs:hidden coursePrev-btn z-50 absolute top-[34%] -left-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
          <CaretLeft size={18} weight="bold" className="text-success" />
        </button>
        <button className="md:block xs:hidden courseNext-btn z-50 absolute top-[34%] -right-2 h-8 w-8 bg-white shadow-[0px_0px_14px_rgba(175,175,175,0.16)] rounded-full flex justify-center items-center">
          <CaretRight size={18} weight="bold" className="text-success" />
        </button>
      </div>

      <div className="container py-5">
        <Swiper
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
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={false}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          speed={1500}
          loopFillGroupWithBlank={true}
          // navigation={true}
          // pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper courseSlider px-2 !py-5"
          // className="courseSlider !px-2 !py-10"
          pagination={{
            dynamicBullets: true,
          }}
        >
          {tabData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Link
                  to="/course-details"
                  className="rounded-xl overflow-hidden  block shadow-[0px_0px_2px_rgba(145,158,171,0.2),0px_12px_24px_rgba(145,158,171,0.2)]"
                >
                  <div className="mb-4">
                    <img
                      className="w-full scale-100 group-hover:scale-125 transition-all duration-700 ease-in-out"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-4">
                      <ReactStars
                        size={14}
                        count={5}
                        edit={false}
                        value={item.ratings}
                        color="#FDAE53"
                        activeColor="#FDAE53"
                        emptyIcon={<i className="far fa-star" />}
                        filledIcon={<i className="fa fa-star" />}
                      />
                      <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary">
                        {item.ratings}
                      </p>
                    </div>

                    <h3 className="font-poppins font-medium text-base xl:text-lg leading-6 xl:leading-7 text-primary capitalize mb-2">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-xs xl:text-sm leading-5 text-primary mb-3">
                      {item.author}
                    </p>
                    <p className="font-poppins font-medium text-xs xl:text-base leading-5 xl:leading-6 text-primary border-t-[1px] border-[#E5E5E5] pt-3">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourse;
