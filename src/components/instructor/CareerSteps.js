import React from "react";

const CareerSteps = () => {
  return (
    <div className="py-8 xl:py-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-poppins font-medium text-base xl:text-[32px] leading-6 xl:leading-[48px] text-primary">
              4 Steps to Start your teaching career with prodigy
            </h1>
          </div>
          <div className="flex">
            <p className="absolute pt-5 xl:pt-20 -ml-3 xl:-ml-6 font-poppins font-semibold text-[8px] xl:text-lg leading-3 xl:leading-7">
              -Steps
            </p>
            <p className="font-poppins font-semibold text-3xl xl:text-[120px] leading-[47px] xl:leading-[180px] text-primary opacity-[0.1]">
              04
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <div className="space-y-2 xl:space-y-4 relative">
            <span className="step step-1 block text-center h-10 w-10 leading-10 rounded-full border border-black/20 lg:mx-auto bg-white z-10">
              1
            </span>
            <div className="step-content">
              <h2 className="font-poppins font-semibold text-sm xl:text-lg leading-5 xl:leading-7 text-primary pb-3 lg:pb-4">
                Plan your curriculum
              </h2>
              <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary opacity-[0.6]">
                CFDR preliminary classes whose names are ended with "101CF".
                Finishing these classes will bring you the basic knowledge and
                skills.
              </p>
            </div>
          </div>
          <div className="space-y-2 xl:space-y-4 relative">
            <span className="step step-2 block text-center h-10 w-10 leading-10 rounded-full border border-black/20 lg:mx-auto bg-white z-10">
              2
            </span>
            <div className="step-content">
              <h2 className="font-poppins font-semibold text-sm xl:text-lg leading-5 xl:leading-7 text-primary pb-3 lg:pb-4">
                Record your video & send
              </h2>
              <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary opacity-[0.6]">
                CFDR preliminary classes whose names are ended with "101CF".
                Finishing these classes will bring you the basic knowledge and
                skills.
              </p>
            </div>
          </div>
          <div className="space-y-2 xl:space-y-4 relative">
            <span className="step step-3 block text-center h-10 w-10 leading-10 rounded-full border border-black/20 lg:mx-auto bg-white z-10">
              3
            </span>
            <div className="step-content">
              <h2 className="font-poppins font-semibold text-sm xl:text-lg leading-5 xl:leading-7 text-primary pb-3 lg:pb-4">
                wait for specialist approval
              </h2>
              <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary opacity-[0.6]">
                CFDR preliminary classes whose names are ended with "101CF".
                Finishing these classes will bring you the basic knowledge and
                skills.
              </p>
            </div>
          </div>
          <div className="space-y-2 xl:space-y-4 relative">
            <span className="step step-4 block text-center h-10 w-10 leading-10 rounded-full border border-black/20 lg:mx-auto bg-white z-10">
              4
            </span>
            <div className="step-content">
              <h2 className="font-poppins font-semibold text-sm xl:text-lg leading-5 xl:leading-7 text-primary pb-3 lg:pb-4">
                Launch your course
              </h2>
              <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary opacity-[0.6]">
                CFDR preliminary classes whose names are ended with "101CF".
                Finishing these classes will bring you the basic knowledge and
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSteps;
