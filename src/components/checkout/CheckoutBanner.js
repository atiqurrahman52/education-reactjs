import React from "react";

const CheckoutBanner = () => {
  return (
    <div className="breadcrumb bg-cover bg-center bg-no-repeat h-[250px]">
      <div className="container">
        <div className="flex items-center gap-2 pt-6">
          <p className="text-primary font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
            web Development
          </p>
          <i className="ph-caret-right text-primary"></i>
          <p className="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
            JavaScript
          </p>
          <i className="ph-caret-right text-primary"></i>
          <p className="text-[#9DA6BA] font-poppins text-xs xl:text-sm leading-4 xl:leading-5">
            Checkout
          </p>
        </div>

        <h2 className="font-poppins font-medium text-xl xl:text-4xl leading-7 xl:leading-[54px] text-primary pt-14">
          Checkout
        </h2>
      </div>
    </div>
  );
};

export default CheckoutBanner;
