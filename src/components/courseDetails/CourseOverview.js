import { CaretCircleRight, CaretRight } from "phosphor-react";
import React from "react";
import { courseOverviewData } from "../../data/courseDetails/courseOverviewData";

const CourseOverview = () => {
  return (
    <div  className="py-9">
      {courseOverviewData.map(
        ({ i,items, description, header }) => (
            
          <div className="space-y-8">
            <div>
              <h2 className="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 mb-4 text-primary">
                {header}
              </h2>
              <p className="text-[#51525B] font-poppins text-xs xl:text-sm leading-4 xl:leading-5 mb-3">
                {description}
              </p>
             
            </div>

           
         
              <div className="border-[1px] border-[#EDEDED] p-6 rounded-lg">
                <h2 className="font-poppins font-medium text-base leading-6 text-primary mb-4">
                  Skills you will gain
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-5">
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Angular
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Debugging
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Deep Dive
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Routing
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Services Dependency
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Directives
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Dynamic Components
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Deploying
                  </a>
                  <a
                    href=""
                    className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Animations
                  </a>
                </div>
              </div>
           
           

            {/* <!-- Learning Objectives --> */}
            <div>
              <h3 className="mb-5 xl:mb-4 font-poppins font-semibold text-base leading-6 text-primary">
                Learning Objectives
              </h3>
              <div className="flex flex-col lg:flex-row flex-wrap gap-6 learning-objective p-6 rounded-[10px]">
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
               
                  <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                <CaretCircleRight size={32} className='text-[#637381]' />
                  <p className="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Requirements --> */}
            <div>
              <h3 className="mb-5 xl:mb-4 font-poppins font-semibold text-base leading-6 text-primary">
                Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  
                  <CaretRight size={24} className='text-success' />
                  <p className="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                <CaretRight size={24} className='text-success' />
                  <p className="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                <CaretRight size={24} className='text-success' />
                  <p className="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                    Negotiate effectively and fairly to make 1000s more than
                    they would otherwise
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CourseOverview;
