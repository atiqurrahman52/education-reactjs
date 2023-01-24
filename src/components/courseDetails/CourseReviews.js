import { ImageSquare } from "phosphor-react";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { reviewsData } from "../../data/courseDetails/reviewsData";
import starBlack from "../../assets/images/svg/Star-black.svg";

const CourseReviews = () => {
  return (
    <div id="reviews" className="course-tab-content py-8 xl:py-16">
      <div className="flex justify-between mb-8">
        <h3 className="font-poppins font-medium text-base xl:text-2xl leading-6 xl:leading-[38px] text-primary">
          Review
        </h3>
        <div className="flex">
          <div className="flex items-center justify-center space-x-1">
            <img src="../assets/images/svg/star-fill.svg" alt="" />
            <p className="font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
              4.5
            </p>
            <p className="font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
              course rating
            </p>
          </div>
        </div>
      </div>


      <div className="space-y-4 xl:space-y-6 mb-8">
        {reviewsData.map(({ i, ratings, date, month, description, author }) => (
          <div className="flex justify-between pt-8 border-b pb-3 border-[#F1F1F2]">
            <div className="flex space-x-2 xl:space-x-4">
              <div>
                <ImageSquare
                  size={54}
                  className="text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-3"
                />
              </div>

              <div className="max-w-[431px]">
                <h3 className="font-poppins font-medium text-[13px] xl:text-base leading-5 xl:leading-6 text-primary mb-1">
                  {author}
                </h3>
                <div className="flex space-x-1 xl:space-x-[5px]">
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

                  <p className="text-success pl-2 xl:pl-4">{ratings}</p>
                </div>
                <p className="pt-1 xl:pt-[11px] font-poppins text-[11px] xl:text-base leading-4 text-primary">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex space-x-1 max-w-[100px]">
              <p className="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                {month}
              </p>
              <p className="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                {date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- form start  --> */}
      <form className="py-8 p-6 rounded-xl shadow-md">
        <h3 className="font-poppins font-medium text-base xl:text-base leading-6 xl:leading-9 text-primary mb-4">
          Add Review
        </h3>
        <div className="flex flex-col xl:flex-row gap-6">
          <input
            type="text"
            name=""
            placeholder="Enter your name"
            className="w-[248px] xl:w-[392px] h-[39px] xl:h-[42px] border-[1px] border-[#F1F1F2] rounded-md pl-2.5 outline-none"
          />
          <input
            type="text"
            name=""
            placeholder="Enter your email"
            className="w-[248px] xl:w-[392px] h-[39px] xl:h-[42px] border-[1px] border-[#F1F1F2] rounded-md pl-2.5 outline-none"
          />
        </div>

        <div className="pt-4">
          <h3 className="mb-2 font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6">
            Rating
          </h3>
          <div className="flex space-x-[5px]">
            <img src={starBlack} alt="" />
            <img src={starBlack} alt="" />
            <img src={starBlack} alt="" />
            <img src={starBlack} alt="" />
            <img src={starBlack} alt="" />
          </div>
        </div>

        <div className="py-6">
          <textarea
            rows=""
            cols=""
            placeholder="Write your comments"
            className="w-[248px] xl:w-[808px] h-[114px] xl:h-[158px] rounded-md border-[1px] outline-none border-[#F1F1F2] p-2.5"
          ></textarea>
        </div>
        <button
          type=""
          className="py-2 xl:py-[11px] px-6 bg-success rounded-md font-poppins font-semibold text-xs xl:text-base text-white leading-4 xl:leading-6"
        >
          Submit Review
        </button>
      </form>
      {/* <!-- form end --> */}
    </div>
  );
};

export default CourseReviews;
