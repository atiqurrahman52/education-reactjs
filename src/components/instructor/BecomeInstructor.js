import React, { useEffect, useState } from "react";
import { instructorData } from "../../data/instructor/instructorData";

const BecomeInstructor = () => {
  const [tabActive, setTabActive] = useState(0);
  const [data, setData] = useState(instructorData[tabActive]);

  useEffect(() => {
    setData(instructorData[tabActive]);
  }, [tabActive, data]);

  const { content, img, tab } = data;
  console.log("my data", content);
  console.log("Image", img);
  return (
    <div className="py-8 xl:py-10">
      <div className="container">
        <h1 className="text-center font-poppins font-medium text-base xl:text-3xl leading-6 xl:leading-10 text-primary capitalize">
          How to Become an Instructor
        </h1>
        <div className="">
          <div className=" flex justify-center gap-5 py-3 xl:py-4 text-success scroll-bar overflow-x-auto mb-4 xl:mb-0">
            {instructorData.map(({ id, tab }) => (
              <p
                key={id}
                onClick={() => setTabActive(id)}
                className={`cursor-pointer font-poppins text-[#9EA7B3] ${
                  id === tabActive &&
                  "font-medium  text-base text-[#3789FF] border-b border-[#3789FF]"
                }`}
              >
                {tab}
              </p>
            ))}
          </div>

          <div className="px-1 xl:px-20">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-7">
                <h1 className="font-poppins font-medium text-sm xl:text-2xl leading-5 xl:leading-8 text-primary capitalize">
                  {tab}
                </h1>
                {content.map(({ id, title, description }) => (
                  <div>
                    {tabActive === id && (
                      <div>
                        <div className="space-y-3 xl:space-y-4">
                          <h6 className="font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-6 text-primary capitalize">
                            {title}
                          </h6>
                          <p className="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 capitalize text-[#51525B] text-justify">
                            {description}
                          </p>
                        </div>
                        <div className="space-y-3 xl:space-y-4">
                          <h6 className="font-poppins font-medium text-xs xl:text-base leading-4 xl:leading-6 text-primary capitalize">
                            {title}
                          </h6>
                          <p className="font-poppins text-xs xl:text-sm leading-4 xl:leading-5 capitalize text-[#51525B] text-justify">
                            {description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-5">
                {instructorData.map(({id, img}) =>(
                  <div> 
                    {tabActive === id && (
                       <img className="w-full" src={img} alt="" />
                    )}
                  </div>

                ))}
                {/* <img className="w-full" src={img} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
