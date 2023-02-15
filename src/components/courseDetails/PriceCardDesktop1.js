import React from "react";

const PriceCardDesktop1 = () => {
  return (
    <div className="col-span-4">
      <div className="relative preview-btn cursor-pointer">
        <img
          className="rounded-md"
          src="../assets/images/courses/course-video.webp"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="ph-play-circle text-white text-2xl xl:text-4xl"></i>
          <p className="absolute left-1/2 -translate-x-1/2 bottom-3 text-white font-poppins font-semibold text-sm xl:text-base">
            Review this course
          </p>
        </div>
      </div>

      <div className="flex space-x-[70px] pt-6">
        <p className="font-poppins font-bold text-xl xl:text-3xl leading-7 xl:leading-10 text-success">
          $99.00
        </p>
        <p className="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-9 line-through text-disable">
          $199.00 50% off
        </p>
      </div>
      <h3 className="font-poppins font-medium text-lg xl:text-2xl text-primary leading-7 xl:leading-9 pt-6">
        Angular - The Complete Guide (2020 Edition)
      </h3>
      <div className="space-y-4 pt-4">
        <div className="flex space-x-2 items-center">
          <img
            className="w-[18px] h-[18px]"
            src="../assets/images/svg/info.svg"
            alt=""
          />
          <p className="font-poppins text-sm leading-5 text-disable">
            30-Day Money-Back Guarantee
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <img
            className="w-[18px] h-[18px]"
            src="../assets/images/svg/Student.svg"
            alt=""
          />
          <p className="font-poppins text-sm leading-5 text-disable">
            270,866 students enrolled
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <img
            className="w-[18px] h-[18px]"
            src="../assets/images/svg/Alarm.svg"
            alt=""
          />
          <p className="font-poppins text-sm leading-5 text-disable">
            Full lifetime access
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <img
            className="w-[18px] h-[18px]"
            src="../assets/images/svg/certificate.svg"
            alt=""
          />
          <p className="font-poppins text-sm leading-5 text-disable">
            Certificate of Completion
          </p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-poppins font-medium text-sm leading-5 text-primary mb-2">
          Share Courses
        </h3>
        <div className="flex space-x-[5px]">
          <img
            className="w-[22px] h-[22px]"
            src="../assets/images/svg/twitter.svg"
            alt=""
          />
          <img
            className="w-[22px] h-[22px]"
            src="../assets/images/svg/facebook.svg"
            alt=""
          />
          <img
            className="w-[22px] h-[22px]"
            src="../assets/images/svg/Linkedin.svg"
            alt=""
          />
        </div>
      </div>

      <div className="pt-6">
        <button className="bg-success text-white font-poppins font-medium text-lg leading-7 rounded-lg w-full h-[56px] lg:max-w-[365px]">
          <a className="#" href="">
            Get this course
          </a>
        </button>
      </div>
    </div>
  );
};

export default PriceCardDesktop1;
