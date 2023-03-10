import { DotsThreeVertical } from "phosphor-react";
import { useState } from "react";
import UserDashboardLayout from "../../../layout/UserDashboardLayout";
import PaymentModal from "./PaymentModal";
import masterCard from "../../../assets/images/payment/mastercard.png";
import visa from "../../../assets/images/payment/visa.png";

const Payment = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <UserDashboardLayout>
      <div className="max-w-[1076px] h-screen md:h-[612px] shadow-md rounded-2xl py-4 px-3 lg:py-6 lg:px-5">
        <div className="flex justify-between pb-4 md:pb-6">
          <p className="font-poppins font-semibold lg:font-bold text-xs leading-[18px] text-[#637381] uppercase">
            Payment Method
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="add-card  font-poppins font-semibold lg:font-bold text-[13px] leading-[22px] text-[#00AB55] cursor-pointer"
          >
            Add New Card
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border border-[#E5E8EB] rounded-lg p-3 md:p-6 w-full lg:w-[506px]">
            <div className="flex justify-between mb-2">
              <img src={masterCard} alt="" />
              <button type="">
                <DotsThreeVertical
                  size={24}
                  weight="bold"
                  className="text-[#637381]"
                />
              </button>
            </div>
            <p className="font-poppins font-semibold text-sm leading-[22px] text-[#212B36]">
              **** **** **** 5678
            </p>
          </div>

          <div className="border border-[#E5E8EB] rounded-lg p-3 md:p-6 w-full lg:w-[506px]">
            <div className="flex justify-between mb-2">
              <img src={visa} alt="" />

              <button type="">
                <DotsThreeVertical
                  size={24}
                  weight="bold"
                  className="text-[#637381]"
                />
              </button>
            </div>
            <p className="font-poppins font-semibold text-sm leading-[22px] text-[#212B36]">
              **** **** **** 5678
            </p>
          </div>
        </div>
      </div>

      {showModal && <PaymentModal setShowModal={setShowModal} />}
    </UserDashboardLayout>
  );
};

export default Payment;
