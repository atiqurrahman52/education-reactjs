import { CaretRight } from "phosphor-react";
import React from "react";

const MyCoursesBanner = () => {
  return (
    <div className="breadcrumb bg-no-repeat bg-center bg-cover h-[56px]">
      <div className="container">
        <div className="flex items-center space-x-1 xl:space-x-2 py-4">
          <p className="font-poppins text-[10px] xl:text-sm leading-[15px] text-primary">
            Courses
          </p>
          <CaretRight size={16} className="text-primary " />
          <p className="font-poppins text-[10px] xl:text-sm leading-[15px] text-primary">
            web Development
          </p>
          <CaretRight size={16} className="text-primary " />

          <p className="font-poppins text-[10px] xl:text-sm leading-[15px] text-disable">
            JavaScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesBanner;
