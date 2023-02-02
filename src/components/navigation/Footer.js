import React from "react";
import logo from "../../assets/images/footer/footerlogo.webp";
import android from "../../assets/images/footer/google.webp";
import apple from "../../assets/images/footer/apple.webp";
import { socialIconSvg } from "../../data/navigation/socialSvgData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <div className="py-8 xl:py-10 bg-[#071A35]">
        <div className="container">
          <div className="grid grid-cols-1 lsm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-x-6">
            <div>
              <img
                className="h-[92px] w-[168px] mb-6 xl:mb-8"
                src={logo}
                alt="footer-logo"
              />
              <p className=" font-medium text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Let’s stay in touch
              </p>
              <div className="flex space-x-3 mb-6 xl:mb-8">
                {socialIconSvg.map((item, i) => {
                  return (
                    <a key={i} to={item.path} target="_blank" className="">
                      <p
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className=""
                      />
                    </a>
                  );
                })}
              </div>
              <div className="flex space-x-3 mb-6 xl:mb-0">
                <Link to="https://play.google.com/store/apps" target="_blank">
                  <img className="h-9 w-28" src={android} alt="" />
                </Link>
                <Link to="https://www.apple.com/app-store/" target="_blank">
                  <img className="h-9 w-28" src={apple} alt="" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col lsm:ml-0 md:ml-10">
              <h1 className=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Company
              </h1>

              <Link
                to="/"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Home
              </Link>
              <Link
                to="/contact-us"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Contact Us
              </Link>
              <Link
                to="/about-us"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                About Us
              </Link>
              <Link
                to="/all-courses"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Courses
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Terms & Services
              </h1>

              <Link
                to="/privacy"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Privacy policy
              </Link>
              <Link
                to="/privacy"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Terms and Condition
              </Link>
              <Link
                to="#"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Payment Methods
              </Link>
              <Link
                to="/sitemap"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Sitemap
              </Link>
              <Link
                to="#"
                className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                FAQ
              </Link>
            </div>
            <div className="flex gap-28">
              <div className="flex flex-col">
                <h1 className=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                  Categories
                </h1>

                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Development
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Marketing
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Personal Dev.
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Office
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Business
                </Link>
              </div>
              <div className="flex flex-col lsm:-mr-9 xl:ml-0 mt-9">
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Design
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Photography
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Statistics
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Data Science
                </Link>
                <Link
                  to="#"
                  className=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
 <div class="py-8 xl:py-10 bg-[#071A35]">
        <div class="container">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-4">
              <img
                class="h-[92px] w-[168px] mb-6 xl:mb-8 mx-auto lg:mx-0"
                src={logo}
                alt=""
              />
              <p
                class="font-poppins font-medium text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4 text-center lg:text-start"
              >
                Let’s stay in touch
              </p>
              <div class="flex space-x-3 mb-6 xl:mb-8 w-max mx-auto lg:mx-0">
               
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
              <div class="flex space-x-3 mb-6 xl:mb-0 w-max mx-auto lg:mx-0">
                <a href="https://play.google.com/store/apps" target="_blank">
                  <img
                    class="h-[35px] w-[116px]"
                    src={android}
                    alt=""
                  />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                  <img
                    class="h-[35px] w-[116px]"
                    src={apple}
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <h1
                class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4"
              >
                Company
              </h1>
              <ul class="flex flex-col gap-2">
                <li>
                  <a
                    href="../index.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="../pages/contact.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a
                    href="../pages/about-us.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    href="../pages/all-courses.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Courses</a
                  >
                </li>
              </ul>
            </div>

            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <h1
                class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4"
              >
                Terms & Services
              </h1>
              <ul class="flex flex-col gap-2">
                <li>
                  <a
                    href="../pages/terms.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Privacy policy</a
                  >
                </li>
                <li>
                  <a
                    href="../pages/terms.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Terms and Condition</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Payment Methods</a
                  >
                </li>
                <li>
                  <a
                    href="../pages/sitemap.html"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Sitemap</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >FAQ</a
                  >
                </li>
              </ul>
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
              <h1
                class="font-poppins font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4"
              >
                Categories
              </h1>
              <ul class="columns-2 space-y-2">
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Development</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Marketing</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Personal Dev.</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Office</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Business</a
                  >
                </li>

                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Design</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Photography</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Statistics</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Data Science</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="font-poppins font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8]"
                    >Courses</a
                  >
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
