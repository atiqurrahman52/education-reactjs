import React from "react";
import { Link } from "react-router-dom";
import { popularTopicsData } from "../../data/sitemap/popularTopicsData";

const PopularTopics = () => {
  return (
    <div className="py-8 xl:py-16">
      <div className="container">
        <h1 className="font-poppins font-semibold text:sm xl:text-2xl leading-6 xl:leading-9 text-[#51525B] mb-3 xl:mb-6">
          Populer Topic
        </h1>
        <div className="grid grid-cols-12 gap-3 xl:gap-6">
          {popularTopicsData.map((data,id) => (
            <div key={id} className="col-span-12 md:col-span-4 xl:col-span-4">
              <div className="flex flex-col space-y-1 xl:space-y-2">
                <h3 className="font-poppins font-medium text-sm xl:text-base leading-4 xl:leading-6 text-[#3E4F67]">
                  {data.categoryTitle}
                </h3>

                {data.categories.map(({ id, title, path }) => (
                  <Link
                  key={id}
                    href="#"
                    className="font-poppins text-sm xl:text-base leading-5 xl:leading-6 text-[#51525B]"
                  >
                    {" "}
                    {title}{" "}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    


    </div>
  );
};

export default PopularTopics;
