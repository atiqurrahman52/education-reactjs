import { ArrowDown, Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { FaqData } from "../../data/privacy/FaqData";

const Faq = () => {
  const [accordionActive, setAccordionActive] = useState(0);
  return (
    <div className="container">
      <div className="py-9 md:py-10">
        <div className="grid grid-cols-12 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default Faq;
