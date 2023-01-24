import UserDashboardLayout from '../../layout/UserDashboardLayout';


const MyNotification = () => {
    return (
       <UserDashboardLayout>
         <div className="max-w-[1076px] h-full lg:h-[650px] rounded-2xl shadow-md p-6">
                <h3 className="uppercase font-poppins font-bold text-base leading-6 text-[#637381] mb-4">Notification</h3>
                <div className="space-y-4">
                     <label className="flex items-center space-x-3">
                       <div className="switch">
                         <input type="checkbox" checked />
                         <span className="slider"></span>
                       </div>
                       <p className="font-poppins text-xs md:text-base leading-6 text-[#212B36]">Course update notification</p>
                     </label>
                     <label className="flex items-center space-x-3">
                       <div className="switch">
                         <input type="checkbox" />
                         <span className="slider"></span>
                       </div>
                       <p className="font-poppins text-xs md:text-base leading-6 text-[#212B36]">New course from any instructor</p>
                     </label>
                     <label className="flex items-center space-x-3">
                       <div className="switch">
                         <input type="checkbox" />
                         <span className="slider"></span>
                       </div>
                       <p className="font-poppins text-xs md:text-base leading-6 text-[#212B36]">Email any promotions updates</p>
                     </label>
                   </div>
                   <div className=" flex justify-end pt-10">
                    <button type="" className="py-2 px-4 bg-success rounded-md text-white font-raleway text-xs md:text-sm leading-[21px]">Save Changes</button>
                   </div>
               </div>
       </UserDashboardLayout>
    );
};

export default MyNotification;