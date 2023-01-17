import React from "react";

const PriceCardMobile = () => {
  return (
    <div class="lg:hidden lg:max-w-[16px] h-fit breadcrumb bg-cover bg-center bg-no-repeat mt-[px]">
      <div class="container py-4">
        <div class="max-w-[746px]">
          <div class="flex items-center gap-2 py-6">
            <p class="text-primary font-normal font-poppins text-xs md:text-sm leading-4 md:leading-5">
              Explore
            </p>
            <i class="ph-caret-right text-primary"></i>
            <p class="text-primary font-poppins font-medium text-xs md:text-sm leading-4 md:leading-5">
              web Development
            </p>
            <i class="ph-caret-right text-primary"></i>
            <p class="text-[#9DA6BA] font-poppins font-medium text-xs md:text-sm leading-4 md:leading-5">
              JavaScript
            </p>
          </div>

          <div class="relative cursor-pointer preview-btn">
            <img
              class="rounded-md w-full"
              src="../assets/images/courses/course-video.webp"
              alt=""
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="ph-play-circle text-white text-2xl md:text-4xl"></i>
              <p class="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-16 text-white font-poppins font-semibold text-sm md:text-base">
                Review this course
              </p>
            </div>
          </div>

          <div class="pt-10">
            <div class="space-y-2">
              <h2 class="font-poppins font-medium text-lg md:text-3xl leading-7 md:leading-[48px] text-primary">
                Angular - The Complete Guide (2020 Edition)
              </h2>
              <p class="font-poppins text-xs md:text-base leading-5 md:leading-6 text-[#51525B]">
                This tutorial will help you learn quickly and thoroughly. Lorem
                ipsum is dummy text used in laying out print, graphic or web
                designs
              </p>
            </div>

            <div class="flex flex-col md:flex-row justify-between pt-6">
              <div class="flex divide-x divide-[#51525B]/60 gap-6">
                <div>
                  <p class="font-poppins text-xs md:text-sm leading-5 text-[#51525B]">
                    Instructor
                  </p>
                  <p class="font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-success">
                    Kevin Perry
                  </p>
                </div>
                <div class="pl-6">
                  <p class="font-poppins text-xs md:text-sm leading-5 text-[#51525B]">
                    Updated
                  </p>
                  <p class="font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-success">
                    September 25, 2021
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 pt-2.5 md:pt-0">
                <img src="../assets/images/svg/star-fill.svg" alt="" />
                <img src="../assets/images/svg/star-fill.svg" alt="" />
                <img src="../assets/images/svg/star-fill.svg" alt="" />
                <img src="../assets/images/svg/star-fill.svg" alt="" />
                <img src="../assets/images/svg/star-outline.svg" alt="" />
                <p class="font-poppins font-medium text-xs md:text-sm leading-4 md:leading-5 text-primary">
                  4.6
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-3 pt-5">
            <div class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] md:w-[122px] h-[57px] md:h-[65px] rounded-lg flex flex-col justify-center items-center">
              <p class="font-poppins text-[10px] xl:text-base leading-3 xl:leading-6 text-disable mb-[6px]">
                Course Duration
              </p>
              <p class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                6 Month
              </p>
            </div>
            <div class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[76px] md:w-[112px] h-[57px] md:h-[65px] rounded-lg flex flex-col justify-center items-center">
              <p class="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                Lecture
              </p>
              <p class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                45
              </p>
            </div>
            <div class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] xl:w-[122px] h-[57px] md:h-[66px] rounded-lg flex flex-col justify-center items-center">
              <p class="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                Resources
              </p>
              <p class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                16 articles
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center py-4">
            <p class="font-poppins font-bold text-xl leading-[30px] text-success">
              $99.00
            </p>
            <p class="line-through font-poppins font-medium text-sm leading-[21px] text-disable">
              $199.00 50% off
            </p>
          </div>
          <div class="w-full text-center bg-success rounded-[4px]">
            <button
              class="font-poppins font-medium text-sm leading-[22px] text-white py-[11px]"
              type=""
            >
              Get this course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCardMobile;