import React from 'react';
import UserDashboardLayout from '../../layout/UserDashboardLayout';
import UserDashboardMenu from './UserDashboardMenu';

const PasswordSetting = () => {
    return (
     <UserDashboardLayout>
      <div className="max-w-[1076px] h-full lg:h-[650px] rounded-2xl shadow-md px-3 py-6 md:px-6 md:py-6">
                  <div className="relative mb-6">
                    <input
                      type="password"
                      className="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] text-[#6E7B8D] outline-none"
                      placeholder="Old Password"
                    />
                    <img
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      src="../assets/images/svg/Icon-eye.svg"
                      alt=""
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      className="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] text-[#6E7B8D] outline-none"
                      placeholder="New Password"
                    />
                    <img
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      src="../assets/images/svg/Icon-eye.svg"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2 pt-2 mb-6">
                    <div className="flex space-x-[5px]">
                      <img src="../assets/images/svg/info.svg" alt=""/>
                      <p className="font-poppins text-sm leading-[21px] text-disable">Password length must be greater than 8 characters.</p>
                    </div>
                    <div className="flex space-x-[5px]">
                      <img src="../assets/images/svg/info.svg" alt=""/>
                      <p className="font-poppins text-sm leading-[21px] text-disable">Password must contain a special character (@, $, !, &, etc).</p>
                    </div>
                    <div className="flex space-x-[5px]">
                      <img src="../assets/images/svg/info.svg" alt=""/>
                      <p className="font-poppins text-sm leading-[21px] text-disable">Atleast one word should be capital.</p>
                    </div>
                    
                  </div>
  
                  <div className="relative">
                    <input
                      type="password"
                      className="rounded-lg py-2 xl:py-3 w-full border-[1px] border-[#DCE0E4] pl-[14px] text-[#6E7B8D] outline-none"
                      placeholder="New Password"
                    />
                    <img
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      src="../assets/images/svg/Icon-eye.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      className="bg-success py-2 px-6 rounded-md font-poppins font-semibold text-sm leading-[21px] text-white"
                      type="">
                      Save Changes
                    </button>
                  </div>
                  
                </div>
     </UserDashboardLayout>
     
    );
};

export default PasswordSetting;