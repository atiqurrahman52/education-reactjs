import React from "react";
import Faq from "../privacy/Faq";
import CourseContent from "./CourseContent";
import CourseFaq from "./CourseFaq";
import CourseInstructor from "./CourseInstructor";
import CourseOverview from "./CourseOverview";
import CourseReviews from "./CourseReviews";

const CourseInfo = () => {
  return (
    <div class="w-full flex-grow mt-8 xl:mt3">
      <ul class="flex space-x-2 xl:space-x-6 border-b-[1px] border-[#DDE0E3] sticky z-30 top-[72px] pt-5 bg-white">
        <a
          data-scroll="overview"
          class="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
          href="#overview"
        >
          Overview
        </a>
        <a
          data-scroll="course-content"
          class="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
          href="#course-content"
        >
          Content
        </a>
        <a
          data-scroll="instructor"
          class="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
          href="#instructor"
        >
          Instructor
        </a>
        <a
          data-scroll="reviews"
          class="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
          href="#reviews"
        >
          Reviews
        </a>
        <a
          data-scroll="faq"
          class="border-b border-transparent font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-[#9DA6BA] pb-2 nav-link-scrollspy"
          href="#faq"
        >
          FAQ
        </a>
      </ul>

      <CourseOverview />

      <CourseContent />

      <CourseInstructor />

      <CourseReviews />

      <CourseFaq />
    </div>
  );
};

export default CourseInfo;
