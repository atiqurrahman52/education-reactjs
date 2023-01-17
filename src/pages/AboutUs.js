import React from "react";
import AboutBanner from "../components/aboutUs/AboutBanner";

import OurMission from "../components/aboutUs/OurMission";
import OurStory from "../components/aboutUs/OurStory";
import KeySupport from "../components/share/KeySupport";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <OurMission />
      <KeySupport />
    </div>
  );
};

export default AboutUs;
