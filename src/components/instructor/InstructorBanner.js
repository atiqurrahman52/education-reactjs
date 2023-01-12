import React from 'react';
import instructor from '../../assets/images/instructor/breadcrumb2.webp';

const InstructorBanner = () => {
    return (
      
        <div class="breadcrumb bg-cover bg-center bg-no-repeat mt-[px]">
          <div class="container">
            <div class="flex items-center gap-2 pt-6">
              <p
                class="text-primary font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
              >
                Explore
              </p>
              <i class="ph-caret-right text-primary"></i>
              <p
                class="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
              >
                Become Instructor
              </p>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-between">
              <div class="">
                <h2
                  class="font-poppins font-medium text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary mt-6"
                >
                  Become Instructor
                </h2>
                <p
                  class="font-poppins text-xs xl:text-lg leading-4 xl:leading-7 text-primary flex text-center xl:text-start mt-8 mb-4 xl:mb-8"
                >
                  Become an instructor and change lives — including your own
                  Courses
                </p>
                <a
                  href=""
                  class="font-poppins inline-block font-medium text-sm leading-5 text-white bg-success py-2.5 px-5 xl:px-7 rounded-md"
                  >Start Now</a
                >
              </div>

              <div class="">
                <img
                  src={instructor}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
  
    );
};

export default InstructorBanner;