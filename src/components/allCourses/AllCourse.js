import { CaretLeft, CaretRight, FunnelSimple } from 'phosphor-react';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { coursesData } from '../../data/home/coursesData';
// import funnel

const AllCourse = () => {
    return (
        <div className="container">
          <div className="py-6 xl:py-16 gap-6 xl:gap-8 ">
            <div className="flex justify-between">
              <div
                className="flex justify-center items-center rounded gap-3 xl:gap-4 bg-[#F5F9FA] px-4 py-3 xl:px-6"
              >
                {/* <img
                  className="w-4 xl:w-6 h-4 xl:h-6"
                  src="../assets/images/courses/FunnelSimple.png"
                  alt=""
                /> */}
                <FunnelSimple size={24} className='text-primary'  />
                <p
                  id="filter-btn"
                  className="font-poppins font-medium text-xs xl:text-base leading-5 xl:leading-6 text-primary"
                >
                  Filter
                </p>
              </div>

               {/* <div className="relative">
                <select className="w-full appearance-none bg-[#F7F7F7] text-[#A8B1BC] rounded-[10px] px-4 py-3 2xl:p-4 text-xs xl:text-base outline-0 transition-all duration-300">
                <select
                  className="w-[154px] xl:w-[276px] appearance-none bg-white rounded-md p-3 text-sm xl:text-base border-[1px] border-[#9DA6BA] outline-none transition-all duration-300"
                >
                  <option value="">
                    <p
                      className="text-[#9DA6BA] font-poppins font-medium leading-6"
                    >
                      Sort by
                      <span className="font-medium textsm font-poppins text-primary">Populer </span>
                    </p>
                  </option>
                  <option value="">Populer</option>
                  <option value="0">Highest Rated</option>
                  <option value="1">Newest</option>
                  <option value="2">Most Selling</option>
                </select>

                <i
                  className="ph-caret-down absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none w-2.5 h-2.5 md:w-3 md:h-3 xl:w-4 xl:h-4"
                ></i>
              </div>  */}
              {/* <!-- <select className="js-example-basic-single" name="state" multiple="multiple"> --> */}
              {/* <select className="courses" name="state" className="">
                <option value="1">Sort By</option>
                <option value="2">Populer</option>
                <option value="3">Highest Rated</option>
                <option value="4">Newest</option>
                <option value="5">Most Selling </option>
              </select> */}
            </div>

            <div className="flex flex-col md:flex-row gap-6 pt-6 xl:pt-8">
            
              <div
                className="w-[306px] flex-shrink-0 sidebar bg-[#F9F9FB] relative transition-all duration-300"
              >
                
                <button
                  type="button"
                  id="close-filter"
                  className="absolute top-0 -left-11 bg-white z-40 h-8 w-8 rounded-full lsm:hidden flex items-center justify-center"
                >
                  <i className="ph-x"></i>
                </button>
                <div className="h-full sidebar-inner p-6 space-y-5 xl:space-y-6">
                  <div>
                    <p
                      className="font-poppins font-semibold text-sm xl:text-base tracking-[-0.006em] leading-6 text-[#252C32] mb-2 xl:mb-1"
                    >
                      Price, $
                    </p>
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        name=""
                        placeholder="Min"
                        id=""
                        className="py-1 px-3 border-[1px] max-w-[120px] border-[#DDE2E4] outline-none rounded-md"
                      />
                      <input
                        type="text"
                        name=""
                        placeholder="Max"
                        id=""
                        className="py-1 px-3 border-[1px] max-w-[120px] border-[#DDE2E4] outline-none rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-poppins font-medium text-sm xl:text-base text-[#323232] leading-5 mb-5 xl:mb-6"
                    >
                      Sort by
                    </p>
                    <div className="space-y-2 xl:space-y-4">
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Latest</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Oldest</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Course Title (A-Z)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Course Title (Z-A)</label
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-poppins font-medium text-sm xl:text-base text-[#323232] leading-5 mb-5 xl:mb-6"
                    >
                      Category
                    </p>
                    <div className="space-y-2 xl:space-y-4">
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Art & Design (4)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Architecture (51)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >UX/UI Design (3)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Marketing (24)</label
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-poppins font-medium text-sm xl:text-base text-[#323232] leading-5 mb-5 xl:mb-6"
                    >
                      Instructor
                    </p>
                    <div className="space-y-2 xl:space-y-4">
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Adam Smith (20)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Beyjones dogges(20)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Kilian Roxy(15)</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Alex Roben(25)</label
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-poppins font-medium text-sm xl:text-base text-[#323232] leading-5 mb-5 xl:mb-6"
                    >
                      Level
                    </p>
                    <div className="space-y-2 xl:space-y-4">
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >All Levels</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Beginner</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Expert</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Intermediate</label
                        >
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      className="font-poppins font-medium text-sm xl:text-base text-[#323232] leading-5 mb-5 xl:mb-6"
                    >
                      Price
                    </p>
                    <div className="space-y-2 xl:space-y-4">
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >All</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Free</label
                        >
                      </div>
                      <div>
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <label
                          for=""
                          className="ml-3 xl:ml-4 text-disable font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-5"
                          >Paid</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex-grow grid gap-x-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
              >
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
            </div>

          
           {/* Pagination Start  */}

            <div className="container mx-auto pt-6 xl:pt-8 px-">
              <div
                className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
                aria-label="Pagination"
              >
              
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-[#F1F1F2] bg-white  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                    <CaretLeft size={20} className='text-[#637381]' />
                  {/* <i className="ph-caret-left  text-xl text-[#637381]"></i> */}
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-primary bg-[#F6FAFF] text-primary  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                  1
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-[#F1F1F2] bg-white text-primary  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                  2
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-[#F1F1F2] bg-white text-primary  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                  3
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-[#F1F1F2] bg-white text-primary  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                  4
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center  bg-white text-primary  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                  <span className="w-1 h-1 bg-[#212B36]"></span>
                  <span className="w-1 h-1 bg-[#212B36] ml-1"></span>
                  <span className="w-1 h-1 bg-[#212B36] ml-1"></span>
                </a>
                <a
                  className="flex w-10 h-10 mx-1 justify-center items-center rounded border-[1px] border-[#F1F1F2] bg-white  font-poppins text-xs xl:text-sm leading-5"
                  href="#"
                  title="Page 1"
                >
                 
                  <CaretRight size={20} className='text-[#212B36]' />
                </a>

             
              </div>
            </div>
          </div>
        </div>
    );
};

export default AllCourse;