import React from "react";
import { instructorData } from "../../data/instructor/instructorData";

const BecomeInstructor = () => {
  return (
    <div className="py-8 xl:py-10">
      <div className="container">
        <h1 className="text-center font-poppins font-medium text-base xl:text-3xl leading-6 xl:leading-10 text-primary capitalize">
          How to Become an Instructor
        </h1>
        <div className="tabbedPanels">
          {instructorData.map((data, i) => (
            <div className="tabs-instructor flex justify-center gap-5 py-3 xl:py-4 text-success scroll-bar overflow-x-auto mb-4 xl:mb-0">
              <button className="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-primary capitalize whitespace-nowrap">
                {data.tab}
              </button>
            </div>
          ))}

          <div className="px-1 xl:px-20">
            <div class="grid grid-cols-12">
             {instructorData.content.map(() =>
             <div> 
                 <div class="col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-7">
              <h1 class="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary capitalize">
                Become an Instructor
              </h1>
              <div class="space-y-3 xl:space-y-4">
                <h6 class="font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-6 text-primary capitalize">
                  Plan your course
                </h6>
                <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 capitalize text-[#51525B] text-justify">
                  cras semper auctor. Libero id faucibus nisl tincidunt
                  egetnvallis a cras semper auctonvallis a cras semper aucto.
                  Neque convallis a cras semper auctor. Liberoe convallis a
                  cras semper atincidunt egetnval
                </p>
              </div>
              <div class="space-y-3 xl:space-y-4">
                <h6 class="font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-6 text-primary capitalize">
                  How we help you?
                </h6>
                <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 capitalize text-[#51525B] text-justify">
                  a cras semper auctor. Libero id faucibus nisl tincidunt
                  egetnvallis a cras semper auctonvallis a cras semper aucto.
                  Neque convallis a cras semper auctor. Liberoe convallis a
                  cras semper atincidunt egeeque convallis a cras semper
                  auctor. Libero id faucibus nisl tincidunt egetnvallis a cras
                  semper auctonvallis a cras semper aucto. Neque convallis a
                  cras semper auctor. Liberoe convallis a cras semper
                  atincidunt egetnval
                </p>
              </div>
            </div>

            <div class="col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-5">
              <img
                class="w-full"
                src="../assets/images/instructor/become-instructor.webp"
                alt=""
              />
            </div>
             </div>
             )}
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default BecomeInstructor;
