import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../assets/images/courses/amazon.webp";
import image2 from "../assets/images/courses/javascript.webp";
import image3 from "../assets/images/courses/java.webp";
import image4 from "../assets/images/courses/angular.webp";

const data = [
  {
    id: 0,
    name: "dev",
    items: [
      {
        id: 0,
        name: "dev",
        img: image1,
      },
      {
        id: 1,
        name: "dev",
        img: image1,
      },
      {
        id: 2,
        name: "dev",
        img: image1,
      },
      {
        id: 3,
        name: "dev",
        img: image1,
      },
      {
        id: 4,
        name: "dev",
        img: image1,
      },
      {
        id: 5,
        name: "dev",
        img: image1,
      },
      {
        id: 6,
        name: "dev",
        img: image1,
      },
      {
        id: 7,
        name: "dev",
        img: image1,
      },
    ],
  },
  {
    id: 1,
    name: "mob",
    items: [
      {
        id: 0,
        name: "mob",
        img: image2,
      },
      {
        id: 1,
        name: "mob",
        img: image2,
      },
      {
        id: 2,
        name: "mob",
        img: image2,
      },
      {
        id: 3,
        name: "mob",
        img: image2,
      },
      {
        id: 4,
        name: "mob",
        img: image2,
      },
      {
        id: 5,
        name: "mob",
        img: image2,
      },
      {
        id: 6,
        name: "mob",
        img: image2,
      },
      {
        id: 7,
        name: "mob",
        img: image2,
      },
    ],
  },
  {
    id: 2,
    name: "lap",
    items: [
      {
        id: 0,
        name: "lap",
        img: image3,
      },
      {
        id: 1,
        name: "lap",
        img: image3,
      },
      {
        id: 2,
        name: "lap",
        img: image3,
      },
      {
        id: 3,
        name: "lap",
        img: image3,
      },
      {
        id: 4,
        name: "lap",
        img: image3,
      },
      {
        id: 5,
        name: "lap",
        img: image3,
      },
      {
        id: 6,
        name: "lap",
        img: image3,
      },
      {
        id: 7,
        name: "lap",
        img: image3,
      },
    ],
  },
  {
    id: 3,
    name: "key",
    items: [
      {
        id: 0,
        name: "key",
        img: image4,
      },
      {
        id: 1,
        name: "key",
        img: image4,
      },
      {
        id: 2,
        name: "key",
        img: image4,
      },
      {
        id: 3,
        name: "key",
        img: image4,
      },
      {
        id: 4,
        name: "key",
        img: image4,
      },
      {
        id: 5,
        name: "key",
        img: image4,
      },
      {
        id: 6,
        name: "key",
        img: image4,
      },
      {
        id: 7,
        name: "key",
        img: image4,
      },
    ],
  },
];

const Test = () => {
  const [tabData, setTabData] = useState(data[0].items);

  const SwiperLayout = ({ children }) => {
    return (
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        loopFillGroupWithBlank={true}
        navigation={true}
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
          {data.map((item, i) => {
            return (
              <SwiperSlide
                onClick={() => setTabData(data[i].items)}
                key={i}
                className="flex justify-center mb-10 cursor-pointer"
              >
                <p className="bg-gray-500 w-80 py-2 text-center">{item.name}</p>
              </SwiperSlide>
            );
          })}
        </SwiperLayout>
      </div>

      <div className="max-w-7xl mx-auto">
        <SwiperLayout>
          {tabData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={item.img} alt="" className="w-full h-48" />
                <p className="bg-gray-500 py-2 text-center">
                  {item.name} {i}
                </p>
              </SwiperSlide>
            );
          })}
        </SwiperLayout>
      </div>
    </div>
  );
};

export default Test;
