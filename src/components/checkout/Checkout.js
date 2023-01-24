import React from "react";
import angular from "../../assets/images/courses/angular.webp";
import ReactStars from "react-rating-stars-component";
import { checkoutData } from "../../data/cartData.js/checkoutData";
import { CaretRight, X } from "phosphor-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div class="breadcrumb bg-cover bg-center bg-no-repeat h-[250px]">
        <div class="container">
          <div class="flex items-center gap-1 pt-6">
            <p class="text-primary font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
              web Development
            </p>

            <CaretRight size={20} className="text-disable" />
            <p class="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
              JavaScript
            </p>

            <CaretRight size={20} className="text-disable" />
            <p class="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
              Checkout
            </p>
          </div>

          <h2 class="font-poppins font-medium text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary pt-14">
            Checkout
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="py-6 xl:py-16 max-w-[1076px]">
          <h3 className="mb-4 xl:mb-6 font-poppins font-medium text-base xl:text-xl leading-6 text-primary">
            Checkout list
          </h3>

          <div className="grid grid-cols-6 bg-[#F4F6F8] py-2 xl:py-4 px-2 xl:px-5">
            <p className="col-span-4 font-poppins font-medium text-xs xl:text-base leading-4 text-[#637381]">
              Course Details
            </p>
            <p className="font-poppins font-medium text-xs xl:text-base leading-4 text-[#637381] text-center">
              Price
            </p>
            <p className="font-poppins font-medium text-xs xl:text-base leading-4 text-[#637381] text-center">
              Action
            </p>
          </div>

          {checkoutData.map(({ id, img, ratings, title, author, price }) => (
            <div className="grid grid-cols-6 px-2 xl:px-5 border-b-[.6px] border-[#9DA6BA] pb-4 py-3 xl:py-[18px]">
              <div className="col-span-4 flex space-x-[5px] xl:space-x-[7px]">
                <div>
                  <img
                    className="w-[63px] xl:w-[144px] h-[56px] xl:h-[77px] rounded-[3px] xl:rounded-none"
                    src={img}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-[10px] xl:text-sm leading-4 xl:leading-5 text-primary mb-0 xl:mb-1">
                    {title}
                  </h4>
                  <p className="font-poppins font-[300] leading-4 text-primary text-[10px] xl:text-xs mb-0 xl:mb-1">
                    {author}
                  </p>
                  <div className="flex items-center space-x-1 xl:space-x-2">
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
                    <p className="font-poppins text-[10px] xl:text-lg leading-3 text-primary pl-1 xl:pl-3">
                      4.6
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <p className="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6">
                  ${price}
                </p>
              </div>

              <button
                className="flex justify-center items-center text-primary text-sm xl:text-lg"
                type=""
              >
                <X size={24} className="text-center" />
              </button>
            </div>
          ))}

          <div className="flex xs:flex-col md:flex-row justify-between pt-4">
            <div className="mb-4">
              <h4 className="font-poppins mb-2 xl:mb-3 text-sm xl:text-base leading-5 xl:leading-6 text-primary">
                Code
              </h4>
              <input
                type="text"
                name=""
                placeholder="Coupon code"
                className="border-[1px] border-[#9DA6BA] w-full lg:max-w-[212px] h-[36px] xl:h-[40px] rounded-[4px] py-3 pl-4 outline-none"
              />
            </div>
            <div className="flex space-x-6">
              <div className="flex-col">
                <p className="font-poppins font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-disable mb-3">
                  Discount
                </p>
                <p className="font-poppins font-semibold text-sm xl:text-lg leading-[21px] xl:leading-[27px] text-primary mb-4">
                  $24
                </p>
                <Link
                  to="/course-details"
                  className="font-poppins font-medium xl:font-semibold text-sm xl:text-base text-[#637381]  bg-[#F1F1F2] py-2 xl:py-2.5 px-2 xl:px-[56px] rounded"
                >
                  Back to Courses
                </Link>
              </div>
              <div className="flex-col">
                <p className="font-poppins font-medium text-sm xl:text-base leading-[21px] xl:leading-6 text-disable mb-3">
                  Total
                </p>
                <p className="font-poppins font-semibold text-sm xl:text-lg leading-[21px] xl:leading-[27px] text-primary mb-4">
                  $1002.00
                </p>
                <Link
                  to="#"
                  className="font-poppins font-medium xl:font-semibold text-sm xl:text-base text-white leading-[21px] xl:leading-6 bg-success py-2 xl:py-2.5 px-6 xl:px-[56px] rounded"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
