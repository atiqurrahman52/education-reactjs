import { EnvelopeOpen, MapPin, Phone } from "phosphor-react";
import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-6 py-8 xl:py-16">
        <div className="col-span-12 md:col-span-4">
          <h1 className="font-poppins font-semibold xl:font-bold text-base xl:text-[32px] leading-6 p-2.5 border-b-[1px] border-success">
            Contact Info
          </h1>
          <div className="pt-4 xl:pt-10 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3 xl:space-x-6">
              <span className="bg-white drop-shadow-[4px_4px_16px_rgba(112,128,176,0.16)] rounded-full w-10 xl:w-[54px] h-10 xl:h-[54px] flex items-center justify-center">
                <i className="ph-phone text-success text-2xl xl:text-[32px]"></i>
                <Phone size={24} className='text-success' />
              </span>
              <div>
                <p className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-success mb-2.5">
                  Phone no.
                </p>

                <a
                  href="tel:0123 3456 7890"
                  className="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-[#51525B]"
                >
                  0123 3456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 xl:space-x-6">
              <span className="bg-white drop-shadow-[4px_4px_16px_rgba(112,128,176,0.16)] rounded-full w-10 xl:w-[54px] h-10 xl:h-[54px] flex items-center justify-center">
             
                <EnvelopeOpen size={24} className='text-success' />
              </span>
              <div>
                <p className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-success mb-2.5">
                  Email
                </p>

                <a
                  href="mailto: youremail@mail.com"
                  className="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-[#51525B]"
                >
                  prodigy@mail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 xl:space-x-6">
              <span className="bg-white drop-shadow-[4px_4px_16px_rgba(112,128,176,0.16)] rounded-full w-10 xl:w-[54px] h-10 xl:h-[54px] flex items-center justify-center">
                <i className="ph-map-pin text-success text-2xl xl:text-[32px]"></i>
                <MapPin size={24} className="text-success" />
              </span>
              <div>
                <p className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-success mb-2.5">
                  Office address
                </p>
                <p className="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-[#51525B]">
                  43 castle road 517 district,
                  <br />
                  kiyev port south Canada​.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 p-0 lg:p-6">
          <h1 className="font-poppins font-bold text-2xl leading-9 text-[#51525B] capitalize mb-2 xl:mb-8">
            <span className="text-success">Keep in</span> touch
          </h1>
          <form className="pt-2 lg:pt-8 space-y-4 lg:space-y-6">
            <div className="flex gap-3 md:gap-6">
              <input
                type="text"
                placeholder="First name"
                className="border border-[#B1B1B1] py-2.5 pl-2.5 rounded-[4px] placeholder:text-primary outline-none h-[39px] md:h-[46px] w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-[#B1B1B1] py-2.5 pl-2.5 rounded-[4px] placeholder:text-primary outline-none h-[39px] md:h-[46px] w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-[#B1B1B1] py-2.5 pl-2.5 rounded-[4px] placeholder:text-primary outline-none h-[46px] w-full"
              />
            </div>
            <div>
              <textarea
                placeholder="Write your message"
                rows="4"
                cols=""
                className="border border-[#B1B1B1] py-2.5 pl-2.5 rounded-[4px] placeholder:text-primary outline-none h-[114px] md:h-[146px] w-full"
              ></textarea>
            </div>
            <div>
              <button className="py-2 md:py-[11px] px-5 md:px-6 bg-success font-poppins font-semibold text-sm md:text-base leading-[21px] md:leading-6 text-white rounded-md">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
