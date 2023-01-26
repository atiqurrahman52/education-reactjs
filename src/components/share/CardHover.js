import React from "react";
import { ratingsData } from "../../data/rating/ratingData";

const CardHover = () => {
  return (
    <div className="container absolute top-0 left-[calc(100%-1rem)] z-10 ">
      <div className="max-h-[561px] max-w-[400px] bg-white rounded-lg shadow-md p-6 ">
        <div className="">
          <h1 className="font-poppins font-medium text-lg leading-[27px] text-primary">
            Angular - The Complete Guide (2020 Edition)
          </h1>
          <div className="space-y-3 pt-3">
            <div className="flex divide-x-[1px] divide-[#97979C] gap-6">
              <div className="">
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Instructor
                </p>
                <p className="font-poppins text-sm leading-[22px] text-success">
                  Kevin Perry
                </p>
              </div>
              <div className="pl-6">
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Updated
                </p>
                <p className="font-poppins text-sm leading-[22px] text-success">
                  September 25, 2021
                </p>
              </div>
            </div>
            <div className="flex space-x-1">
              {ratingsData.map(({ i, img }) => (
                <img key={i} src={img} alt="" />
              ))}
              <p className="font-poppins text-lg leading-[27px] pl-2 text-primary">
                4.6
              </p>
            </div>

            <div>
              <h2 className="font-poppins font-medium text-sm leading-[22px] text-primary">
                Learning Objectives
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-3">
                <i className="ph-caret-circle-right text-[20px]"></i>
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Negotiate effectively and fairly to make 1000s more than they
                  would otherwise
                </p>
              </div>
              <div className="flex space-x-3">
                <i className="ph-caret-circle-right text-[20px]"></i>
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Negotiate effectively and fairly to make 1000s more than they
                  would otherwise
                </p>
              </div>
              <div className="flex space-x-3">
                <i className="ph-caret-circle-right text-[20px]"></i>
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Negotiate effectively and fairly to make 1000s more than they
                  would otherwise
                </p>
              </div>
              <div className="flex space-x-3">
                <i className="ph-caret-circle-right text-[20px]"></i>
                <p className="font-poppins text-xs leading-[19px] text-[#51525B]">
                  Negotiate effectively and fairly to make 1000s more than they
                  would otherwise
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-[100px] h-[54px] border border-[#E8E8E8] py-[6px] rounded-lg px-3">
                <p className="font-poppins text-xs leading-[18px] text-disable">
                  Duration
                </p>
                <p className="font-poppins font-medium text-lg leading-[22px]">
                  6 Month
                </p>
              </div>
              <div className="w-[100px] h-[54px] border border-[#E8E8E8] py-[6px] rounded-lg px-3">
                <p className="font-poppins text-xs leading-[18px] text-disable">
                  Duration
                </p>
                <p className="font-poppins font-medium text-lg leading-[22px]">
                  6 Month
                </p>
              </div>
              <div className="w-[100px] h-[54px] border border-[#E8E8E8] py-[6px] rounded-lg px-3">
                <p className="font-poppins text-xs leading-[18px] text-disable">
                  Duration
                </p>
                <p className="font-poppins font-medium text-lg leading-[22px]">
                  6 Month
                </p>
              </div>
            </div>
            <div>
              <button className="font-raleway font-medium text-sm leading-5 text-white bg-success py-2.5 w-full rounded-md">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHover;
