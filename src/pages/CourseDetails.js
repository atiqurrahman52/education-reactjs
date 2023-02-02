import React from "react";
import CourseDetailBanner from "../components/courseDetails/CourseDetailBanner";
import CourseInfo from "../components/courseDetails/CourseInfo";
import CourseInformation from "../components/courseDetails/CourseInformation";
import PriceCardDesktop from "../components/courseDetails/PriceCardDesktop";
import PriceCardDesktop1 from "../components/courseDetails/PriceCardDesktop1";
import PriceCardMobile from "../components/courseDetails/PriceCardMobile";
import RelatedCourses from "../components/courseDetails/RelatedCourses";
import KeySupport from "../components/share/KeySupport";

const CourseDetails = () => {
  return (
    <div>
      <CourseDetailBanner />
      <PriceCardMobile />
      {/* <div className="container flex gap-6 justify-between">
        <CourseInformation />
        <PriceCardDesktop />
      </div> */}
      <div className="container">
        <div className="flex justify-between gap-6">
          <CourseInfo />
          {/* <CourseInformation /> */}
          <PriceCardDesktop />
          {/* <PriceCardDesktop1 /> */}
        </div>
      </div>
      <RelatedCourses />
      <KeySupport />
    </div>
  );
};

export default CourseDetails;
