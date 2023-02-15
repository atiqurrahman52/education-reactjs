import { CaretRight } from "phosphor-react";
import React from "react";

const AllCoursesBanner = () => {
  return (
    <div className="breadcrumb bg-cover bg-center bg-no-repeat h-[250px]">
      <div className="container">
        <div className="flex items-center gap-2 pt-6 mb-[56px]">
          <p className="text-primary font-normal font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
            Web Development
          </p>

          <CaretRight size={18} className="text-primary" />
          <p className="text-[#9DA6BA] font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5">
            JavaScript
          </p>
        </div>

        <h2 className="font-poppins font-semibold text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary">
          Web Development Courses
        </h2>
      </div>
    </div>
  );
};

export default AllCoursesBanner;
