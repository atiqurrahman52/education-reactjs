import React from "react";
import logo from "../../assets/images/footer/footerlogo.webp";
import android from "../../assets/images/footer/google.webp";
import apple from "../../assets/images/footer/apple.webp";
import { socialIconSvg } from "../../data/navigation/socialSvgData";

const Footer = () => {
  return (
    <div>
      <div class="py-8 xl:py-10 bg-[#071A35]">
        <div class="container">
          <div class="grid grid-cols-1 lsm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-x-6">
            <div>
              {/* <img
                  class="h-[92px] w-[168px] mb-6 xl:mb-8"
                  src="./assets/images/footer/footerlogo.webp"
                  alt=""
                /> */}
              <img
                className="h-[92px] w-[168px] mb-6 xl:mb-8"
                src={logo}
                alt="footer-logo"
              />
              <p class=" font-medium text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Let’s stay in touch
              </p>
              <div class="flex space-x-3 mb-6 xl:mb-8">
                {/* <a href="https://www.facebook.com/" target="_blank">
                    <img src="./assets/images/footer/Facebook.svg" alt="" />
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <img src="./assets/images/footer/Twitter.svg" alt="" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src="./assets/images/footer/Instagram.svg" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img src="./assets/images/footer/LinkedIn.svg" alt="" />
                  </a> */}
                {socialIconSvg.map((item, i) => {
                  return (
                    <a key={i} href={item.path} target="_blank" className="">
                      <p
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className=""
                      />
                    </a>
                  );
                })}
              </div>
              <div class="flex space-x-3 mb-6 xl:mb-0">
                <a href="https://play.google.com/store/apps" target="_blank">
                  <img class="h-9 w-28" src={android} alt="" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                  <img class="h-9 w-28" src={apple} alt="" />
                </a>
              </div>
            </div>

            <div class="flex flex-col lsm:ml-0 md:ml-10">
              <h1 class=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Company
              </h1>

              <a
                href="./index.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Home
              </a>
              <a
                href="./pages/contact.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Contact Us
              </a>
              <a
                href="./pages/about-us.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                About Us
              </a>
              <a
                href="./pages/all-courses.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Courses
              </a>
            </div>
            <div class="flex flex-col">
              <h1 class=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                Terms & Services
              </h1>

              <a
                href="./pages/terms.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Privacy policy
              </a>
              <a
                href="./pages/terms.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Terms and Condition
              </a>
              <a
                href="#"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Payment Methods
              </a>
              <a
                href="./pages/sitemap.html"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                Sitemap
              </a>
              <a
                href="#"
                class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
              >
                FAQ
              </a>
            </div>
            <div class="flex gap-28">
              <div class="flex flex-col">
                <h1 class=" font-semibold text-sm xl:text-base leading-5 xl:leading-6 text-white mb-4">
                  Categories
                </h1>

                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Development
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Personal Dev.
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Office
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Business
                </a>
              </div>
              <div class="flex flex-col lsm:-mr-9 xl:ml-0 mt-9">
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Design
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Photography
                </a>
                <a
                  href="$"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Statistics
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Data Science
                </a>
                <a
                  href="#"
                  class=" font-normal text-xs xl:text-sm leading-5 text-white opacity-[0.8] mb-2"
                >
                  Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#071A35] border py-6 border-t-[#6A7686]">
        <p class="text-white opacity-[0.4]  text-[10px] xl:text-sm leading-5 text-center">
          © 2022 prodigy - Payment Services. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
