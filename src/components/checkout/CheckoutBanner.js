import React from 'react';

const CheckoutBanner = () => {
    return (
        <div class="breadcrumb bg-cover bg-center bg-no-repeat h-[250px]">
          <div class="container">
            <div class="flex items-center gap-2 pt-6">
              <p
                class="text-primary font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
              >
                web Development
              </p>
              <i class="ph-caret-right text-primary"></i>
              <p
                class="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
              >
                JavaScript
              </p>
              <i class="ph-caret-right text-primary"></i>
              <p
                class="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5"
              >
                Checkout
              </p>
            </div>

            <h2
              class="font-poppins font-medium text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary pt-14"
            >
              Checkout
            </h2>
          </div>
        </div>
    );
};

export default CheckoutBanner;