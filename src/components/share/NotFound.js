import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/notfound/not-found.webp";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-28 xl:py-40">
      <img src={notFound} alt="" />
      <div className="pt-8 md:pt-[110px] xl:pt-[138px]">
        <p className="font-raleway font-bold text-2xl md:text-4xl">
          opps! page not found
        </p>
        <div className="flex justify-center pt-7">
          <Link
            to='/'
            className="border border-success font-medium text-sm leading-4 text-success py-2 px-[34px] rounded-md"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
