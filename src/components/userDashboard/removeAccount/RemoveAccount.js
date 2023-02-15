import { useState } from "react";
import UserDashboardLayout from "../../../layout/UserDashboardLayout";
import RemoveAccountModal from "./RemoveAccountModal";

const RemoveAccount = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <UserDashboardLayout>
      <div
        id="remove-account"
        className="max-w-[1076px] h-full md:h-[650px] shadow-md rounded-2xl p-8"
      >
        <h3 className="font-poppins font-bold text-xs leading-[18px] uppercase text-[#637381] mb-1">
          Remove Account
        </h3>
        <p className="font-poppins font-normal text-xs leading-[18px] text-[#51525B] mb-4 md:mb-8">
          Close your account permanently
        </p>
        <p className="font-poppins font-extrabold text-xs leading-[18px] text-[#51525B] mb-4 md:mb-8">
          {" "}
          <span className="text-[#CE0000]">Warning:</span> If you close your
          account, you will lose access forever.
        </p>
        <div className="flex justify-end md:justify-start">
          <button
            type=""
            className="remove-account py-2 px-4 bg-success text-white rounded-md font-poppins font-medium text-sm leading-[21px]"
            onClick={() => setShowModal(true)}
          >
            Remove Account
          </button>
        </div>
      </div>

      {showModal && <RemoveAccountModal setShowModal={setShowModal} />}
    </UserDashboardLayout>
  );
};

export default RemoveAccount;
