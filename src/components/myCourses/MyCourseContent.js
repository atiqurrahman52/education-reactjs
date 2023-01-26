import React, { Fragment } from "react";
import video from "../../assets/images/video/video1.mp4";
import CourseContent from "../courseDetails/CourseContent";
import CourseFaq from "../courseDetails/CourseFaq";
import CourseInstructor from "../courseDetails/CourseInstructor";
import CourseOverview from "../courseDetails/CourseOverview";
import CourseReviews from "../courseDetails/CourseReviews";
import CoursesVideo from "./CoursesVideo";
import { myCourseTabs } from "../../data/myCourses/myCourseTabData";
import { useState } from "react";
const MyCourseContent = () => {
  const [isActive, setIsActive] = useState(0);
  const handleTabClick = (title) => {
    setIsActive(title);
  };

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-6 xl:pt-6">
        <div className="col-span-12 lg:col-span-8">
          <video width="" controls>
            <source src={video} type="video/mp4" />
          </video>

          <div className="tabs-course flex space-x-2 xl:space-x-4 border-b border-[#DDE0E3] pt-6">
            {myCourseTabs.map((tab) => (
              <button
                key={tab.id}
                className={`  
               ${
                 isActive === tab.id
                   ? "text-primary border-b border-success"
                   : "text-[#9DA6BA] text-base"
               }  cursor-pointer`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>

          <div>
            {[
              <CourseOverview />,
              <CourseContent />,
              <CourseInstructor />,
              <CourseReviews />,
              <CourseFaq />,
            ].map((tab, i) => (
              <Fragment key={i}>{i === isActive && tab}</Fragment>
            ))}
          </div>
        </div>

        {/* scrollbar started   */}
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:block xs:hidden">
            <h1 className="font-poppins font-medium text-2xl leading-[36px] text-primary">
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
