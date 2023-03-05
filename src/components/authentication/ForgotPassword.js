import React from 'react';
import { Link } from 'react-router-dom';

const forgotPassword = () => {
    return (
        <div class="container">
        <div
          class="signup-body w-full flex items-center justify-center mt-28 md:mt-36 mb-10"
        >
          <div
            class="shadow-[-2px_24px_40px_rgba(112,128,176,0.15)] border border-[#F1F1F2] rounded-2xl max-w-[552px] max-h-[404px] p-6 md:p-9"
          >
            <h3
              class="font-poppins text-center font-semibold text-base md:text-2xl leading-5 md:leading-9 text-[#212B36] mb-4"
            >
              Forgot your password?
            </h3>
            <h5
              class="font-poppins text-center text-xs md:text-base leading-3 text-disable pb-5 md:pb-10"
            >
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </h5>

            <div class="">
              <input
                type="text"
                class="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] outline-none"
                placeholder="Email address"
              />
            </div>

            <div class="flex justify-center items-center py-5 xl:py-6">
              <button
                class="bg-success py-2 px-14 text-white rounded-md w-full lg:max-w-[264px]"
              >
                Reset Passward
              </button>
            </div>
            <div class="flex justify-center items-center">
             
              <Link class="font-publicSans cursor-pointer font-semibold text-[13px] md:text-[15px] leading-[22px] text-success" to="/sign-in">Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default forgotPassword;