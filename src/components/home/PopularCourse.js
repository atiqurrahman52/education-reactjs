import React from "react";

const PopularCourse = () => {
  return (
    <div className="container">
      <div className="py-8 xl:py-10">
        <h3 className="text-center font-poppins text-2xl xl:text-[32px] leading-9 xl:leading-[45px] text-primary">
          Most Popular Course by
          <span className="font-semibold"> Department</span>
        </h3>
      </div>

      <div className="">
        <div className="relative max-w-[1042px] mx-auto"></div>

        {/* <!-- END tabs-nav --> */}
        <div className="py-9"></div>
      </div>
    </div>
  );
};

export default PopularCourse;
