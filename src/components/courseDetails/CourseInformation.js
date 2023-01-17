import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutContext from "./LayoutContext";
import Navigation from "./Navigation";
import Section from "./Section";
import "./demo.css";

const CourseInformation = () => {
  return (
    <>
      <LayoutContext.Provider>
        <div className="demo" class="col-span-8">
          <Navigation />
          <Section
            id="Overview"
            color="red"
            classprops="course-tab-content h-screen"
          >
            <div className="space-y-8 pt-10">
              <div>
                <h2 class="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 mb-4 text-primary">
                  Overview
                </h2>
                <p class="text-[#51525B] font-poppins text-xs xl:text-sm leading-4 xl:leading-5 mb-3">
                  This tutorial will help you learn quickly and thoroughly.
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Donec odio.
                  Quisque volutpat mattis eros.
                </p>
                <p class="text-[#51525B] font-poppins text-xs xl:text-sm leading-4 xl:leading-5 mb-3">
                  Youll be exposed to principles and strategies, but, more
                  importantly, youll learn how to actually apply these abstract
                  concepts by coding three different websites for three very
                  different audiences. Lorem ipsum is dummy text used in laying
                  out print, graphic or web designs Lorem ipsum
                </p>
              </div>
              {/* <!-- skill  --> */}
              <div class="border-[1px] border-[#EDEDED] p-6 rounded-lg">
                <h2 class="font-poppins font-medium text-base leading-6 text-primary mb-4">
                  Skills you will gain
                </h2>
                <div class="flex flex-wrap gap-x-4 gap-5">
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Angular
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Debugging
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Deep Dive
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Routing
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Services Dependency
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Directives
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Dynamic Components
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Deploying
                  </Link>
                  <Link
                    to=""
                    class="font-poppins font-medium text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA] py-[6px] px-4 bg-[#F3F3F4] rounded-[100px]"
                  >
                    Animations
                  </Link>
                </div>
              </div>
              {/* <!-- Learning Objectives --> */}
              <div>
                <h3 class="mb-5 xl:mb-4 font-poppins font-semibold text-base leading-6 text-primary">
                  Learning Objectives
                </h3>
                <div class="flex flex-col lg:flex-row flex-wrap gap-6 learning-objective p-6 rounded-[10px]">
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex justify-center gap-x-2 xl:gap-3 w-full xl:w-[calc(50%-12px)]">
                    <i class="ph-caret-circle-right mt-1.5 text-xl xl:text-2xl text-[#637381]"></i>
                    <p class="font-poppins text-xs xl:text-sm leading-5 xl:leading-6 text-[#51525B]">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Requirements --> */}
              <div>
                <h3 class="mb-5 xl:mb-4 font-poppins font-semibold text-base leading-6 text-primary">
                  Requirements
                </h3>
                <div class="space-y-4">
                  <div class="flex gap-3 items-center">
                    <i class="ph-caret-right text-success text-2xl"></i>
                    <p class="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex gap-3 items-center">
                    <i class="ph-caret-right text-success text-2xl"></i>
                    <p class="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                  <div class="flex gap-3 items-center">
                    <i class="ph-caret-right text-success text-2xl"></i>
                    <p class="text-[#51525B] font-poppins text-xs xl:text-base leading-5 xl:leading-6">
                      Negotiate effectively and fairly to make 1000s more than
                      they would otherwise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section
            id="Content"
            color="blue"
            classprops="course-tab-content py-8 xl:py-16"
          >
            <div>
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="font-poppins font-semibold text-sm xl:text-2xl leading-5 xl:leading-9 text-primary">
                    Course content
                  </h3>
                </div>
                <div class="flex space-x-2 xl:space-x-12">
                  <div class="flex items-center space-x-1 xl:space-x-3">
                    <i class="ph-alarm text-base xl:text-lg text-success"></i>
                    <p class="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-primary">
                      7 weeks
                    </p>
                  </div>
                  <div class="flex items-center space-x-1 xl:space-x-3">
                    <i class="ph-book-open text-base xl:text-lg text-success"></i>
                    <p class="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-primary">
                      20 Lessons
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- course content accordion started  --> */}
              {/* <!-- Accordion --> */}
              <div class="accordion-container border-[1px] border-[#EDEDED] rounded-[4px]">
                <div class="overflow-y-auto scrollbar-main">
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        Introduction
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        Creating A Firebase Project
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        Fields In React
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Routing
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion mb-4">
                    <div class="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                      <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                        React Dom
                      </p>
                      <img src="../assets/images/svg/CaretDown.svg" alt="" />
                    </div>
                    <div class="accordion-content hidden">
                      <div class="space-y-4 pt-4">
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <input
                              type="checkbox"
                              id="course"
                              name="course"
                              value="course"
                            />
                            <label
                              for="course"
                              class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary"
                            >
                              Course Introduction
                            </label>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <img
                              src="../assets/images/svg/PlayCircle2.svg"
                              class="-ml-1"
                              alt=""
                            />
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              What is Angular
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <div class="radialProgressBar progress-70">
                              <div class="overlay">70%</div>
                            </div>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Angular file introduction
                            </p>
                          </div>
                          <div class="flex space-x-2 xl:space-x-4">
                            <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]">
                              Preview
                            </button>
                            <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                              00:45
                            </p>
                          </div>
                        </div>
                        <div class="flex justify-between py-2 px-4">
                          <div class="flex space-x-2 xl:space-x-4">
                            <i class="ph-file-text text-[#51525B] text-xl"></i>
                            <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                              Course Introduction.txt
                            </p>
                          </div>
                          <div>
                            <i class="ph-lock-key text-[#A8A8AD] text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- course content accordion end  --> */}
            </div>
          </Section>
          <Section
            id="Instructor"
            color="green"
            classprops="course-tab-content py-8 xl:py-16"
          >
            <div>
              <h3 class="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 text-primary mb-6 text-center xl:text-left">
                Instructor profile
              </h3>
              <div class="flex flex-col xl:flex-row xl:divide-x divide-[#E7E7E7]">
                <div class="w-full xl:w-[204px] flex flex-shrink-0 flex-col justify-center xl:items-start items-center p-4 pl-0">
                  <div class="mx-auto">
                    <i class="ph-image-square text-[63px] text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-7 "></i>
                  </div>
                  <div class="flex items-center justify-center space-x-2 xl:space-x-3 pt-6">
                    <Link to="#">
                      {" "}
                      <img
                        class="bg-[#F3F3F3] rounded-[4px] py-[5px] px-2"
                        src="../assets/images/svg/facebook.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="#">
                      {" "}
                      <img
                        class="bg-[#F3F3F3] rounded-[4px] py-[5px] px-2"
                        src="../assets/images/svg/twitter.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="#">
                      <img
                        class="bg-[#F3F3F3] rounded-[4px] py-[5px] px-2"
                        src="../assets/images/svg/youtube.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="#">
                      <img
                        class="bg-[#F3F3F3] rounded-[4px] py-[5px] px-2"
                        src="../assets/images/svg/Linkedin.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div class="w-full xl:w-[216px] flex flex-shrink-0 flex-col justify-center xl:items-start items-center p-1 xl:p-3">
                  <h3 class="font-poppins font-medium text-lg leading-7 text-disable mb-2.5">
                    Jon Andarson
                  </h3>
                  <p class="text-[#838893] font-poppins text-base leading-8">
                    Web Dev ekoper
                  </p>
                  <p class="text-[#838893] font-poppins text-base leading-8">
                    andarson@aducat.com
                  </p>
                  <p class="text-[#838893] font-poppins text-base leading-8">
                    +(222) 3456 278
                  </p>
                </div>
                <div class="flex flex-grow flex-col justify-center xl:items-start items-center xl:pl-4">
                  <h3 class="text-disable font-poppins font-medium text-lg leading-7 mb-2">
                    About
                  </h3>
                  <p class="text-[#838893] font-poppins text-xs xl:text-sm leading-[18px] xl:leading-[21px] text-justify">
                    Sit amet conse ctetur adipi sicing elit. Aut animi sed labo
                    rum. Nam esse ipsum ab mole stias rem corr upti moles tiae
                    expe dita hic aspe riores eius, vitae unde neces sitat ibus,
                    mai ore bland itiis magni. dolor sit amet conse ctetur adipi
                    sicing elit. Aut animi sed labo rum.
                  </p>
                </div>
              </div>
            </div>
          </Section>
          <Section
            id="Reviews"
            color="red"
            classprops="course-tab-content py-8 xl:py-16"
          >
            <div class="flex justify-between mb-8">
              <h3 class="font-poppins font-medium text-base xl:text-2xl leading-6 xl:leading-[38px] text-primary">
                Review
              </h3>
              <div class="flex">
                <div class="flex items-center justify-center space-x-1">
                  <img src="../assets/images/svg/star-fill.svg" alt="" />
                  <p class="font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                    4.5
                  </p>
                  <p class="font-poppins text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                    course rating
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- one  --> */}
            <div class="space-y-4 xl:space-y-6 mb-8">
              <div class="flex justify-between pt-8 border-b pb-3 border-[#F1F1F2]">
                <div class="flex space-x-2 xl:space-x-4">
                  <div>
                    <i class="ph-image-square text-[32px] text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-3"></i>
                  </div>
                  <div class="max-w-[431px]">
                    <h3 class="font-poppins font-medium text-[13px] xl:text-base leading-5 xl:leading-6 text-primary mb-1">
                      Gertude Culbertson
                    </h3>
                    <div class="flex space-x-1 xl:space-x-[5px]">
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <p class="text-success pl-2 xl:pl-4">4.6</p>
                    </div>
                    <p class="pt-1 xl:pt-[11px] font-poppins text-[11px] xl:text-base leading-4 text-primary">
                      I've improved my negotiation skill thank to this course.
                    </p>
                  </div>
                </div>
                <div class="flex space-x-1 max-w-[100px]">
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    February
                  </p>
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    2020
                  </p>
                </div>
              </div>
              <div class="flex justify-between pt-8 border-b pb-3 border-[#F1F1F2]">
                <div class="flex space-x-2 xl:space-x-4">
                  <div>
                    <i class="ph-image-square text-[32px] text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-3"></i>
                  </div>
                  <div class="max-w-[431px]">
                    <h3 class="font-poppins font-medium text-[13px] xl:text-base leading-5 xl:leading-6 text-primary mb-1">
                      Gertude Culbertson
                    </h3>
                    <div class="flex space-x-1 xl:space-x-[5px]">
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <p class="text-success pl-2 xl:pl-4">4.6</p>
                    </div>
                    <p class="pt-1 xl:pt-[11px] font-poppins text-[11px] xl:text-base leading-4 text-primary">
                      I've improved my negotiation skill thank to this course.
                    </p>
                  </div>
                </div>
                <div class="flex space-x-1 max-w-[100px]">
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    February
                  </p>
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    2020
                  </p>
                </div>
              </div>
              <div class="flex justify-between pt-8 border-b pb-3 border-[#F1F1F2]">
                <div class="flex space-x-2 xl:space-x-4">
                  <div>
                    <i class="ph-image-square text-[32px] text-[#CDCDCD] bg-[#EEEEEE] rounded-full p-3"></i>
                  </div>
                  <div class="max-w-[431px]">
                    <h3 class="font-poppins font-medium text-[13px] xl:text-base leading-5 xl:leading-6 text-primary mb-1">
                      Gertude Culbertson
                    </h3>
                    <div class="flex space-x-1 xl:space-x-[5px]">
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <img src="../assets/images/svg/star-fill.svg" alt="" />
                      <p class="text-success pl-2 xl:pl-4">4.6</p>
                    </div>
                    <p class="pt-1 xl:pt-[11px] font-poppins text-[11px] xl:text-base leading-4 text-primary">
                      I've improved my negotiation skill thank to this course.
                    </p>
                  </div>
                </div>
                <div class="flex space-x-1 max-w-[100px]">
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    February
                  </p>
                  <p class="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 text-[#9DA6BA]">
                    2020
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- form start  --> */}
            <form class="py-8 p-6 rounded-xl shadow-md">
              <h3 class="font-poppins font-medium text-base xl:text-base leading-6 xl:leading-9 text-primary mb-4">
                Add Review
              </h3>
              <div class="flex flex-col xl:flex-row gap-6">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your name"
                  class="w-[248px] xl:w-[392px] h-[39px] xl:h-[42px] border-[1px] border-[#F1F1F2] rounded-md pl-2.5 outline-none"
                />
                <input
                  type="text"
                  name=""
                  placeholder="Enter your email"
                  class="w-[248px] xl:w-[392px] h-[39px] xl:h-[42px] border-[1px] border-[#F1F1F2] rounded-md pl-2.5 outline-none"
                />
              </div>
              <div class="pt-4">
                <h3 class="mb-2 font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6">
                  Rating
                </h3>
                <div class="flex space-x-[5px]">
                  <img
                    class=""
                    src="../assets/images/svg/Star-black.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../assets/images/svg/Star-black.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../assets/images/svg/Star-black.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../assets/images/svg/Star-black.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../assets/images/svg/Star-black.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="py-6">
                <textarea
                  rows=""
                  cols=""
                  placeholder="Write your comments"
                  class="w-[248px] xl:w-[808px] h-[114px] xl:h-[158px] rounded-md border-[1px] outline-none border-[#F1F1F2] p-2.5"
                ></textarea>
              </div>
              <button
                type=""
                class="py-2 xl:py-[11px] px-6 bg-success rounded-md font-poppins font-semibold text-xs xl:text-base text-white leading-4 xl:leading-6"
              >
                Submit Review
              </button>
            </form>
            {/* <!-- form end --> */}
          </Section>
          <Section
            id="FAQ"
            color="green"
            classprops="course-tab-content  h-screen"
          >
            <div class="flex flex-col items-center mb-5 xl:mb-8">
              <h3 class="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 text-primary mb-2">
                Frequently asked questions
              </h3>
              <p class="font-poppins font-medium text-sm xl:text-base leading-5 text-primary opacity-[0.6]">
                Some random queries about this courses
              </p>
            </div>
            {/* <!-- Accordion --> */}
            <div class="acc-container">
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    Why wouldn't I just hire a full-time designer?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    Is there a limit to how many requests I can have?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    Who are the designers?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    What programs do you design in?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    How do I request designs?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    What if I don't like the design?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
              <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]">
                    What if I only have a single request?
                  </p>
                </div>
                <div class="acc-content">
                  <p class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    consectetur orci eu congue malesuada. Aliquam erat leo,
                    euismod non tellus ac, placerat tincidunt purus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Duis nibh
                    metus, elementum congue tincidunt vel, elementum quis
                    lectus. Cras placerat, urna ac lobortis tincidunt, massa
                    magna bibendum ipsum, a faucibus neque nibh eu neque. Nam
                    molestie fermentum orci, eu fermentum lacus vestibulum et.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </LayoutContext.Provider>
    </>
  );
};

export default CourseInformation;
