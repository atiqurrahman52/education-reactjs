import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { myProfileData } from "../../data/userDashboard/myProfileData";
import UserDashboardLayout from "../../layout/UserDashboardLayout";

import UserDashboardMenu from "./UserDashboardMenu";

// const [information, setInformation] = useState[myProfileData]
// console.log('my Info',information);

const Profile = () => {
  return (
    <UserDashboardLayout>
      <div className="max-w-[1076px]">
        <div className="shadow-[0px_0px_31px_rgba(175,175,175,0.16)] rounded-lg p-3 xl:p-8">
          <h1 className="font-poppins font-semibold text-lg xl:text-xl leading-[36px] text-primary mb-6">
            My Profile
          </h1>
          {myProfileData.map(
            ({
              id,
              userLocation,
              userName,
              userImg,
              coverImg,
              items,
              information,
            }) => (
              <>
                <div key={id}>
                  <div className="h-[150px]">
                    <img
                      src={coverImg}
                      className="w-full h-full object-cover rounded-md"
                      alt=""
                    />
                    <a href="#" className=""></a>
                  </div>
                  <div className="flex gap-1 xl:gap-5">
                    <div className="-mt-[67px] pl-3 md:pl-6">
                      <img src={userImg} alt="" className="rounded-lg" />
                    </div>
                    <div className="pt-6">
                      <p className="font-poppins font-semibold text-sm xl:text-lg leading-[22px] xl:leading-3 text-primary mb-2">
                        {userName}
                      </p>
                      <p className="font-poppins font-normal text-xs xl:text-sm leading-[19px] xl:leading-[22px] text-primary">
                        {userLocation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* {items.information.map(({ title, description, information }) => ( */}
                  <div className="pt-4 xl:pt-8">
                    <h2 className="font-poppins font-semibold text-base xl:text-lg leading-[26px] xl:leading-[29px] text-primary mb-4">
                      Personal Information
                    </h2>
                    <div className="flex justify-between gap-5">
                      <div className="space-y-1">
                        <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
                        Registration Date
                        </p>
                         <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
               Fast Name
             </p>
             <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
               Last Name
             </p>
             <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
               Email
             </p>
             <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
               Number
             </p>
             <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary">
               Location
             </p> 
             
                      </div>
                      <div className="space-y-1">
                        <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
                          Sat 20 Feb 2021, 02:57:04 pm
                     
                        </p>
                        <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
               Jon
             </p>
             <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
               Andarson
             </p>
             <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
               mymail@mail.com
             </p>
             <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
               (+855 594858 )
             </p>
             <p className="font-poppins  text-xs xl:text-base leading-[19px] xl:leading-[26px] text-[#51525B]">
               North America
             </p> 
                      </div>
                    </div>
                  </div>
                {/* ))} */}
              </>
            )
          )}

          <div>
             <p className="font-poppins font-medium text-xs xl:text-base leading-[19px] xl:leading-[26px] text-primary mb-2">
              BIO
            </p>
            <p className="font-poppins font-normal text-xs xl:textsm leading-[18px] xl:leading-[21px] text-[#637381]">
              Senior students often invoke the mantra “I have to do well at
              school in order to get into university” when asked about reasons
              for attending and doing well. This can be a genuine motivational
              factor,Senior students often invoke the mantra “I have to do well
              at school in order to get into university” when asked about
              reasons for attending and doing well. This can be a genuine
              motivational factor,
            </p> 
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Profile;
