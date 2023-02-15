import React from "react";
import logo from "../../assets/images/footer/footerlogo.webp";
import android from "../../assets/images/footer/google.webp";
import apple from "../../assets/images/footer/apple.webp";
import { socialIconSvg } from "../../data/navigation/socialSvgData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="py-8 xl:py-10 bg-[#071A35]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
             <Link to='/'>
             <img
                className="h-[92px] w-[168px] mb-6 xl:mb-8 mx-auto lg:mx-0"
                src={logo}
                alt=""
              />
             </Link>
              <p className="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4 text-center lg:text-start">
                Let’s stay in touch
              </p>
              <div className="flex space-x-3 mb-6 xl:mb-8 w-max mx-auto lg:mx-0">
                {socialIconSvg.map((item, i) => {
                  return (
                    <Link key={i} to={item.path} target="_blank" className="">
                      <p
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className=""
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="flex space-x-3 mb-6 xl:mb-0 w-max mx-auto lg:mx-0">
                <Link to="https://play.google.com/store/apps" target="_blank">
                  <img className="h-[35px] w-[116px]" src={android} alt="" />
                </Link>
                <Link to="https://www.apple.com/app-store/" target="_blank">
                  <img className="h-[35px] w-[116px]" src={apple} alt="" />
                </Link>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h1 className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Company
              </h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-courses"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h1 className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Terms & Services
              </h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/privacy"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sitemap"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h1 className="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Categories
              </h1>
              <ul className="columns-2 space-y-2">
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Personal Dev.
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Office
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Business
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Statistics
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#071A35] border py-6 border-t-[#6A7686]">
        <p className="text-white opacity-[0.4]  text-[10px] xl:text-sm leading-5 text-center">
          © 2022 prodigy - Payment Services. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
