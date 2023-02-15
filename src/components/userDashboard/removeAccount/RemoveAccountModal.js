import React from "react";

const RemoveAccountModal = ({ setShowModal }) => {
  return (
    <div className="modal fixed z-50 inset-0 w-full flex items-center justify-center px-4 h-full">
      <div
        onClick={() => setShowModal(false)}
        className="modal-overlay fixed inset-0 bg-black/40 h-screen w-full items-center justify-center z-30"
      ></div>
      <div className="w-full md:w-[520px]  md:h-[245px] shadow-md rounded-2xl p-6 z-40 relative bg-white">
        <div>
          <h2 className="font-poppins font-semibold text-sm md:text-base leading-[21px] md:leading-6 text-primary mb-4 md:mb-6">
            Remove your account?
          </h2>
          <p className="font-poppins font-medium text-xs md:text-sm leading-[18px] md:leading-[21px] text-primary mb-3">
            Are you sure you want to remove your account?
          </p>
          <input
            className="py-2 md:py-4 px-[14px] border border-[#D3D4D6] rounded-lg w-full outline-none"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <div className="space-x-3 md:space-x-6 flex md:justify-end pt-4 md:pt-6">
          <button
            onClick={() => setShowModal(false)}
            className="remove-cancel w-[83px] h-[36px]  text-disable border border-disable rounded-md font-poppins text-sm leading-[21px] font-medium"
          >
            Cancel
          </button>
          <button className="bg-[#CE0000] w-[153px] h-[36px] text-white rounded-md font-poppins text-sm leading-[21px] font-medium">
            Remove Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAccountModal;
