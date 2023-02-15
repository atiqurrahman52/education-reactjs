import { CaretRight } from "phosphor-react";
import React from "react";
//
import { ratingsData } from "../../data/rating/ratingData";

const CourseDetailBanner = () => {
  return (
    <div className="lg:block hidden">
      <div className="breadcrumb bg-cover bg-center bg-no-repeat h-[450px] mt-[px]">
        <div className="container">
          <div className="max-w-[746px]">
            <div className="flex items-center gap-2 pt-6">
              <p className="text-primary font-normal font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
                Web Development
              </p>

              <CaretRight size={18} className="text-primary" />
              <p className="text-[#9DA6BA] font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5">
                JavaScript
              </p>
            </div>

            <div className="pt-10">
              <div className="space-y-2">
                <h2 className="font-poppins font-medium text-lg xl:text-3xl leading-7 xl:leading-[48px] text-primary">
                  Angular - The Complete Guide (2020 Edition)
                </h2>
                <p className="font-poppins text-xs xl:text-base leading-5 xl:leading-6 text-[#51525B]">
                  This tutorial will help you learn quickly and thoroughly.
                  Lorem ipsum is dummy text used in laying out print, graphic or
                  web designs
                </p>
              </div>

              <div className="flex justify-between pt-6">
                <div className="flex divide-x divide-[#51525B]/60 gap-6">
                  <div>
                    <p className="font-poppins text-xs xl:text-sm leading-5 text-[#51525B]">
                      Instructor
                    </p>
                    <p className="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-success">
                      Kevin Perry
                    </p>
                  </div>
                  <div className="pl-6">
                    <p className="font-poppins text-xs xl:text-sm leading-5 text-[#51525B]">
                      Updated
                    </p>
                    <p className="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-success">
                      September 25, 2021
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {ratingsData.map(({ i, img }) => (
                    <div key={i}>
                      <img src={img} alt="" />
                    </div>
                  ))}

                  <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary">
                    4.6
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-10">
              <div className="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p className="font-poppins text-[10px] xl:text-base leading-3 xl:leading-6 text-disable mb-[6px]">
                  Course Duration
                </p>
                <p className="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                  6 Month
                </p>
              </div>
              <div className="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[76px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p className="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                  Lecture
                </p>
                <p className="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                  45
                </p>
              </div>
              <div className="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p className="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                  Resources
                </p>
                <p className="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                  16 articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBanner;
