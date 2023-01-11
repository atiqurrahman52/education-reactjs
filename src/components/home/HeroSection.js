import React, { useState } from "react";
import hero from "../../assets/images/hero/hero.webp";
import { heroBrand } from "../../data/home/heroBrandData";
import Modal from "../share/Modal";

const HeroSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className="mt-[12px]">
        <div className="container">
          <div className="grid md:grid-cols-12 lg:grid-cols-12 py-8 xl:py-14 px-0 gap-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <h3 className="text-[#6E7B8D]  font-medium text-sm xl:text-base leading-5 xl:leading-[22px] capitalize mb-2 xl:mb-4">
                e-Learning Platform
              </h3>
              <h1 className="text-primary  font-bold text-2xl xl:text-[56px] capitalize leading-8 xl:leading-[62px]">
                Build an incredible
              </h1>
              <h1 className="text-success  font-bold text-2xl xl:text-[56px] capitalize leading-8 xl:leading-[62px]">
                learning experience
              </h1>
              <p className=" font-normal text-xs xl:text-base text-gray leading-5 xl:leading-6 mt-5 xl:mt-8 2xl:pr-10">
                Various versions have evolved over the years, sometimes by
                <br className="hidden lg:block" />
                accident
              </p>
              <div className="flex items-center mt-8 xl:mt-16">
                <a
                  href="./pages/all-courses.html"
                  className="py-2.5 px-4 xl:px-5 bg-success rounded-lg text-xs lg:text-base leading-4 xl:leading-6 capitalize text-white  mr-4"
                >
                  View Courses
                </a>
                <button
                  onClick={() => setIsModalVisible(true)}
                  type=""
                  className="preview-btn  font-medium text-xs xl:text-base leading-5 xl:leading-6 capitalize text-primary flex items-center gap-2"
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 40.6406C31.0457 40.6406 40 31.6863 40 20.6406C40 9.59493 31.0457 0.640625 20 0.640625C8.9543 0.640625 0 9.59493 0 20.6406C0 31.6863 8.9543 40.6406 20 40.6406Z"
                      fill="#0EB582"
                    />
                    <path
                      d="M26.75 21.1406L17 14.6406V27.6406L26.75 21.1406Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Watch Video
                </button>
              </div>
              <div className="mt-6 xl:mt-10">
                <h3 className=" font-medium text-sm xl:text-base leading-5 capitalize text-primary mb-2 xl:mb-3">
                  Trusted by:
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 xl:gap-7">
                  {heroBrand.map((item, i) => {
                    return <img className="w-10 lg:w-20 h-4 lg:h-8" key={i} src={item.img} alt="brand-logo" />;
                  })}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <img
                className="w-full xl:w-[619px] h-full xl:h-[504px]"
                src={hero}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
    </>
  );
};

export default HeroSection;
