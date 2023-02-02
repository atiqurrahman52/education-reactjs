const PaymentModal = ({ setShowModal }) => {
  return (
    <div className="modal fixed z-50 inset-0 h-screen w-full flex items-center justify-center">
      <div
        onClick={() => setShowModal(false)}
        className="modal-overlay fixed inset-0 bg-black/40 h-screen w-full items-center justify-center z-30"
      ></div>
      <div className="w-[296px] lg:w-[520px] shadow-md rounded-lg p-3 lg:p-6 relative z-40 bg-white ">
        <h1 className="font-poppins font-semibold text-base leading-6 mb-4 lg:mb-6">
          Add New Card
        </h1>
        <div className="">
          <div className="mb-4 lg:mb-6 space-y-4 lg:space-y-6">
            <input
              type="text"
              placeholder="Name on Card"
              className="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full"
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="appearance-none border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full text-[#6E7B8D]"
            />
            <input
              type="text"
              placeholder="CVV"
              className="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full"
            />
          </div>

          <div className="flex justify-end pt-6 space-x-4">
            <button
              onClick={() => setShowModal(false)}
              className="cancel py-2 px-4 border border-[#51525B] font-poppins font-semibold text-sm leading-[21px] rounded-md"
            >
              Cancel
            </button>
            <button className="bg-success py-2 px-6 text-white font-poppins font-semibold text-sm leading-[21px] rounded-md">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
