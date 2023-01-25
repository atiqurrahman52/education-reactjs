import React from "react";
import video from "../../assets/images/video/video1.mp4";
import CourseContent from "../courseDetails/CourseContent";
import CourseFaq from "../courseDetails/CourseFaq";
import CourseInstructor from "../courseDetails/CourseInstructor";
import CourseOverview from "../courseDetails/CourseOverview";
import CourseReviews from "../courseDetails/CourseReviews";
import CoursesVideo from "./CoursesVideo";

const MyCourseContent = () => {
  return (
    <div class="container">
      <div class="grid grid-cols-12 gap-6 xl:pt-6">
        <div class="col-span-12 lg:col-span-8">
          <video width="" controls>
            <source src={video} type="video/mp4" />
          </video>

          <ul class="tabs-course flex space-x-2 xl:space-x-4 border-b border-[#DDE0E3] pt-6">
            <li>
              <a
                class="border-b-[2px] border-transparent text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-6"
                href="#panelone"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                class="border-b-[2px] border-transparent text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-6 lg:hidden"
                href="#paneltwo"
              >
                Content
              </a>
            </li>
            <li>
              <a
                class="border-b-[2px] border-transparent text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-6"
                href="#panelthree"
              >
                Instructor
              </a>
            </li>
            <li>
              <a
                class="border-b-[2px] border-transparent text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-6"
                href="#panelfour"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                class="border-b-[2px] border-transparent text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-6"
                href="#panelfive"
              >
                FAQ
              </a>
            </li>
          </ul>

          <div class="">
            <CourseOverview />

            <CourseContent />

            <CourseInstructor />
            <CourseReviews />

            <CourseFaq />
          </div>
        </div>

        {/* scrollbar started   */}
        <div class="col-span-12 lg:col-span-4">
          <div class="lg:block xs:hidden">
            <h1 class="font-poppins font-medium text-2xl leading-[36px] text-primary">
              Angular - The Complete Guide (2020 Edition)
            </h1>

            <CoursesVideo />
          </div>

          {/* scrollbar end   */}
        </div>
      </div>
    </div>
  );
};

export default MyCourseContent;
