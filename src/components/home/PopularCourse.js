import { Briefcase } from "phosphor-react";
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
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-6 xl:mt-14"
      >
        {children}
      </Swiper>
    );
  };

  return (
    <div>
      <div className="max-w-lg mx-auto">
        <SwiperLayout>
          {popularCoursesData.map((item, i) => {
            return (
              <SwiperSlide
                onClick={() => setTabData(popularCoursesData[i].items)}
                key={i}
                className="flex justify-center mb-10 cursor-pointer"
              >
                <div className="block">
                  <button className="flex items-center justify-center gap-4 p-4 rounded-[10px] border border-black/10 w-full font-poppins text-xs xl:text-base text-disable">
                    {/* <Briefcase size={45} className="text-disable" /> */}

                    {item.name}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperLayout>
      </div>

      <div className="container">
        <SwiperLayout>
          {tabData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Link
                  to="/course-details"
                  className="rounded-xl overflow-hidden  block shadow-[0_0_14px_rgba(175,175,175,0.16)]"
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
        </SwiperLayout>
      </div>
    </div>
  );
};

export default PopularCourse;
