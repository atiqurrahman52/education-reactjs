import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { coursesData } from "../../data/home/coursesData";

const ExploreCoursers = () => {
  return (
    <div className="container">
      <div className="py-6 xl:py-16 gap-6 xl:gap-8">
        <h3 className="font-poppins text-sm xl:text-4xl text-primary leading-5 xl:leading-[60px]">
          Explore <span className="font-semibold">All Courses</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-6 xl:pt-8">
          {coursesData.map(({ id, img, author, price, title, ratings }) => {
            return (
              <div key={id}>
                <Link
                  to="#"
                  className="rounded-xl overflow-hidden shadow-[0_0_14px_rgba(175,175,175,0.16)] block"
                >
                  <div className="mb-4">
                    <img
                      className="w-full scale-100 group-hover:scale-125 transition-all duration-700 ease-in-out"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-4">
                      <ReactStars
                        size={14}
                        count={5}
                        edit={false}
                        value={ratings}
                        color="#FDAE53"
                        activeColor="#FDAE53"
                        emptyIcon={<i className="far fa-star" />}
                        filledIcon={<i className="fa fa-star" />}
                      />
                      <p className="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-primary">
                        {ratings}
                      </p>
                    </div>

                    <h3 className="font-poppins font-medium text-base xl:text-lg leading-6 xl:leading-7 text-primary capitalize mb-2">
                      {title}
                    </h3>
                    <p className="font-poppins text-xs xl:text-sm leading-5 text-primary mb-3">
                      {author}
                    </p>
                    <p className="font-poppins font-medium text-xs xl:text-base leading-5 xl:leading-6 text-primary border-t-[1px] border-[#E5E5E5] pt-3">
                      ${price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center pt-6 xl:pt-8">
          <Link
            to="/all-courses"
            className="font-poppins text-sm xl:text-base leading-5 xl:leading-6 text-primary capitalize py-2.5 px-5 rounded-md border border-primary"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCoursers;
