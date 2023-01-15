import React, { useState } from "react";
import { OurMissionData } from "../../data/about/ourMissionData";
import Modal from "../share/Modal";

const OurMission = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
    
    <div class="container">
      {OurMissionData.map((data,id) => (
        <div key={id} class="grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-6">
            <h1 class="md:hidden font-poppins font-semibold text-xl md:text-[32px] leading-[30px] md:leading-[48px] text-primary mb-4 md:mb-6">
              {data.title}
            </h1>
            <div class="relative preview-btn">
           
              <img
              
                class="rounded-[10px] w-full md:max-w-[636px]"
                src={data.img1}
                alt=""
              />
              <div class="absolute inset-0 flex items-center justify-center"
               onClick={() =>setIsModalVisible(true)}>
                
                <img
              
                  class="w-[40px] md:w-[70px] cursor-pointer"
                  src={data.img2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-6">
            <h1 class="md:block xs:hidden font-poppins font-semibold text-xl md:text-[32px] leading-[30px] md:leading-[48px] text-primary mb-4 md:mb-6">
              {data.title}
            </h1>
            <p class="font-poppins font-medium text-sm md:text-base leading-5 md:leading-6 text-primary mb-3 md:mb-6">
              {data.header}
            </p>
            <div class="space-y-3 md:space-y-6">
              <div class="flex items-start space-x-3 md:space-x-4">
                <img class="pt-1" src={data.img3} alt="" />
                <p class="font-poppins text-xs md:text-base leading-[18px] md:leading-6 text-[#51525B]">
                Increase access to high-quality education for everyone, everywhere
                </p>
              </div>
              <div class="flex items-start space-x-3 md:space-x-4">
                <img class="pt-1" src={data.img3} alt="" />
                <p class="font-poppins text-xs md:text-base leading-[18px] md:leading-6 text-[#51525B]">
                  There are three commitments we've made to the world. We've
                  been grounded by these since day one.
                </p>
              </div>
              <div class="flex items-start space-x-3 md:space-x-4">
                <img class="pt-1" src={data.img3} alt="" />
                <p class="font-poppins text-xs md:text-base leading-[18px] md:leading-6 text-[#51525B]">
                  There are three commitments we've made to the world. We've
                  been grounded by these since day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   

    {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
    </>
  )
};

export default OurMission;
