import {
  Alarm,
  BookOpen,
  CaretDown,
  CaretUp,
  FileText,
  LockKey,
  PlayCircle,
} from "phosphor-react";
import React, { useState } from "react";
import caretDown from "../../assets/images/svg/CaretDown.svg";
import { courseContentData } from "../../data/courseDetails/courseContentData";
import { FaqData } from "../../data/privacy/FaqData";
import Modal from "../share/Modal";

const CourseContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [accordionActive, setAccordionActive] = useState(0);
  return (
    <div id="course-content" class="course-tab-content py-8 xl:py-16">
      <>
      <div>
        <div class="flex justify-between mb-4">
          <div>
            <h3 class="font-poppins font-semibold text-sm xl:text-2xl leading-5 xl:leading-9 text-primary">
              Course content
            </h3>
          </div>
          <div class="flex space-x-2 xl:space-x-12">
            <div class="flex items-center space-x-1 xl:space-x-3">
              <Alarm size={18} className="text-success" />

              <p class="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-primary">
                7 weeks
              </p>
            </div>
            <div class="flex items-center space-x-1 xl:space-x-3">
              <BookOpen size={18} className="text-success" />
              <p class="font-poppins text-xs xl:text-base leading-4 xl:leading-6 text-primary">
                20 Lessons
              </p>
            </div>
          </div>
        </div>

        {/* <!-- course content accordion started  --> */}
     
        <div class="accordion-container border-[1px] border-[#EDEDED] rounded-[4px]">
          <div class="overflow-y-auto scrollbar-main">
            {courseContentData.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() =>
                  setAccordionActive(id === accordionActive ? "" : id)
                }
                className=" mb-4"
              >
                <div className="accordion-head flex justify-between items-center bg-[#F9F9FB] py-[14px] xl:py-[11px] px-4 rounded-md">
                  <p class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-[26px] text-primary">
                   {title}
                  </p>

                  {id === accordionActive ? (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1933 8.7919C20.1359 8.6554 20.0394 8.53893 19.916 8.45719C19.7925 8.37544 19.6476 8.33206 19.4995 8.33252H4.49954C4.35147 8.33206 4.20658 8.37544 4.08312 8.45719C3.95966 8.53893 3.86316 8.6554 3.80579 8.7919C3.75175 8.93043 3.73804 9.08143 3.76625 9.22743C3.79445 9.37343 3.86342 9.50846 3.96516 9.6169L11.4652 17.1169C11.6085 17.2555 11.8001 17.333 11.9995 17.333C12.1989 17.333 12.3906 17.2555 12.5339 17.1169L20.0339 9.6169C20.1357 9.50846 20.2046 9.37343 20.2328 9.22743C20.261 9.08143 20.2473 8.93043 20.1933 8.7919Z"
                        fill="#0E2341"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.70938 3.88899C8.57288 3.94637 8.45641 4.04286 8.37466 4.16632C8.29292 4.28978 8.24954 4.43467 8.25 4.58274L8.25 19.5827C8.24954 19.7308 8.29292 19.8757 8.37467 19.9992C8.45641 20.1226 8.57288 20.2191 8.70938 20.2765C8.84791 20.3305 8.99891 20.3442 9.14491 20.316C9.29091 20.2878 9.42594 20.2189 9.53438 20.1171L17.0344 12.6171C17.173 12.4738 17.2505 12.2821 17.2505 12.0827C17.2505 11.8833 17.173 11.6917 17.0344 11.5484L9.53438 4.04836C9.42594 3.94662 9.29091 3.87765 9.14491 3.84945C8.99891 3.82125 8.84791 3.83496 8.70938 3.88899Z"
                        fill="#0E2341"
                      />
                    </svg>
                  )}
                </div>

                {id === accordionActive && (
                  <div class="accordion-content ">
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
                          <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]"
                          onClick={() => setIsModalVisible(true)}
                          >
                            Preview
                          </button>
                          <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                            00:45
                          </p>
                        </div>
                      </div>

                      <div class="flex justify-between py-2 px-4">
                        <div class="flex space-x-2 xl:space-x-4">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 21.0825C16.9706 21.0825 21 17.0531 21 12.0825C21 7.11196 16.9706 3.08252 12 3.08252C7.02944 3.08252 3 7.11196 3 12.0825C3 17.0531 7.02944 21.0825 12 21.0825Z"
                              fill="#637381"
                            />
                            <path
                              d="M15 12.0825L10.5 9.08252V15.0825L15 12.0825Z"
                              fill="white"
                            />
                          </svg>

                          <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                            What is Angular
                          </p>
                        </div>
                        <div class="flex space-x-2 xl:space-x-4">
                          <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]"
                           onClick={() => setIsModalVisible(true)}
                          >
                            Preview
                          </button>
                          <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                            00:45
                          </p>
                        </div>
                      </div>

                      <div class="flex justify-between py-2 px-4">
                        <div class="flex space-x-2 xl:space-x-4">
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.77842 8.41752C7.01008 8.41752 7.21758 8.45585 7.40092 8.53252C7.58425 8.60919 7.72925 8.72085 7.83592 8.86752C7.94258 9.01419 7.99592 9.19252 7.99592 9.40252C7.99592 9.59919 7.94258 9.76419 7.83592 9.89752C7.73092 10.0309 7.59508 10.1325 7.42842 10.2025C7.55008 10.2259 7.66592 10.2825 7.77592 10.3725C7.88758 10.4625 7.97925 10.5717 8.05092 10.7C8.12258 10.8284 8.15842 10.9625 8.15842 11.1025C8.15842 11.3109 8.10092 11.4925 7.98592 11.6475C7.87258 11.8025 7.71258 11.9234 7.50592 12.01C7.29925 12.095 7.05675 12.1375 6.77842 12.1375C6.50175 12.1375 6.26008 12.095 6.05342 12.01C5.84675 11.9234 5.68592 11.8025 5.57092 11.6475C5.45758 11.4925 5.40092 11.3109 5.40092 11.1025C5.40092 10.9625 5.43592 10.8284 5.50592 10.7C5.57758 10.5717 5.66925 10.4625 5.78092 10.3725C5.89258 10.2825 6.00925 10.2259 6.13092 10.2025C5.96592 10.1325 5.82925 10.0309 5.72092 9.89752C5.61425 9.76419 5.56092 9.59919 5.56092 9.40252C5.56092 9.19252 5.61425 9.01419 5.72092 8.86752C5.82758 8.72085 5.97258 8.60919 6.15592 8.53252C6.34092 8.45585 6.54842 8.41752 6.77842 8.41752ZM6.77842 10.0075C6.99842 10.0075 7.17675 9.95335 7.31342 9.84502C7.45175 9.73669 7.52092 9.58585 7.52092 9.39252C7.52092 9.19752 7.45175 9.04419 7.31342 8.93252C7.17508 8.81919 6.99675 8.76252 6.77842 8.76252C6.56008 8.76252 6.38175 8.81919 6.24342 8.93252C6.10508 9.04585 6.03592 9.19919 6.03592 9.39252C6.03592 9.58585 6.10508 9.73669 6.24342 9.84502C6.38175 9.95335 6.56008 10.0075 6.77842 10.0075ZM6.77842 11.7625C7.04675 11.7625 7.26092 11.7025 7.42092 11.5825C7.58092 11.4609 7.66092 11.3 7.66092 11.1C7.66092 10.9684 7.62425 10.8509 7.55092 10.7475C7.47925 10.6442 7.37758 10.5634 7.24592 10.505C7.11425 10.445 6.95842 10.415 6.77842 10.415C6.60008 10.415 6.44508 10.445 6.31342 10.505C6.18342 10.5634 6.08175 10.6442 6.00842 10.7475C5.93675 10.8509 5.90092 10.9684 5.90092 11.1C5.90092 11.3 5.98008 11.4609 6.13842 11.5825C6.29842 11.7025 6.51175 11.7625 6.77842 11.7625ZM9.90142 8.41752C10.2931 8.41752 10.6048 8.57502 10.8364 8.89002C11.0698 9.20335 11.1864 9.66752 11.1864 10.2825C11.1864 10.8942 11.0706 11.3567 10.8389 11.67C10.6073 11.9817 10.2931 12.1375 9.89642 12.1375C9.50142 12.1375 9.18809 11.9825 8.95642 11.6725C8.72476 11.3609 8.60892 10.9 8.60892 10.29C8.60892 9.87835 8.66226 9.53335 8.76892 9.25502C8.87559 8.97669 9.02559 8.76752 9.21892 8.62752C9.41226 8.48752 9.63976 8.41752 9.90142 8.41752ZM9.90142 11.7375C10.1598 11.7375 10.3548 11.6242 10.4864 11.3975C10.6198 11.1692 10.6864 10.7984 10.6864 10.285C10.6864 9.76169 10.6189 9.38502 10.4839 9.15502C10.3506 8.92335 10.1556 8.80752 9.89892 8.80752C9.64392 8.80752 9.44726 8.92419 9.30892 9.15752C9.17226 9.38919 9.10392 9.76502 9.10392 10.285C9.10392 10.7967 9.17226 11.1667 9.30892 11.395C9.44559 11.6234 9.64309 11.7375 9.90142 11.7375ZM12.5554 8.41252C12.7171 8.41252 12.8621 8.45502 12.9904 8.54002C13.1188 8.62502 13.2196 8.74502 13.2929 8.90002C13.3663 9.05502 13.4029 9.23752 13.4029 9.44752C13.4029 9.65752 13.3663 9.83919 13.2929 9.99252C13.2213 10.1459 13.1213 10.265 12.9929 10.35C12.8646 10.4334 12.7188 10.475 12.5554 10.475C12.3904 10.475 12.2429 10.4334 12.1129 10.35C11.9846 10.265 11.8829 10.1459 11.8079 9.99252C11.7329 9.83919 11.6954 9.65752 11.6954 9.44752C11.6954 9.23752 11.7329 9.05502 11.8079 8.90002C11.8829 8.74502 11.9846 8.62502 12.1129 8.54002C12.2429 8.45502 12.3904 8.41252 12.5554 8.41252ZM12.5504 10.2175C12.7104 10.2175 12.8329 10.1467 12.9179 10.005C13.0046 9.86335 13.0479 9.67752 13.0479 9.44752C13.0479 9.21419 13.0046 9.02669 12.9179 8.88502C12.8313 8.74169 12.7088 8.67002 12.5504 8.67002C12.4438 8.67002 12.3529 8.70335 12.2779 8.77002C12.2046 8.83502 12.1479 8.92585 12.1079 9.04252C12.0696 9.15919 12.0504 9.29419 12.0504 9.44752C12.0504 9.67585 12.0938 9.86169 12.1804 10.005C12.2671 10.1467 12.3904 10.2175 12.5504 10.2175ZM14.8179 10.065C14.9813 10.065 15.1271 10.1084 15.2554 10.195C15.3838 10.28 15.4846 10.4 15.5579 10.555C15.6313 10.71 15.6679 10.8917 15.6679 11.1C15.6679 11.31 15.6313 11.4925 15.5579 11.6475C15.4863 11.8025 15.3863 11.9225 15.2579 12.0075C15.1296 12.0909 14.9829 12.1325 14.8179 12.1325C14.6529 12.1325 14.5054 12.0909 14.3754 12.0075C14.2454 11.9225 14.1438 11.8025 14.0704 11.6475C13.9971 11.4925 13.9604 11.31 13.9604 11.1C13.9604 10.8917 13.9971 10.71 14.0704 10.555C14.1454 10.4 14.2479 10.28 14.3779 10.195C14.5079 10.1084 14.6546 10.065 14.8179 10.065ZM14.8129 11.87C14.9163 11.87 15.0054 11.8375 15.0804 11.7725C15.1554 11.7059 15.2129 11.615 15.2529 11.5C15.2929 11.385 15.3129 11.2534 15.3129 11.105C15.3129 10.9534 15.2921 10.8192 15.2504 10.7025C15.2104 10.5842 15.1529 10.4917 15.0779 10.425C15.0029 10.3584 14.9146 10.325 14.8129 10.325C14.7113 10.325 14.6229 10.3592 14.5479 10.4275C14.4729 10.4942 14.4154 10.5867 14.3754 10.705C14.3354 10.8217 14.3154 10.955 14.3154 11.105C14.3154 11.2534 14.3354 11.385 14.3754 11.5C14.4154 11.615 14.4721 11.7059 14.5454 11.7725C14.6204 11.8375 14.7096 11.87 14.8129 11.87ZM15.0254 8.42752L12.5954 12.1025L12.2829 12.1L14.7229 8.42752H15.0254Z"
                              fill="#212B36"
                            />
                            <path
                              d="M0 10.0825C-1.72906e-07 12.0603 0.586489 13.9937 1.6853 15.6382C2.78412 17.2827 4.3459 18.5644 6.17316 19.3213C8.00043 20.0782 10.0111 20.2762 11.9509 19.8904C13.8907 19.5045 15.6725 18.5521 17.0711 17.1536C18.4696 15.7551 19.422 13.9732 19.8079 12.0334C20.1937 10.0936 19.9957 8.08295 19.2388 6.25569C18.4819 4.42842 17.2002 2.86664 15.5557 1.76782C13.9112 0.66901 11.9778 0.0825197 10 0.0825195L10 1.88575C11.6212 1.88575 13.2059 2.36648 14.5539 3.26715C15.9018 4.16783 16.9524 5.44799 17.5728 6.94575C18.1932 8.44352 18.3555 10.0916 18.0393 11.6816C17.723 13.2716 16.9423 14.7322 15.796 15.8785C14.6497 17.0249 13.1891 17.8055 11.5991 18.1218C10.0091 18.4381 8.36099 18.2757 6.86323 17.6553C5.36547 17.035 4.08531 15.9844 3.18463 14.6364C2.28396 13.2884 1.80323 11.7037 1.80323 10.0825L0 10.0825Z"
                              fill="#1890FF"
                            />
                          </svg>
                          <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                            Angular file introduction
                          </p>
                        </div>
                        <div class="flex space-x-2 xl:space-x-4">
                          <button class="preview-btn font-poppins font-medium text-xs xl:text-sm text-success leading-[18px] xl:leading-[21px]"
                           onClick={() => setIsModalVisible(true)}
                          >
                            Preview
                          </button>
                          <p class="font-poppins font-normal text-xs xl:text-sm text-primary opacity-[0.6] leading-[18px] xl:leading-[21px]">
                            00:45
                          </p>
                        </div>
                      </div>

                      <div class="flex justify-between py-2 px-4">
                        <div class="flex space-x-2 xl:space-x-4">
                          <FileText size={20} className="text-[#51525B]" />
                          <p class="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-primary">
                            Course Introduction.txt
                          </p>
                        </div>
                        <div>
                          <LockKey size={20} className="text-[#A8A8AD]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

          
          </div>
        </div>
       
      </div>
      {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
      </>
     
      
    </div>
  );
};

export default CourseContent;
