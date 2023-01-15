import React from "react";
import { ourStoryData } from "../../data/about/ourStoryData";

const OurStory = () => {
  return (
    <div className="container">
      <div className="py-8 xl:py-16">
        {ourStoryData.map(({ id, title, description, img }) => (
          <div key={id} className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 order-last md:order-last">
              <h1 className="mb-2 xl:mb-8 font-poppins font-semibold text-base md:text-[32px] leading-6 md:leading-[48px] text-primary">
                {title}
              </h1>
              <p className="font-poppins text-sm xl:text-base leading-[22px] xl:leading-[26px] text-[#51525B]">
                {description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 order-first md:order-last">
              <img
                className="w-full xl:max-w-[526px] h-full xl:max-h-[305px]"
                src={img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
