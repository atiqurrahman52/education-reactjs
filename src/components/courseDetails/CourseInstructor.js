import { ImageSquare } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { instructorSocialData } from "../../data/courseDetails/instructorSocialData";

const CourseInstructor = () => {
  return (
    <div id="instructor" className="course-tab-content py-8 xl:py-16">
      <div>
        <h3 className="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 text-primary mb-6 text-center xl:text-left">
          Instructor profile
        </h3>
        <div className="flex flex-col xl:flex-row xl:divide-x divide-[#E7E7E7]">
          <div className="w-full xl:w-[204px] flex flex-shrink-0 flex-col justify-center xl:items-start items-center p-4 pl-0">
            <div className="mx-auto">
              <ImageSquare
                size={120}
                className="text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-7"
              />
            </div>
            <div className="flex items-center justify-center space-x-2 xl:space-x-3 pt-6">
              {instructorSocialData.map(({ i, path, icon }) => (
                <Link
                  key={i}
                  to={path}
                  className="bg-[#F3F3F3] rounded-[4px] h-[30px] w-9 flex items-center justify-center"
                >
                  <img src={icon} alt="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full xl:w-[216px] flex flex-shrink-0 flex-col justify-center xl:items-start items-center p-1 xl:p-3">
            <h3 className="font-poppins font-medium text-lg leading-7 text-disable mb-2.5">
              Jon Andarson
            </h3>
            <p className="text-[#838893] font-poppins text-base leading-8">
              Web Dev ekoper
            </p>
            <p className="text-[#838893] font-poppins text-base leading-8">
              andarson@aducat.com
            </p>
            <p className="text-[#838893] font-poppins text-base leading-8">
              +(222) 3456 278
            </p>
          </div>

          <div className="flex flex-grow flex-col justify-center xl:items-start items-center xl:pl-4">
            <h3 className="text-disable font-poppins font-medium text-lg leading-7 mb-2">
              About
            </h3>
            <p className="text-[#838893] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-[21px] text-justify">
              Sit amet conse ctetur adipi sicing elit. Aut animi sed labo rum.
              Nam esse ipsum ab mole stias rem corr upti moles tiae expe dita
              hic aspe riores eius, vitae unde neces sitat ibus, mai ore bland
              itiis magni. dolor sit amet conse ctetur adipi sicing elit. Aut
              animi sed labo rum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
