import { useState } from "react";

import Faq from "../components/privacy/Faq";
import TermsAndServiceContent from "../components/share/TermsAndServiceContent";

import { allPolicyData } from "../data/privacy/privacyData";

const TermsAndServices = () => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <>
      <div class="breadcrumb bg-no-repeat bg-center bg-cover h-[167px] xl:h-[250px]">
        <div class="container">
          <div class="flex py-[65px] xl:py-[98px]">
            <p class="font-poppins font-medium xl:font-semibold text-2xl xl:text-4xl leading-9 xl:leading-[54px] text-primary">
              Terms & Services
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-8 xl:pt-10 pb-8 xl:pb-[155px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-2">
              <div className="flex flex-row lg:flex-col items-center lg:items-start justify-start space-y-3 overflow-x-auto lg:overflow-x-hidden overflow-y-clip whitespace-nowrap">
                {[
                  "Privacy policy",
                  "Terms of services",
                  "Payment Methods",
                  "FAQ",
                ].map((item, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setTabActive(i)}
                      className={`text-xs xl:text-sm leading-[18px] xl:leading-[21px] py-2.5 px-6 w-full text-left ${
                        i === tabActive
                          ? "text-white bg-success"
                          : "text-primary/80"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              {tabActive === 3 ? (
                <Faq />
              ) : (
                <TermsAndServiceContent data={allPolicyData[tabActive]} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndServices;
