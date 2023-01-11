import React from 'react';

import google from '../../assets/images/svg/gogle.svg'
import facebook from '../../assets/images/svg/facebook1.svg'
import twitter from '../../assets/images/svg/facebook1.svg'

const SignUp = () => {
    return (
        <div class="container">
      
        <div
          class="signup-body w-full flex items-center justify-center my-10 lg:my-20"
        >
          <div
            class="shadow-[-2px_24px_40px_rgba(112,128,176,0.15)] border border-[#F1F1F2] rounded-2xl max-w-[552px] p-2  md:p-9"
          >
            <h3
              class="font-poppins text-center font-semibold text-base xl:text-2xl leading-5 xl:leading-9 text-[#212B36] mb-2"
            >
              Get started absolutely free. 
            </h3>
            <h5
              class="font-poppins text-center text-xs xl:text-base leading-3 text-disable"
            >
              Free forever. No credit card needed.
            </h5>

            <div class="flex space-x-4 pt-4 xl:pt-10">
              <a
                href="/"
                class="border-[1px] border-[#DCE0E4] py-2 w-full flex items-center justify-center rounded-lg"
              >
                <img src={google} alt="" />
              </a>
              <a
                href="/"
                class="border-[1px] border-[#DCE0E4] py-2 w-full flex items-center justify-center rounded-lg"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="/"
                class="border-[1px] border-[#DCE0E4] py-2 w-full flex items-center justify-center rounded-lg"
              >
                <img src={twitter} alt="" />
              </a>
            </div>

            <div
              class="flex justify-center items-center space-x-2 xl:space-x-4 py-5 xl:py-6"
            >
              <div class="bg-[#E5E8EB] w-1/2 h-[1px]"></div>
              <p
                class="text-sm xl:text-base text-[#637381] font-poppins font-semibold uppercase"
              >
                OR
              </p>
              <div class="bg-[#E5E8EB] w-1/2 h-[1px]"></div>
            </div>

            <div class="space-y-4 xl:space-y-6">
              <div>
                <input
                  type="text"
                  class="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] outline-none"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] outline-none"
                  placeholder="Email address"
                />
              </div>

              <div class="relative">
                <input
                  type="password"
                  class="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] outline-none"
                  placeholder="Password"
                />
                <img
                  class="absolute right-3 top-1/2 -translate-y-1/2"
                  src="../assets/images/svg/Icon-eye.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="flex justify-center items-center py-5 xl:py-6">
              <button
                class="bg-success py-2 px-14 text-white rounded-md w-full lg:max-w-[264px]"
              >
                Create Account
              </button>
            </div>

            <div class="">
              <label
                class="text-xs md:text-sm leading-[22px] text-[#637381] font-publicSans gap-2 flex items-start justify-start"
              >
                <input
                  type="checkbox"
                  class="accent-[#00AB55] mt-[6px] md:mt-[4px]"
                />
                <span class="">
                  By signing up, I agree to Prodigy
                  <a
                    href="../pages/terms.html"
                    target="_blank"
                    class="font-semibold text-primary border-b border-primary"
                    >Terms of Service</a
                  >
                  and
                  <a
                    href="../pages/terms.html"
                    target="_blank"
                    class="font-semibold text-primary border-b border-primary"
                  >
                    Privacy Policy.</a
                  >
                </span>
              </label>
            </div>

            <div class="flex justify-center items-center py-5 xl:py-6">
              <span
                class="font-publicSans text-xs md:text-sm leading-[22px] text-primary"
                >Already have an account?
                <a href="../pages/signin.html" class="text-success"> Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;