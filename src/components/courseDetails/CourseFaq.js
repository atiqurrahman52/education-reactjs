import { Minus, Plus } from 'phosphor-react';
import React, { useState } from 'react';
import { FaqData } from '../../data/privacy/FaqData';

const CourseFaq = () => {
  const [accordionActive, setAccordionActive] = useState(0);
    return (
        <div id="faq" class="course-tab-content">
            <div class="flex flex-col items-center mb-5 xl:mb-8">
              <h3
                class="font-poppins font-semibold text-base xl:text-2xl leading-6 xl:leading-9 text-primary mb-2"
              >
                Frequently asked questions
              </h3>
              <p
                class="font-poppins font-medium text-sm xl:text-base leading-5 text-primary opacity-[0.6]"
              >
                Some random queries about this courses
              </p>
            </div>

            {/* <!-- Accordion --> */}

            <div class="acc-container">
            <div className="col-span-12 lg:col-span-10">
            {FaqData.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() =>
                  setAccordionActive(id === accordionActive ? "" : id)
                }
                className="border-b border-[#E6E7E9] mb-2.5"
              >
                <div className="flex items-center justify-between lg:text-xl  cursor-pointer py-4 px-2.5">
                  <p className="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25] ">
                    {title}
                  </p>

                  {id === accordionActive ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
                
                {id === accordionActive && (
                  <p
                    key={id}
                    className="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6 py-4 px-2.5 transition duration-1000"
                  >
                    {description}
                  </p>
                )}
              </div>
            ))}
          </div>

              {/* <div class="acc border-b border-[#E6E7E9]">
                <div class="acc-head">
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    Why wouldn't I just hire a full-time designer?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    Is there a limit to how many requests I can have?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    Who are the designers?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    What programs do you design in?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    How do I request designs?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    What if I don't like the design?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
                  <p
                    class="font-poppins font-medium xl:font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-[#060B25]"
                  >
                    What if I only have a single request?
                  </p>
                </div>
                <div class="acc-content">
                  <p
                    class="text-[#6A6D7C] font-poppins text-sm xl:text-base leading-5 xl:leading-6"
                  >
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
              </div> */}

            </div>
          </div>
    );
};

export default CourseFaq;