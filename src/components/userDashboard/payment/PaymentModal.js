
const PaymentModal = ({setShowModal}) => {
  return (
    <div class="modal fixed z-50 inset-0 h-screen w-full flex items-center justify-center">
      <div onClick={() => setShowModal(false)} class="modal-overlay fixed inset-0 bg-black/40 h-screen w-full items-center justify-center z-30"></div>
      <div class="w-[296px] lg:w-[520px] shadow-md rounded-lg p-3 lg:p-6 relative z-40 bg-white ">
        <h1 class="font-poppins font-semibold text-base leading-6 mb-4 lg:mb-6">Add New Card</h1>
        <div class="">
          <div class="mb-4 lg:mb-6 space-y-4 lg:space-y-6">
            <input type="text" placeholder="Name on Card" class="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full" />
            <input type="text" placeholder="Card Number" class="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full" />
          </div>
            <div class="flex space-x-2">
              <input type="date" id="birthday" name="birthday" class="appearance-none border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full text-[#6E7B8D]" />
              <input type="text" placeholder="CVV" class="border border-[#D3D4D6] py-2.5 lg:py-4 px-[14px] rounded-lg outline-none w-full" />
            </div>

            <div class="flex justify-end pt-6 space-x-4">
              <button onClick={() => setShowModal(false)} class="cancel py-2 px-4 border border-[#51525B] font-poppins font-semibold text-sm leading-[21px] rounded-md">Cancel</button>
              <button class="bg-success py-2 px-6 text-white font-poppins font-semibold text-sm leading-[21px] rounded-md">Add</button>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default PaymentModal;