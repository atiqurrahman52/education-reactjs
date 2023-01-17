import React from 'react';

const CourseDetailBanner = () => {
    return (
        <div  class="lg:block hidden">
      <div class="breadcrumb bg-cover bg-center bg-no-repeat h-[450px] mt-[px]">
        <div class="container">
          <div class="max-w-[746px]">
            <div class="flex items-center gap-2 pt-6">
              <p class="text-primary font-normal font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
                Web Development
              </p>
              <i class="ph-caret-right text-primary"></i>
              <p class="text-[#9DA6BA] font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5">
                JavaScript
              </p>
            </div>

            <div class="pt-10">
              <div class="space-y-2">
                <h2 class="font-poppins font-medium text-lg xl:text-3xl leading-7 xl:leading-[48px] text-primary">
                  Angular - The Complete Guide (2020 Edition)
                </h2>
                <p class="font-poppins text-xs xl:text-base leading-5 xl:leading-6 text-[#51525B]">
                  This tutorial will help you learn quickly and thoroughly.
                  Lorem ipsum is dummy text used in laying out print, graphic
                  or web designs
                </p>
              </div>

              <div class="flex justify-between pt-6">
                <div class="flex divide-x divide-[#51525B]/60 gap-6">
                  <div>
                    <p class="font-poppins text-xs xl:text-sm leading-5 text-[#51525B]">
                      Instructor
                    </p>
                    <p class="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-success">
                      Kevin Perry
                    </p>
                  </div>
                  <div class="pl-6">
                    <p class="font-poppins text-xs xl:text-sm leading-5 text-[#51525B]">
                      Updated
                    </p>
                    <p class="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-success">
                      September 25, 2021
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <img src="../assets/images/svg/star-fill.svg" alt="" />
                  <img src="../assets/images/svg/star-fill.svg" alt="" />
                  <img src="../assets/images/svg/star-fill.svg" alt="" />
                  <img src="../assets/images/svg/star-fill.svg" alt="" />
                  <img src="../assets/images/svg/star-outline.svg" alt="" />
                  <p class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary">
                    4.6
                  </p>
                </div>
              </div>
            </div>

            <div class="flex space-x-3 pt-10">
              <div
                class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p class="font-poppins text-[10px] xl:text-base leading-3 xl:leading-6 text-disable mb-[6px]">
                  Course Duration
                </p>
                <p
                  class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                  6 Month
                </p>
              </div>
              <div
                class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[76px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p class="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                  Lecture
                </p>
                <p
                  class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
                  45
                </p>
              </div>
              <div
                class="bg-[#F4F9FF] border-[1px] border-[#DEE3E8] w-[106px] xl:w-[172px] h-[57px] xl:h-[96px] rounded-lg flex flex-col justify-center items-center">
                <p class="font-poppins text-[10px] xl:text-base leading-4 xl:leading-6 text-disable mb-[6px]">
                  Resources
                </p>
                <p
                  class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary opacity-[0.8]">
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