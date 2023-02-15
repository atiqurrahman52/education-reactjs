import React from "react";
import { Link } from "react-router-dom";

const BecomeInstructor = () => {
  return (
    <div>
      <Link to="/instructor">
        <div className="instructor-bg bg-cover bg-center bg-no-repeat w-full h-[203px] xl:h-[287px]">
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="font-raleway font-bold text-2xl xl:text-5xl leading-9 xl:leading-[72px] text-primary mb-1">
              Become An Instructor
            </h3>
            <p className="font-raleway font-medium text-xs xl:text-sm leading-4 xl:leading-6 text-gray text-center mb-4 xl:mb-6">
              Join one of the world’s largest online learning marketplaces.
              <br className="xl:block hidden" />
              Get started
            </p>
            <button className="py-2 xl:py-2.5 px-7 xl:px-16 rounded-md text-white bg-success font-raleway font-medium text-sm xl:text-base leading-5 xl:leading-6">
              Start Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BecomeInstructor;
