import React from 'react';

const AllCoursesBanner = () => {
    return (
        <div class="breadcrumb bg-cover bg-center bg-no-repeat h-[250px]">
        <div class="container">
          <div class="flex items-center gap-2 pt-6 mb-[56px]">
            <p
              class="text-primary font-normal font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
            >
              Web Development
            </p>
            <i class="ph-caret-right text-primary"></i>
            <p
              class="text-[#9DA6BA] font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5"
            >
              JavaScript
            </p>
          </div>

          <h2
            class="font-poppins font-semibold text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary"
          >
            Web Development Courses
          </h2>
        </div>
      </div>
    );
};

export default AllCoursesBanner;